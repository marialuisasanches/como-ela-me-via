import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Processando.module.css";

const frases = [
  "Lembrando dos gestos que ela nunca explicou...",
  "Encontrando o amor nas entrelinhas...",
  "Traduzindo o silêncio dela em palavras...",
  "Ela estava dizendo algo. A gente vai descobrir o quê.",
  "Quase lá...",
];

type Props = {
  respostas: string[];
  onConcluir: (carta: string) => void;
};

export function Processando({ respostas, onConcluir }: Props) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((i) => (i + 1) % frases.length);
    }, 3500);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    let cancelado = false;

    async function gerarCarta() {
      const prompt = `
Você é uma IA que escreve cartas emocionais na voz de uma mãe falecida, endereçadas ao filho ou filha.

As respostas do usuário sobre a mãe foram:
1. Nome da mãe: ${respostas[0]}
2. Como ela demonstrava preocupação: ${respostas[1]}
3. Hábito que o filho nunca entendeu: ${respostas[2]}
4. Memória que nunca vai esquecer: ${respostas[3]}
5. Gesto pequeno que significava muito: ${respostas[4]}

Escreva uma carta seguindo TODAS estas regras:
- Escrita na primeira pessoa, como se a mãe estivesse escrevendo agora
- Endereçada diretamente ao filho/filha (use "você")
- Linguagem simples, como quem nunca escreveu uma carta antes
- NUNCA afirmar emoções diretamente — use sempre "talvez", "acho que", "não sei se você percebeu", "provavelmente"
- Use os detalhes específicos das memórias fornecidas — zero conteúdo genérico
- Entre 180 e 250 palavras
- Termine de forma inacabada, como quem não sabe como encerrar
- Proibido: clichês como "você é minha vida", "te amo mais que tudo"
- Tom: contido, humilde, verdadeiro, levemente hesitante

Escreva apenas a carta. Sem título, sem assinatura formatada, sem explicações.
      `.trim();

      try {
        const response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_GROQ_KEY}`,
            },
            body: JSON.stringify({
              model: "llama-3.3-70b-versatile",
              messages: [{ role: "user", content: prompt }],
              temperature: 0.9,
            }),
          },
        );

        const data = await response.json();
        console.log("resposta:", data);

        if (cancelado) return;

        const carta = data.choices?.[0]?.message?.content ?? "";
        onConcluir(carta);
      } catch (err) {
        if (cancelado) return;
        console.error(err);
        onConcluir("Não foi possível gerar a carta. Tente novamente.");
      }
    }

    gerarCarta();

    return () => {
      cancelado = true;
    };
  }, []);

  return (
    <main className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.p
          key={indice}
          className={styles.frase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.9 }}
        >
          {frases[indice]}
        </motion.p>
      </AnimatePresence>
    </main>
  );
}
