const prompt = require('prompt-sync') ({sigint: true});

for (let i = 5; i <= 10; i++) {
  console.log(`Tabuada do ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("------------"); // separador
}
