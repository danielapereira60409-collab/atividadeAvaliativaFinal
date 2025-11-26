const prompt = require('prompt-sync') ({sigint: true});
const notas = [9, 8, 6, 10];

const convertidas = notas.map(nota => {
  if (nota >= 9) {
    return "A";
  } else if (nota >= 7) {
    return "B";
  } else {
    return "C";
  }
});

console.log(convertidas); // ["A", "B", "C", "A"]
