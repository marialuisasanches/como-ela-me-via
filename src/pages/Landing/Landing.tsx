import styles from "./Landing.module.css";

export function Landing({ onStart }: { onStart: () => void }) {
  return (
    <main className={styles.container}>
      {/* colagem de elementos visuais */}
      <div className={styles.colagem}>
        <div className={styles.colagemItem} style={{ width: 140, height: 100 }}>
          <img src="/colagem/foto1.jpg" alt="" />
        </div>
        <div className={styles.colagemItem} style={{ width: 110, height: 130 }}>
          <img src="/colagem/bilhete.jpg" alt="" />
        </div>
        <div className={styles.colagemItem} style={{ width: 90, height: 90 }}>
          <img src="/colagem/flor.jpg" alt="" />
        </div>
        <div className={styles.colagemItem} style={{ width: 120, height: 80 }}>
          <img src="/colagem/foto2.jpg" alt="" />
        </div>
      </div>

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
    </main>
  );
}
