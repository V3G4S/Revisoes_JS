function getVerificador(digitos, mult) {
    const digitsArr = String(digitos).split('').map(Number);
    let verif = digitsArr.reduce((prev, curr, i) => prev + curr * mult[i], 0);
    verif %= 11;
    return verif < 2 ? 0 : 11-verif;
}

function criarCNPJ(digitos, filial) {
    const mult1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const mult2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const verif1 = getVerificador(digitos + filial, mult1)
    const verif2 = getVerificador(digitos + filial + verif1, mult2)

    return `${digitos}/${filial}-${verif1}${verif2}`
}

const digitos = "12345678";
const filial = "0001";

const cnpj = criarCNPJ(digitos, filial);
console.log("Seu CNPJ é:", cnpj);