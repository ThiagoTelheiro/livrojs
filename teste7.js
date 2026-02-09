const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um Número:"));

function numValidacao() {
  if (num === 0) {
    console.log(`Número Invalido`);
    return;
  }

  if (num > 0) {
    console.log(`Número Positivo`);
  } else {
    console.log(`Número Negativo`);
  }

  if (num % 2 === 0) {
    console.log(`Número Par`);
  } else {
    console.log(`Número Impar`);
  }

  if (num < 10) {
    console.log(`Número Pequeno`);
  } else if (num >= 10 && num <= 100) {
    console.log(`Número Medio`);
  } else {
    console.log(`Número Grande`);
  }
}
numValidacao();
