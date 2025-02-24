// Cartão possui 16 dígitos

// EXEMPLO:
function validarCartaoCredito(numeroCartao) {
    // Remove todos os caracteres não numéricos
    const numeroLimpo = numeroCartao.replace(/\D/g, '');
  
    // Verifica se o número resultante possui apenas dígitos
    if (!/^\d+$/.test(numeroLimpo)) return false;
  
    let soma = 0;
    let alternar = false;
  
    // Percorre os dígitos do número, da direita para a esquerda
    for (let i = numeroLimpo.length - 1; i >= 0; i--) {
      let n = parseInt(numeroLimpo.charAt(i), 10);
  
      if (alternar) {
        n *= 2;
        if (n > 9) n -= 9;
      }
  
      soma += n;
      alternar = !alternar;
    }
  
    // O número é válido se a soma for múltipla de 10
    return (soma % 10) === 0;
  }
  
  // Exemplos de uso
  console.log(validarCartaoCredito('4539 1488 0343 6467')); // true
  console.log(validarCartaoCredito('1234 5678 9012 3456')); // false  