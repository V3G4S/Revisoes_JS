// Gerar a tabuada de um número utilizando o laço for

const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um número: "));

console.log(`Tabuada de ${numero}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}