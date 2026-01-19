const prompt = require("prompt-sync")();

const pesoKg = Number(prompt("Peso da Ração (Kg): "));
const consumoDia = Number(prompt("Consumo Diário (gr): "));

const pesoGramas = pesoKg * 1000;
const duracao = Math.floor(pesoGramas / consumoDia);
const sobra = pesoGramas % consumoDia;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}`);
