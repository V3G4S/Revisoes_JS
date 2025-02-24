// Dado um array de strings, conte quantas vezes cada string aparece no array,
// utilizando o laço for-of para somar as vezes, e depois o laço for-in para imprimir no console.

const pessoas = ["Olivo", "Maguila", "Migas", "Eneias", "Loiro", "Tony", "Gab", "Alemoes", "Olivo", "Maguila", "Migas"]
contagem = {}

for(let pessoa of pessoas) {
    if(contagem[pessoa]){
        contagem[pessoa]+= 1;
    }else{
        contagem[pessoa]= 1;
    }
};

for(let cont in contagem) {
    console.log(`A pessoa ${cont} foi repetido ${contagem[cont]} vezes`)
;}