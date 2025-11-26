const prompt = require('prompt-sync') ({sigint: true});

function verificarSenha(senha) {
  if (senha.length < 6) {
    return "Senha fraca";
  } else {
    return "Senha ok";
  }
}

console.log(verificarSenha("abc123")); // Senha ok
console.log(verificarSenha("123"));    // Senha fraca
