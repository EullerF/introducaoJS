// Verificando uma lista de números pares e impares

// Variável que armazena o conjunto de números
let numbers = [3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

// Estrutura de Repetição com forEach
numbers.forEach(num => {
    // Estrutura de Decisão
    if (num % 2 === 0) {
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é ímpar.`);
    }
});
