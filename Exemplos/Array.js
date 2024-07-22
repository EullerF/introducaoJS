// Varificando uma lista de números pares e impares

// Constante que define o tamanho do array
const SIZE = 10;

// Variável que armazena o conjunto de números
let numbers = [3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

// 2. Estrutura de Repetição
for (let i = 0; i < SIZE; i++) {
    let num = numbers[i];

    // 3. Estrutura de Decisão
    if (num % 2 === 0) {
        console.log(`O número ${num} é par.`);
    } else {
        console.log(`O número ${num} é ímpar.`);
    }
}
