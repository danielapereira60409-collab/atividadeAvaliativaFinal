const prompt = require('prompt-sync') ({sigint: true});
let numeros=[8,6,7];

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
	soma += numeros[i];
}

let media = soma / numeros.length;
console.log('Média:', media.toFixed(2));

if (media >= 6) {
	console.log('Aprovado');
} else {
	console.log('Reprovado');
}

