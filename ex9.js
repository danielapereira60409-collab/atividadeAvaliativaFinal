const prompt = require('prompt-sync') ({sigint: true});

// Array de produtos com nome e preço
const produtos = [
	{ produto: 'Lápis', preco: 2 },
	{ produto: 'Mochila', preco: 80 },
	{ produto: 'Caderno', preco: 15 },
	
];
// Dobra os preços usando map()
const produtosDobrados = produtos.map(p => ({ produto: p.produto, preco: p.preco * 2 }));

console.log('Produtos com preços dobrados:');
produtosDobrados.forEach(p => console.log(`- ${p.produto}: R$ ${p.preco}`));
// Filtra apenas produtos com preço menor que 20
const baratos = produtos.filter(p => p.preco < 20);

if (baratos.length === 0) {
	console.log('Nenhum produto com preço menor que 20 encontrado.');
} else {
	console.log('Produtos com preço menor que 20:');
	baratos.forEach(p => console.log(`- ${p.produto}: R$ ${p.preco}`));
}
