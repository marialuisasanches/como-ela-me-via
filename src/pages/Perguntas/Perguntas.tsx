import { useState } from "react";
import styles from "./Perguntas.module.css";

const perguntas = [
  "Como ela se chamava?",
  "Como ela demonstrava que estava preocupada com você?",
  "Qual hábito dela você nunca entendeu direito?",
  "Qual memória sua com ela você nunca vai esquecer?",
  "Tinha algum gesto pequeno dela que significava muito?",
];

type Props = {
  onConcluir: (respostas: string[]) => void;
};

export function Perguntas({ onConcluir }: Props) {
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<string[]>(Array(5).fill(""));

  function handleChange(valor: string) {
    const novas = [...respostas];
    novas[etapa] = valor;
    setRespostas(novas);
  }

  function handleProximo() {
    if (etapa < perguntas.length - 1) {
      setEtapa(etapa + 1);
    } else {
      onConcluir(respostas);
    }
  }

  const ultima = etapa === perguntas.length - 1;

  return (
    <main className={styles.container}>
      <div className={styles.progresso}>
        {perguntas.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i <= etapa ? styles.ativo : ""}`}
          />
        ))}
      </div>

      <div className={styles.conteudo}>
        <p className={styles.numero}>
          {etapa + 1} de {perguntas.length}
        </p>
        <h2 className={styles.pergunta}>{perguntas[etapa]}</h2>
        <textarea
          className={styles.textarea}
          value={respostas[etapa]}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Escreve aqui..."
          rows={4}
          autoFocus
        />
        <button
          className={styles.botao}
          onClick={handleProximo}
          disabled={respostas[etapa].trim().length < 2}
        >
          {ultima ? "Gerar carta" : "Próximo"}
        </button>
      </div>
    </main>
  );
}
