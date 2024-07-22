// Definindo um limite estático
const limit = 20;

// Verificando e listando todos os números primos até o limite
console.log(`Números primos até ${limit}:`);
for (let i = 2; i <= limit; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Função para verificar se um número é primo
function isPrime(num) {
  if (num <= 1) {
    return false; // Números menores ou iguais a 1 não são primos
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Se num(var) é divisível por qualquer número entre 2 e a raiz quadrada de num(var), não é primo
    }
  }

  return true; // Se nenhum divisor for encontrado, o número é primo
}
