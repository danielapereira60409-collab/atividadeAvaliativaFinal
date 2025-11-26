const prompt = require('prompt-sync') ({sigint: true});

// Array de pessoas (nome e idade)
let pessoas = [
    { nome: 'Ana', idade: 14 },
    { nome: 'Leo', idade: 18 },
    { nome: 'Nina', idade: 13 },
    
];

// Reatribui `pessoas` para conter apenas as pessoas com idade >= 18
pessoas = pessoas.filter(p => p.idade >= 18);

if (pessoas.length === 0) {
    console.log('Nenhuma pessoa maior de 18 encontrada.');
} else {
    console.log('Pessoas maiores de 18:');
    pessoas.forEach(p => console.log(`- ${p.nome}, ${p.idade} anos`));
}

