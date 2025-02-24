// Crie um menu interativo de um banco no console. o usuário deve poder escolher entre operações como:
//  ver saldo, sacar, depositar e sair

const prompt = require('prompt-sync')();
let saldo = 0;
let input;
console.log("Bem vindo(a) ao banco");

do {
    input = parseInt(prompt(`
        Escolha uma opção:
        1 - Ver saldo
        2 - Sacar
        3 - Depositar
        4 - Sair
    `));
    switch(input) {
        case 1:
            console.log(`Seu saldo é: R$ ${saldo}`);
            break;
        case 2:
            let saque = parseFloat(prompt('Digite o valor do saque: '));
            if(saque <= saldo) {
                saldo -= saque;
                console.log(`Saque realizado com sucesso. Seu novo saldo é: R$ ${saldo}`);
            } else {
                console.log("Saldo insuficiente");
            }
            break;
        case 3:
            let deposito = parseFloat(prompt('Digite o valor do deposito: '));
            saldo += deposito;
            console.log(`Deposito realizado com sucesso. Seu novo saldo é: R$ ${saldo}`);
            break;
        case 4:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida");
    }
} while(input !== 4);