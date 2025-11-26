const prompt = require('prompt-sync') ({sigint: true});
let nomes=["joão","Larissa","Ana","Carlos"];

// Verifica se o nome "ana" existe no array (ignora maiúsculas/minúsculas)
const nomeProcurado = 'ana';
const existeAna = nomes.some(nome => nome.toLowerCase() === nomeProcurado.toLowerCase());

if (existeAna) {
	console.log('O nome "ana" existe no array.');
} else {
	console.log('O nome "ana" NÃO existe no array.');
}


