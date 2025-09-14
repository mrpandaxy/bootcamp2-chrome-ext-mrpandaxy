const mensagens = [
  "Você é capaz de grandes coisas!",
  "Não desista, o sucesso está próximo!",
  "Cada erro é uma lição.",
  "Acredite em você!",
  "Seu esforço será recompensado."
];

const btn = document.getElementById('motivar');
const msg = document.getElementById('mensagem');

btn.addEventListener('click', () => {
  const index = Math.floor(Math.random() * mensagens.length);
  msg.textContent = mensagens[index];
});
