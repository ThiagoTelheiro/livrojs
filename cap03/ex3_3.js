const prompt = require("prompt-sync")();

const salario = Number(prompt("Salario: "));
const tempo = Number(prompt("Tempo: "));

const quadrienio = Math.floor(tempo / 4);
const porcentagem = salario * (quadrienio / 100);
const salarioFinal = salario + porcentagem;

console.log(`Salário Final ${salarioFinal.toFixed(2)}`);
