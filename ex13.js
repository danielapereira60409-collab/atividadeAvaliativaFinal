const prompt = require('prompt-sync') ({sigint: true});
const numeros = [5, 8, 11, 4, 3];

const somaImpares = numeros
  .filter(num => num % 2 !== 0) // mantém só os ímpares
  .reduce((acc, num) => acc + num, 0); // soma todos

console.log(somaImpares); // 19
