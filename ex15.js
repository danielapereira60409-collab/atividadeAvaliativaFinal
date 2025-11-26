const prompt = require('prompt-sync') ({sigint: true});

const animais = ["gato", "cachorro"];

const frases = animais.map(animal => `Eu gosto de ${animal}`);

console.log(frases);
// ["Eu gosto de gato", "Eu gosto de cachorro"]
