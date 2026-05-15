import styles from "./Landing.module.css";

export function Landing({ onStart }: { onStart: () => void }) {
  return (
    <main className={styles.container}>
      <div className={styles.conteudo}>
        <p className={styles.pre}>Dia das Mães</p>
        <h1 className={styles.headline}>
          Ela foi. Mas talvez ainda tenha coisas que ela queria ter dito.
        </h1>
        <p className={styles.sub}>
          Conta pra nós como ela era. A IA vai encontrar o amor que ficou nas
          entrelinhas.
        </p>
        <button className={styles.botao} onClick={onStart}>
          Começar
        </button>
      </div>
    </main>
  );
}
