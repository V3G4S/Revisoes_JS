let idade = Math.floor(Math.random() * 100)
console.log(`Idade: ${idade}`)

console.log(idade < 18 ? "Você é menor de idade" : idade >= 18 && idade < 65 ? "Você é maior de idade" : "Você é um elder")