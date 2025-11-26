const prompt = require('prompt-sync') ({sigint: true});
let numeros=[10,50,22,3,7];

let maior;
if (numeros.length === 0) {
	console.log('Array vazio — nenhum valor para comparar.');
} else {
	maior = numeros[0];
	for (let i = 1; i < numeros.length; i++) {
		if (numeros[i] > maior) {
			maior = numeros[i];
		}
	}
	console.log('Maior número do array:', maior);
}
