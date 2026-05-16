# Como Ela Me Via

> *Ela nunca disse. Mas demonstrou de outras formas.*

Uma experiência emocional com IA criada para o Dia das Mães.  
O usuário responde perguntas sobre a mãe e a IA reconstrói o amor que ficou escondido nos gestos do dia a dia — gerando uma carta escrita na voz dela.

🔗 **[Acessar o projeto](https://como-ela-me-via.vercel.app)**

---

## O diferencial

A maioria dos projetos fala *sobre* a mãe.  
Este fala pelo **olhar dela de volta pra você**.

A IA não inventa — ela traduz.

> "Ela brigava pra você levar casaco."  
> → *"Talvez esse fosse o jeito dela dizer que tinha medo que algo acontecesse com você."*

---

## Telas

| Landing | Perguntas | Processando |
|--------|-----------|-------------|
| ![Landing](./screenshots/landing.png) | ![Perguntas](./screenshots/perguntas.png) | ![Processando](./screenshots/processando.png) |

| Envelope | Carta | Gesto Final |
|----------|-------|-------------|
| ![Envelope](./screenshots/envelope.png) | ![Carta](./screenshots/carta.png) | ![Gesto](./screenshots/gesto.png) |

---

## Fluxo da experiência

```
Landing → Perguntas (5 etapas) → Processando → Envelope → Carta → Gesto Final
```

1. **Landing** — primeira impressão emocional
2. **Perguntas** — 5 perguntas conversacionais sobre a mãe
3. **Processando** — a IA interpreta as memórias
4. **Envelope** — transição cinematográfica antes da carta
5. **Carta** — gerada palavra por palavra na voz da mãe
6. **Gesto final** — espaço para o usuário escrever o que nunca disse

---

## Stack

- **React** + TypeScript
- **Tailwind CSS**
- **Framer Motion** — animações
- **Groq API** — geração da carta com IA
- **Vercel** — deploy

---

## Rodando localmente

```bash
# clone o repositório
git clone https://github.com/marialuisasanches/como-ela-me-via.git

# instale as dependências
cd como-ela-me-via
npm install

# crie o arquivo de variáveis de ambiente
cp .env.example .env.local
# adicione sua chave: VITE_GROQ_API_KEY=sua_chave_aqui

# rode o projeto
npm run dev
```

---

## Variáveis de ambiente

```env
VITE_GROQ_API_KEY=sua_chave_aqui
```

Crie sua chave gratuita em [console.groq.com](https://console.groq.com)

---

## Design

| Token | Valor |
|-------|-------|
| Creme | `#F5F0E8` |
| Vinho | `#8B1A2F` |
| Dourado | `#C9A84C` |
| Preto | `#0A0A0A` |
| Título | Playfair Display |
| Carta | Caveat |
| UI | Inter 300 |

---

## Desenvolvido por

**Maria Luísa Sanches** — [@maria.sanches](https://discord.com)  
Hackathon Dia das Mães 2025
