const dict = ["DESC10", "DESC20", "naoehumcupom"];

const random = Math.floor(Math.random() * 3);
let cupom = dict[random];

console.log(cupom);

switch (cupom) {
    case 'DESC10':
        console.log('Cupom válido! Receba 10% de desconto na compra.');
        break;
    case 'DESC20':
        console.log('Cupom válido! Receba 20% de desconto na compra.');
        break;
    default:
        console.log('Cupom inválido. Por favor, utilize um cupom válido.');
        break;
}