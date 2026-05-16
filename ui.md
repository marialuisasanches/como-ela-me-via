Resumo completo da estrutura UI/UX

Fluxo de telas
Landing → Perguntas → Processando → Envelope → Carta

Landing
Primeira impressão. Fundo creme com textura de papel, elementos de colagem levemente rotacionados nos cantos, headline em serif grande, subtítulo em Inter leve, botão vinho com hover suave. Tudo entra com animação de fade + translateY em cascata.

Perguntas
5 perguntas uma por vez. Barra de progresso fina vermelha no topo cresce a cada etapa. Dots secundários mostram progresso. Cada pergunta tem dica em itálico abaixo. Textarea sem borda lateral, só linha embaixo que vira vermelha no focus. Botão voltar discreto no cabeçalho. Transição entre perguntas com slide lateral. Enter avança, Shift+Enter quebra linha. Botão desabilitado com cor neutra até ter 2 caracteres.

Processando
Tela de espera enquanto a IA gera a carta. Frases emocionais aparecem uma por vez com fade. Sem spinner, sem loading bar — só silêncio e texto.

Envelope
Transição cinematográfica. Envelope SVG surge pequeno, cresce suavemente até o tamanho normal, depois vem em direção à tela aumentando até sumir — como se você entrasse dentro dele. Automático, sem clique. Dura ~2.2 segundos e chama a carta.

Carta
Tela principal do produto. Fundo creme com textura de papel. Flores prensadas SVG nos cantos surgem suavemente. Cabeçalho mostra "DE" em dourado e o nome da mãe em fonte manuscrita itálica. Corpo da carta em Caveat aparece palavra por palavra com cursor vermelho piscando. Quando termina, cursor some e após 1.2s surge a seção final com: botão copiar, divisor com ponto dourado, nota de rodapé, pergunta "Tem algo que você nunca disse a ela?" com textarea livre, e botão recomeçar.

Paleta

Creme #F5F0E8 — fundo geral
Vinho #8B1A2F — ações principais, cursor, barra de progresso
Dourado #C9A84C — detalhes, labels, divisor
Preto #0A0A0A — texto

Tipografia

Playfair Display — títulos e perguntas
Caveat — corpo da carta
Inter 300 — UI, labels, botões
