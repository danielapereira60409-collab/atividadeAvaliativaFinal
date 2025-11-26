const prompt = require('prompt-sync') ({sigint: true});
[
  { "nome": "Ana" },
  { "nome": "Rafa" },
  { "nome": "Mia" }
]
let contador = 0;

for (let i = 0; i < [
  { nome: "Ana" },
  { nome: "Rafa" },
  { nome: "Mia" }
].length; i++) {
  contador++;
}

console.log(contador); // 3

