const prompt = require('prompt-sync') ({sigint: true});

const numeros = [10, 5, 8, 12];

// calcular soma manualmente
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;

// filtrar acima da média
let acimaDaMedia = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > media) {
    acimaDaMedia.push(numeros[i]);
  }
}

console.log("Média:", media);        // 8.75
console.log("Acima da média:", acimaDaMedia); // [10, 12]
