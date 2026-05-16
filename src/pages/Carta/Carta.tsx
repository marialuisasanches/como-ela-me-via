import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./carta.module.css";

type Props = {
  carta: string;
  fraseFinal: string;
  nome: string;
  onReiniciar: () => void;
};

export function Carta({ carta, fraseFinal, nome, onReiniciar }: Props) {
  const [palavrasVisiveis, setPalavrasVisiveis] = useState(0);
  const [mostrarFraseFinal, setMostrarFraseFinal] = useState(false);
  const [mostrarGesto, setMostrarGesto] = useState(false);
  const [gestoPessoal, setGestoPessoal] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [nitida, setNitida] = useState(false);

  const cartaLimpa = carta.replace(/⚠️.*?normally\./gs, "").trim();
  const palavras = cartaLimpa.length > 0 ? cartaLimpa.split(/\s+/) : [];
  const cartaCompleta =
    palavrasVisiveis >= palavras.length && palavras.length > 0;

  useEffect(() => {
    setPalavrasVisiveis(0);
    setMostrarFraseFinal(false);
    setMostrarGesto(false);
    setNitida(false);

    const blurTimer = window.setTimeout(() => {
      setNitida(true);
    }, 20);

    return () => window.clearTimeout(blurTimer);
  }, [cartaLimpa]);

  useEffect(() => {
    if (palavrasVisiveis >= palavras.length) return;

    const timeout = window.setTimeout(() => {
      setPalavrasVisiveis((valor) => Math.min(valor + 1, palavras.length));
    }, 75);

    return () => window.clearTimeout(timeout);
  }, [palavrasVisiveis, palavras.length]);

  useEffect(() => {
    if (!cartaCompleta) return;

    const timerFrase = window.setTimeout(() => {
      setMostrarFraseFinal(true);
    }, 4000);

    const timerGesto = window.setTimeout(() => {
      setMostrarGesto(true);
    }, 5600);

    return () => {
      window.clearTimeout(timerFrase);
      window.clearTimeout(timerGesto);
    };
  }, [cartaCompleta]);

  function copiarCarta() {
    navigator.clipboard.writeText(cartaLimpa).then(() => {
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2500);
    });
  }

  return (
    <motion.main
      className={styles.container}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {mostrarFraseFinal && fraseFinal.trim().length > 0 && (
        <motion.p
          className={styles.fraseFinal}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {fraseFinal}
        </motion.p>
      )}

      <div className={`${styles.papel} ${nitida ? styles.papelNitido : ""}`}>
        <motion.div
          className={styles.cabecalho}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.deLabel}>de</span>
          <p className={styles.de}>{nome || "Com amor,"}</p>
        </motion.div>

        <p className={styles.texto}>
          {palavras.map((palavra, i) => (
            <span
              key={i}
              className={styles.palavra}
              style={{
                opacity: i < palavrasVisiveis ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              {palavra}{" "}
            </span>
          ))}
          {!cartaCompleta && <span className={styles.cursor} />}
        </p>

        {mostrarGesto && (
          <motion.div
            className={styles.gestoContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <button className={styles.botaoCopiar} onClick={copiarCarta}>
              {copiado ? "carta copiada ✓" : "copiar carta"}
            </button>

            <div className={styles.divisorContainer}>
              <div className={styles.divisorLinha} />
              <div className={styles.divisorPonto} />
              <div className={styles.divisorLinha} />
            </div>

            <p className={styles.rodape}>
              Esta carta foi escrita por IA com as suas memórias.
              <br />
              Mas o amor que ela carrega é completamente seu.
            </p>

            <p className={styles.gestoTitulo}>
              Tem algo que você nunca disse a ela?
            </p>

            <textarea
              className={styles.gestoTextarea}
              value={gestoPessoal}
              onChange={(e) => setGestoPessoal(e.target.value)}
              placeholder="Pode escrever aqui. Só você vai ver."
              rows={4}
            />

            <button className={styles.botaoReiniciar} onClick={onReiniciar}>
              ↩ recomeçar
            </button>
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}
