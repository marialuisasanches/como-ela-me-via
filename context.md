# Como Ela Me Via — CONTEXT.md

## O que é este projeto

"Como Ela Me Via" é uma experiência emocional com IA criada para o
Dia das Mães, focada especificamente em pessoas que perderam a mãe
e passam essa data em luto. O objetivo não é celebração — é acolhimento.

O usuário responde 5 perguntas em texto livre sobre a mãe (gestos,
hábitos, memórias, preocupações do dia a dia). A IA processa essas
memórias e gera uma carta personalizada escrita na voz da mãe,
endereçada diretamente ao filho ou filha — revelando o amor que
sempre esteve presente nos pequenos gestos, mas nunca virou palavras.

O produto existe para dar às pessoas algo que elas nunca tiveram:
ler, mesmo que através da IA, o que a mãe talvez quisesse ter dito.

## Diferencial central

Todos os apps de memorial falam SOBRE a mãe.
Este projeto fala PELO OLHAR DA MÃE sobre o filho/filha.

A inversão de perspectiva é o coração do produto. A IA não descreve
a mãe — ela interpreta o amor não-verbal dela e o traduz em palavras
na primeira pessoa, como se a mãe estivesse escrevendo agora.

Exemplo de transformação:

- Memória: "ela sempre me mandava levar casaco"
- Carta: "Talvez quando eu ficava brava com o casaco, o que eu
  queria dizer era que eu tinha medo. Medo de que algo acontecesse
  com você e eu não tivesse feito o suficiente."

## Público-alvo

Pessoas que perderam a mãe e passam o Dia das Mães em tristeza.
O tom do projeto inteiro — visual, copy, ritmo — deve refletir
acolhimento, não celebração. Nunca infantil, nunca festivo.

## Fluxo completo do usuário

1. Landing — apresenta o conceito com headline emocional e colagem
   visual de elementos afetivos (bilhetes, fotos, flores prensadas).
   CTA: botão estilo lacre vermelho vinho.

2. Perguntas (5 etapas) — uma pergunta por tela, texto livre:
   - P1: "Como ela se chamava?"
   - P2: "Como ela demonstrava que estava preocupada com você?"
   - P3: "Qual hábito dela você nunca entendeu direito?"
   - P4: "Qual memória sua com ela você nunca vai esquecer?"
   - P5: "Tinha algum gesto pequeno dela que significava muito?"

3. Processando — tela escura com frases emocionais surgindo e
   sumindo enquanto a IA gera a carta. Prepara emocionalmente.

4. A Carta — carta aparece palavra por palavra, em fonte manuscrita
   (Caveat), ritmo lento. Fundo creme. Sem botões chamando atenção.
   Após a carta completa: botão discreto para guardar como imagem.

5. Gesto Final — uma pergunta simples abaixo da carta:
   "Tem algo que você nunca disse a ela?"
   Textarea sem borda. A resposta não é enviada a lugar nenhum.
   O ato de escrever é o produto.

## Regras absolutas da carta gerada pela IA

- Escrita na primeira pessoa, voz da mãe, endereçada ao filho/filha
- Linguagem simples — como quem nunca escreveu uma carta antes
- NUNCA afirmar emoções diretamente. Sempre: "talvez", "acho que",
  "não sei se você percebeu", "provavelmente"
- Usar os detalhes específicos de cada memória fornecida — zero
  conteúdo genérico
- Entre 180 e 250 palavras
- Terminar de forma inacabada, como quem não sabe como encerrar
- Proibido: clichês como "você é minha vida", "te amo mais que tudo"
- Tom: contido, humilde, verdadeiro, levemente hesitante

## Stack técnica

- Framework: React + TypeScript (criado com Vite)
- Estilo: CSS Modules
- Animações: Framer Motion
- IA: Groq API
- Deploy: Vercel
- Sem backend, sem banco de dados — respostas ficam em sessionStorage
  e vão direto para o prompt da IA

## Paleta de cores

- Creme: #F5F0E8 (fundo principal — papel antigo)
- Vermelho vinho: #8B1A2F (botão lacre, destaques)
- Preto: #0A0A0A (tela de processamento)
- Dourado: #C9A84C (detalhes sutis)

## Tipografia

- Playfair Display — títulos e headlines (serif, peso emocional)
- Caveat — texto da carta gerada (manuscrita, humana)
- Inter 300 — UI geral (limpo, leve, não chama atenção)

## Identidade visual

Colagem emocional com elementos afetivos rotacionados (–3° a +3°):
bilhetes manuscritos, fotos polaroid desbotadas, receitas anotadas
à mão, flores prensadas, fitas adesivas amareladas. Tudo sobreposto
levemente, como objetos reais sobre uma mesa.

Nada de vetores limpos, gradientes chamativos ou estética festiva.
O visual deve parecer uma gaveta de memórias, não um template.

## Copywriting chave

- Headline: "Ela foi. Mas talvez ainda tenha coisas que ela queria
  ter dito."
- Subtítulo: "Conta pra nós como ela era. A IA vai encontrar o amor
  que ficou nas entrelinhas."
- Rodapé da carta: "Esta carta foi escrita por IA com as suas
  memórias. Mas o amor que ela carrega é completamente seu."
- Gesto final: "Tem algo que você nunca disse a ela?"
- Placeholder: "Pode escrever aqui. Só você vai ver."

## O que NÃO é este projeto

- Não é um app de memorial ou homenagem genérica
- Não tem upload de fotos ou áudios (fora do MVP)
- Não tem autenticação nem banco de dados
- Não tem tom festivo, colorido ou celebratório
- Não é uma landing page estática — é uma experiência interativa
