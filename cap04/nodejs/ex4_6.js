const prompt = require("prompt-sync")();

const NumPessoas = prompt("N° De Pessoas:");
const NumPeixes = prompt("N° De Peixes:");

const valorEntrada = NumPessoas * 20;
const peixesExtra = NumPeixes - NumPessoas;
const valorExtra = peixesExtra * 12;
const valorTotal = valorEntrada + valorExtra;

if (NumPeixes <= NumPessoas) {
  console.log(`Pagar R$: ${valorEntrada}`);
} else {
  console.log(`Pagar R$: ${valorTotal.toFixed(2)}`);
}
