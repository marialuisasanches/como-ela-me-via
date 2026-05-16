import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Carta.module.css";

type Props = {
  carta: string;
  nome: string;
  onReiniciar: () => void;
};

export function Carta({ carta, nome, onReiniciar }: Props) {
  const [palavrasVisiveis, setPalavrasVisiveis] = useState(0);
  const [mostrarGesto, setMostrarGesto] = useState(false);
  const [gestoPessoal, setGestoPessoal] = useState("");
  const [copiado, setCopiado] = useState(false);

  const cartaLimpa = carta.replace(/⚠️.*?normally\./gs, "").trim();
  const palavras = cartaLimpa.split(" ");
  const cartaCompleta = palavrasVisiveis >= palavras.length;

  useEffect(() => {
    if (cartaCompleta) {
      setTimeout(() => setMostrarGesto(true), 1200);
      return;
    }

    const timeout = setTimeout(() => {
      setPalavrasVisiveis((v) => v + 1);
    }, 75);

    return () => clearTimeout(timeout);
  }, [palavrasVisiveis, palavras.length, cartaCompleta]);

  function copiarCarta() {
    navigator.clipboard.writeText(cartaLimpa).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    });
  }

  return (
    <main className={styles.container}>
      <div className={styles.papel}>
        {/* cabeçalho com nome da mãe */}
        <motion.div
          className={styles.cabecalho}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.deLabel}>de</span>
          <p className={styles.de}>{nome || "Com amor,"}</p>
        </motion.div>

        {/* corpo da carta — palavra por palavra */}
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

        {/* seção pós-carta */}
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
    </main>
  );
}
