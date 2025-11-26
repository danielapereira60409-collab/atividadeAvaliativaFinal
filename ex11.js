const prompt = require('prompt-sync') ({sigint: true});
let numeros = [4, 9, 2, 7];

// Apenas verifica se o número 7 existe no array (sem armazenar índice)
const existeSete = numeros.some(n => n === 7);
if (existeSete) {
	console.log('O número 7 existe no array.');
} else {
	console.log('O número 7 não existe no array.');
}
