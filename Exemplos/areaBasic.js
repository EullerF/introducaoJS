// Definindo uma constante
const PI = 3.14159;

// Definindo uma variável
var radius = 10;


// Função para calcular a área de um círculo
function calculateArea(radius) {
    // Definindo uma variável com let
    let area;
    // Calculando a área usando a constante PI e a variável radius
    area = PI * radius * radius;
    return area;
}

// Chamando a função e armazenando o resultado
var calculatedArea = calculateArea(radius);

// Exibindo os resultados no console
console.log("O raio do círculo é:", radius);
console.log("A constante PI é:", PI);
console.log("A área do círculo é:", calculatedArea);
