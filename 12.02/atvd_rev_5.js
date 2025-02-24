let nota = Math.floor(Math.random() * 10)
console.log(`Sua nota foi: ${nota}`)
console.log( nota < 5 ? "Reprovado" : nota > 5 && nota < 7 ? "Recuperação" : "Aprovado")