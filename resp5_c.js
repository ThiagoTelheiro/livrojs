const prompt = require("prompt-sync")();

const numUser = Number(prompt("Digite um Número: "));
console.log(`Divisor de ${numUser}:`);
let soma = 0;
for (let i = 1; i < numUser; i++) {
  if (numUser % i === 0) {
    soma += i;
    console.log(i);
  }
}
console.log(`Soma(${soma})`);
if (numUser === soma) {
  console.log(`${numUser} É um número perfeito`);
} else {
  console.log(`${numUser} Não é um número perfeito`);
}
a