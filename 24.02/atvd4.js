// Limpeza do número: Removemos todos os caracteres que não são dígitos para
// garantir que estamos lidando apenas com números.
// Validação de dígitos: Verificamos se o número resultante contém apenas dígitos.
// Iteração reversa: Percorremos o número de trás para frente, duplicando cada segundo dígito.
// Ajuste de valores: Se a duplicação resultar em um número maior que 9, subtraímos 9.
// Soma total: Somamos todos os dígitos processados.
// Validação final: Se o total for múltiplo de 10, o número do cartão é considerado válido.

function validarCartaoCredito(numeroCartao) {
  let nums = numeroCartao.split('').reverse().map(Number);
  nums = nums.map((digit, index) => digit * (index % 2 === 0 ? 1 : 2));
  nums = nums.map((num) => num > 9 ? num - 9 : num );
  let soma = nums.reduce((anterior, matue) => anterior + matue)
  return soma % 10 === 0;
}
  
  console.log(validarCartaoCredito('4539 1488 0343 6467'));
  console.log(validarCartaoCredito('1234 5678 9012 3456'));