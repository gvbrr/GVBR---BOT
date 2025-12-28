const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// ===== FUNÇÃO PLACA (LFG-913) =====
function gerarCodigo() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letrasGeradas = "";

  for (let i = 0; i < 3; i++) {
    letrasGeradas += letras[Math.floor(Math.random() * letras.length)];
  }

  const numeros = Math.floor(100 + Math.random() * 900);

  return `${letrasGeradas.toUpperCase()}-${numeros}`;
}

// ===== FUNÇÃO CPF ALEATÓRIO (999.555.000) =====
function gerarCPF() {
  function bloco() {
    return Math.floor(100 + Math.random() * 900);
  }

  const parte1 = bloco();
  const parte2 = bloco();
  const parte3 = bloco();

  return `${parte1}.${parte2}.${parte3}`;
}

// ===== EVENTO DE MENSAGEM =====
client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content === "!SortearPlaca") {
    const codigo = gerarCodigo();
    message.reply(`🚗 Placa Sorteada: **${codigo}**`);
  }

  if (message.content === "!SortearCPF") {
    const cpf = gerarCPF();
    message.reply(`🪪 CPF Sorteado: **${cpf}**`);
  }
});

// ===== LOGIN =====
client.login("MTQyOTg0MTc1MDMxODY0NTQ0OQ.GtqJXA.3xoo0onNw98qPQ82vgh9gFAkLLdb3W6O-SyMfs");

