const prompt = require('prompt-sync') ({sigint: true});
let numeros = [1, 2, 3, 4];

// Dobra os números usando map()
const numerosDobrados = numeros.map(n => n * 2);

console.log('Números originais:', numeros);
console.log('Números dobrados:', numerosDobrados);