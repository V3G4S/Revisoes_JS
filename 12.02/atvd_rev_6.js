let bissexto = Math.floor(Math.random() * 3000);

if((bissexto % 4 === 0 && bissexto % 100 != 0) || bissexto % 400 == 0) {
    console.log(`${bissexto} é um ano bissexto.`);
} else {
    console.log(`${bissexto} não é um ano bissexto.`);
}