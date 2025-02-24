let count = 0;
const displayed = new Set();
let repeatCount = 0;

while (true) {
    count++;
    let num = Math.floor(Math.random() * 20001 - 10000 );
    if (displayed.has(num)) {
        repeatCount++;
    }
    displayed.add(num);
    console.log(num);
    if (num === 0) {
        break;
    }
}
console.log(`Número encontrado após ${count} tentativas! ${repeatCount} números foram repetidos!`);