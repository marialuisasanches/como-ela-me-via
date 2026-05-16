import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Carta.module.css";

type Props = {
  carta: string;
  onReiniciar: () => void;
};

export function Carta({ carta, onReiniciar }: Props) {
  const [palavrasVisiveis, setPalavrasVisiveis] = useState(0);
  const [mostrarGesto, setMostrarGesto] = useState(false);
  const [gestoPessoal, setGestoPessoal] = useState("");

  // Limpa qualquer aviso residual do Pollinations
  const cartaLimpa = carta.replace(/⚠️.*?normally\./gs, "").trim();
  const palavras = cartaLimpa.split(" ");

  useEffect(() => {
    if (palavrasVisiveis >= palavras.length) {
      setTimeout(() => setMostrarGesto(true), 1200);
      return;
    }

    const timeout = setTimeout(() => {
      setPalavrasVisiveis((v) => v + 1);
    }, 80);

    return () => clearTimeout(timeout);
  }, [palavrasVisiveis, palavras.length]);

  return (
    <main className={styles.container}>
      <div className={styles.papel}>
        <p className={styles.de}>Para você,</p>

        <p className={styles.texto}>
          {palavras.map((palavra, i) => (
            <span
              key={i}
              className={styles.palavra}
              style={{ opacity: i < palavrasVisiveis ? 1 : 0 }}
            >
              {palavra}{" "}
            </span>
          ))}
        </p>

        {mostrarGesto && (
          <motion.div
            className={styles.gestoContainer}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className={styles.rodape}>
              Esta carta foi escrita por IA com as suas memórias.
              <br />
              Mas o amor que ela carrega é completamente seu.
            </p>

            <div className={styles.divisor} />

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
              Recomeçar
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
