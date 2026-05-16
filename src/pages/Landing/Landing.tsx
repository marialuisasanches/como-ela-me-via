import { motion } from "framer-motion";
import styles from "./Landing.module.css";

export function Landing({ onStart }: { onStart: () => void }) {
  return (
    <motion.main
      className={styles.container}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={styles.conteudo}>
        <p className={styles.pre}>Dia das Mães</p>
        <h1 className={styles.headline}>
          Ela nunca disse. Mas demonstrou <em>de outras formas.</em>
        </h1>
        <div className={styles.divisorDecorativo} />
        <p className={styles.sub}>
          Conta pra nós como ela era. A IA vai encontrar o amor que ficou nas
          entrelinhas.
        </p>
        <button className={styles.botao} onClick={onStart}>
          Começar
        </button>
      </div>

      <p className={styles.nota}>uma experiência com IA</p>
    </motion.main>
  );
}
