const prompt = require('prompt-sync') ({sigint: true});

let numeros=[2,4,6,8];
let dobrados = numeros.map((numero)=>{
    return numero * 2;
});

let soma = 0;
for(let i = 0; i < numeros.length; i++){
    soma = soma +numeros[i];
}

console.log(dobrados);
console.log("Soma dos números:", soma);


 
