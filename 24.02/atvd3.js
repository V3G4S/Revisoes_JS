// Todo código de barras do tipo EAN tem 13 digitos
// Os 12 primeiros dígitos são o número base, o último é o verificador
// Para calcular o verificador:
// Multiplique os dígitos em posições ímpares por 1
// Multiplique os dígitos em posições pares por 3
// Some todos os resultados
// O dígito verificador é o número que, somado ao total, resulta em um múltiplo de 10
// Depois, extraia as informações do código. 
// Os primeiros 3 dígitos representam o pais de origem
// Dos digitos 4 a 7, extraímos o código do fabricante
// Os últimos dígitos representam o código do produto.
// Utilizar a inteligência artificial para criar uma base de dados para consultar
// imprima na tela as informações obtidas.

// Base de dados
function getOriginCountry(barcode) {
    const num = parseInt(barcode.slice(0, 3));

    if (num >= 0 && num <= 19) return "USA & Canada";
    if (num >= 30 && num <= 39) return "USA (Drugs)";
    if (num >= 400 && num <= 440) return "Germany";
    if (num >= 460 && num <= 469) return "Russia";
    if (num >= 690 && num <= 699) return "China";
    if (num == 789) return "Brazil";
    if (num == 880) return "South Korea";
    if (num == 890) return "India";
    if (num >= 930 && num <= 939) return "Australia";
    if (num >= 940 && num <= 949) return "New Zealand";

    return "Unknown";
}

function getManufacturer(barcode) {
    const manufacturer = barcode.slice(3, 7);

    const manufacturerMap = {
        "0000": "General Electric",
        "0044": "Procter & Gamble",
        "0070": "Nestlé",
        "0123": "Coca-Cola",
        "0456": "Samsung",
        "1234": "Apple Inc.",
        "5555": "Sony",
        "6001": "LG Electronics",
        "7894": "Natura (Brazil)",
        "8901": "Tata Consumer Products (India)"
    };

    return manufacturerMap[manufacturer] || "Unknown";
}

function getProduct(barcode) {
    const product = barcode.slice(7, -1);

    const productMap = {
        "00001": "Coca-Cola 350ml Can",
        "12345": "iPhone 15 Pro Max",
        "55555": "Sony PlayStation 5",
        "60000": "LG OLED TV 65-inch",
        "78901": "Natura Ekos Hand Cream",
        "99999": "Samsung Galaxy S24 Ultra",
        "54321": "Nestlé Kit-Kat 4 Finger",
        "11111": "Procter & Gamble Ariel Detergent",
        "22222": "Tata Himalayan Salt",
        "33333": "General Electric LED Bulb"
    };

    return productMap[product] || "Unknown";
}

let ean = '4205555111119';

function validar(barcode) {
    const checar = parseInt(barcode.slice(-1));
    const nums = barcode.slice(0, 12).split('').map(Number);
    const soma = (nums).reduce((anterior, atual) => {
        if(atual % 2 !== 0) {
            atual = atual * 3;
        }
        return anterior + atual;
    })
    const checarSoma = 10 - (soma % 10);
    console.log("Código de barras é válido?", checarSoma === checar ? "Sim!" : "Não!")
    console.log("País de origem:", getOriginCountry(barcode));
    console.log("Fabricante:", getManufacturer(barcode));
    console.log("Produto:", getProduct(barcode));
    console.log("------------------------");
}

validar(ean);