const prompt = require("prompt-sync")();

const num = Number(prompt("Dígite um Número:"));

if (num <= 0) {
  console.log(`Número Invalido`);
} else if (num % 2 === 0) {
  console.log(`${num} é par`);
} else {
  console.log(`${num} é ímpar`);
}
 