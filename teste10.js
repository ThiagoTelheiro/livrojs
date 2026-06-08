const prompt = require("prompt-sync")();

const numUser = Number(prompt("Digite um Número: "));

if (numUser < 1 || isNaN(numUser) || !Number.isInteger(numUser)) {
  console.log("Digite um número valido...");
  return;
}

console.log("Divisores:");

let qntDiv = 0;
let somaDiv = 0;

for (let i = 1; i <= numUser; i++) {
  if (numUser % i === 0) {
    qntDiv++;
    somaDiv += i;
    console.log(i);
  }
}
console.log(`Quantidade de divisores: ${qntDiv}`);
console.log(`Soma dos divisores: ${somaDiv}`);

if (numUser % 2 === 0) {
  console.log(`${numUser} é par`);
} else {
  console.log(`${numUser} é ímpar`);
}

if (qntDiv === 2) {
  console.log(`${numUser} é primo`);
} else {
  console.log(`${numUser} não é primo`);
}

if (numUser === somaDiv - numUser) {
  console.log(`${numUser} é perfeito`);
} else {
  console.log(`${numUser} não é perfeito`);
}
