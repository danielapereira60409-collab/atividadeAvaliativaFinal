const prompt = require('prompt-sync') ({sigint: true});
let numeros=[1,2,3,4,5,6];
const pares = numeros.filter(numero => numero % 2 === 0);

console.log("Números pares:", pares);

