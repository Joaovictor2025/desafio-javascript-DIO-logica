// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente

// Lê o tipo de mensagem a ser contado ("BOT" ou "USER")
const tipoMensagem = gets().trim();
let contador = 0;

while (true) {
  const linha = gets().trim();

  // Para quando encontrar "FIM"
  if (linha === "FIM") {
    break;
  }

  // Verifica se a linha começa com o tipo desejado seguido de ":"
  if (linha.startsWith(tipoMensagem + ":")) {
    contador++;
  }
}

// Ao final, imprima a quantidade de mensagens do tipo escolhido
print(contador);