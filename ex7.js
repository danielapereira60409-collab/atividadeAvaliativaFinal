const prompt = require('prompt-sync') ({sigint: true});

const frase = "A arara azul voa baixo";
// Conta ocorrências da letra 'a' sem usar toLowerCase() e sem variável intermediária
let quantidadeA = 0;
for (let i = 0; i < frase.length; i++) {
	if (frase[i] === 'a' || frase[i] === 'A') {
		quantidadeA++;
	}
}
console.log(`Frase: "${frase}"`);
console.log(`Quantidade de letras 'a' (ignora maiúsculas/minúsculas): ${quantidadeA}`);
