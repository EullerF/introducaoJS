const readline = require('readline');

// Configurando o readline para ler a entrada do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definindo uma constante
const PI = 3.14159;

// Função para calcular a área de um círculo
function calculateArea(radius) {
    let area = PI * radius * radius;
    return area;
}

// Função para solicitar múltiplos raios
function getRadii(count, callback) {
    let radii = [];
    let index = 0;

    function askForRadius() {
        if (index < count) {
            rl.question(`Por favor, insira o raio do círculo ${index + 1}: `, (input) => {
                let radius = parseFloat(input);

                if (isNaN(radius) || radius <= 0) {
                    console.log('Por favor, insira um número válido para o raio maior que zero.');
                    askForRadius();
                } else {
                    radii.push(radius);
                    index++;
                    askForRadius();
                }
            });
        } else {
            callback(radii);
        }
    }

    askForRadius();
}

// Função para processar os raios e calcular as áreas
function processRadii(radii) {
    for (let i = 0; i < radii.length; i++) {
        let radius = radii[i];
        let area = calculateArea(radius);
        console.log(`O raio do círculo ${i + 1} é: ${radius}`);
        console.log(`A área do círculo ${i + 1} é: ${area}`);
    }
}

// Perguntar ao usuário quantos raios deseja inserir
rl.question('Quantos raios você deseja inserir? ', (input) => {
    let count = parseInt(input);

    if (isNaN(count) || count <= 0) {
        console.log('Por favor, insira um número válido maior que zero.');
        rl.close();
    } else {
        getRadii(count, (radii) => {
            processRadii(radii);
            rl.close();
        });
    }
});
