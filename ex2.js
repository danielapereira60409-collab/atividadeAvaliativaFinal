const prompt = require('prompt-sync') ({sigint: true});
let valores=[15,12,3,18,7];
let contagem=0;

for(let i = 0; i < valores.length; i++){
    if (valores[i]<10){
        contagem++;
    }
}

console.log("quantidade de números menores que 10 é:", contagem);