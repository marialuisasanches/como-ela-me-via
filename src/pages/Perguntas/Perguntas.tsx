import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Perguntas.module.css";

const perguntas = [
  {
    texto: "Como ela se chamava?",
    dica: "O nome dela vai personalizar tudo na carta.",
    placeholder: "Escreve aqui...",
  },
  {
    texto: "Como ela demonstrava que estava preocupada com você?",
    dica: "Pode ser uma frase, um gesto, um hábito...",
    placeholder:
      "Ex: ela sempre ligava tarde da noite pra saber se eu tinha chegado bem.",
  },
  {
    texto: "Qual hábito dela você nunca entendeu direito?",
    dica: "Algo que ela fazia e que talvez só agora faça sentido.",
    placeholder:
      "Ex: ela dobrava as roupas de um jeito específico e ficava brava se alguém desfazia.",
  },
  {
    texto: "Qual memória sua com ela você nunca vai esquecer?",
    dica: "Não precisa ser grande. Às vezes o pequeno é o que fica.",
    placeholder:
      "Ex: a vez que ela ficou acordada comigo estudando sem dizer nada, só fazendo companhia.",
  },
  {
    texto: "Tinha algum gesto pequeno dela que significava muito?",
    dica: "Aquilo que parecia simples mas carregava tudo.",
    placeholder:
      "Ex: ela sempre deixava minha comida favorita na geladeira quando eu estava triste.",
  },
];

type Props = {
  onConcluir: (respostas: string[]) => void;
};

export function Perguntas({ onConcluir }: Props) {
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<string[]>(Array(5).fill(""));
  const [animando, setAnimando] = useState(false);

  const progresso = ((etapa + 1) / perguntas.length) * 100;
  const ultima = etapa === perguntas.length - 1;

  function handleChange(valor: string) {
    const novas = [...respostas];
    novas[etapa] = valor;
    setRespostas(novas);
  }

  function avancar() {
    if (respostas[etapa].trim().length < 2) return;
    setAnimando(true);
    setTimeout(() => {
      if (ultima) {
        onConcluir(respostas);
      } else {
        setEtapa((e) => e + 1);
        setAnimando(false);
      }
    }, 280);
  }

  function voltar() {
    if (etapa === 0) return;
    setAnimando(true);
    setTimeout(() => {
      setEtapa((e) => e - 1);
      setAnimando(false);
    }, 280);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      avancar();
    }
  }

  return (
    <motion.main
      className={styles.container}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* barra de progresso fina no topo */}
      <div
        className={styles.barraProgresso}
        style={{ width: `${progresso}%` }}
      />

      {/* cabeçalho: voltar + dots juntos e alinhados */}
      <div className={styles.cabecalho}>
        {etapa > 0 ? (
          <button className={styles.botaoVoltar} onClick={voltar}>
            ← voltar
          </button>
        ) : (
          <div className={styles.botaoVoltarPlaceholder} />
        )}

        <div className={styles.progresso}>
          {perguntas.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i < etapa ? styles.concluido : i === etapa ? styles.ativo : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* conteúdo com animação de slide */}
      <div
        className={styles.conteudo}
        style={{
          opacity: animando ? 0 : 1,
          transform: animando ? "translateX(16px)" : "translateX(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        <p className={styles.numero}>
          {String(etapa + 1).padStart(2, "0")} / {perguntas.length}
        </p>

        <h2 className={styles.pergunta}>{perguntas[etapa].texto}</h2>

        <p className={styles.dica}>{perguntas[etapa].dica}</p>

        <textarea
          className={styles.textarea}
          value={respostas[etapa]}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={perguntas[etapa].placeholder}
          rows={4}
          autoFocus
        />

        <div className={styles.rodapeBotoes}>
          <span className={styles.contador}>
            {respostas[etapa].length > 0
              ? `${respostas[etapa].length} caracteres`
              : "Enter para avançar"}
          </span>

          <button
            className={styles.botao}
            onClick={avancar}
            disabled={respostas[etapa].trim().length < 2}
          >
            {ultima ? "Gerar carta" : "Continuar"}
          </button>
        </div>
      </div>
    </motion.main>
  );
}
