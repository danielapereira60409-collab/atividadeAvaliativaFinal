const prompt = require('prompt-sync') ({sigint: true});

let invertido = [];

for (let i = [1, 2, 3, 4].length - 1; i >= 0; i--) {
  invertido.push([1, 2, 3, 4][i]);
}

console.log(invertido); // [4, 3, 2, 1]
