# Como Ela Me Via

> _Ela nunca disse. Mas demonstrou de outras formas._

Experiência emocional criada para o Dia das Mães, pensada para quem perdeu a mãe. O usuário responde cinco perguntas sobre ela e a IA transforma essas memórias em uma carta escrita na voz da própria mãe, com tom contido, humilde e verdadeiro.

## Visão geral

O projeto foi desenhado para desacelerar a leitura e dar espaço para o silêncio. A proposta não é exagerar na emoção, mas fazer o usuário reconhecer pequenos gestos, hábitos e memórias que talvez só agora façam sentido.

## Fluxo da experiência

```text
Landing → Perguntas → Processando → Carta → Gesto final
```

1. **Landing** - abertura emocional da experiência.
2. **Perguntas** - cinco etapas, uma por vez, com progresso visual.
3. **Processando** - frases animadas enquanto a Groq gera a carta.
4. **Carta** - texto aparece palavra por palavra, com foco gradual.
5. **Gesto final** - espaço para o usuário escrever algo que nunca disse.

## O que a IA faz

- Lê as respostas do usuário.
- Gera uma carta na voz da mãe, em primeira pessoa.
- Produz uma frase final curta para surgir depois do silêncio.
- Mantém o tom contido, sem clichês sentimentais.

## Stack

- React
- TypeScript
- Vite
- CSS Modules
- Framer Motion
- Groq API

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com a chave da Groq:

```env
VITE_GROQ_KEY=sua_chave_groq_aqui
```

Você pode copiar o exemplo com:

```bash
cp .env.example .env.local
```

## Como rodar localmente

```bash
git clone https://github.com/marialuisasanches/como-ela-me-via.git
cd como-ela-me-via
npm install
npm run dev
```

## Screenshots

As imagens da apresentação ficam em [screenshots](screenshots) e devem seguir esta ordem:

1. [01-landing.png](screenshots/01-landing.png)
2. [02-perguntas.png](screenshots/02-perguntas.png)
3. [03-processando.png](screenshots/03-processando.png)
4. [04-carta.png](screenshots/04-carta.png)
5. [05-gesto-final.png](screenshots/05-gesto-final.png)

## Observações de design

- Tipografia elegante e legível.
- Paleta clara, com contraste suave.
- Animações discretas, sem ruído visual.
- Estrutura feita para preservar a pausa e o silêncio.

## Autoria

**Maria Luísa Sanches**
