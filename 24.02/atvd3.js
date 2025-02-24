// Todo código de barras do tipo EAN tem 13 digitos
// Os 12 primeiros dígitos são o número base, o último é o verificador
// Para calcular o verificador:
//  Multiplique os dígitos em posições ímpares por 1
// Multiplique os dígitos em posições pares por 3
// Some todos os resultados
// O dígito verificador é o número que, somado ao total, resulta em um múltiplo de 10
// Depois, extraia as informações do código.
// Os primeiros 3 dígitos representam o pais de origem
// Dos digitos 4 a 7, extraímos o código do fabricante
// Os últimos dígitos representam o código do produto.
// Utilizar a inteligência artificial para criar uma base de dados para consultar
// imprima na tela as informações obtidas.

let ean = '978093784900';

function validar() {
    if(ean.length !== 12){
        console.log('Código EAN inválido');
    }
    let eanStr = ean.split('');

}
validar();