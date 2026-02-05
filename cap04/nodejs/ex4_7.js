const prompt = require("prompt-sync")();

const valorCompra = Number(prompt("Dígite o valor total da compra:"));

const aux = Math.floor(valorCompra / 20);
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcela = valorCompra / parcelas;
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)} `);
