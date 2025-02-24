let num = Math.floor(Math.random() * 201 - 100)
console.log(`Seu número é: ${num}`)

console.log( num === 0 ? "Seu número é 0!" : num > 0 && num % 2 === 0 ? "O número é par, e positivo" : num > 0 && num % 2 != 0 ? "O número é ímpar e positivo" : num < 0 && num % 2 === 0 ? "O número é par e negativo" : "O número é ímpar e negativo")