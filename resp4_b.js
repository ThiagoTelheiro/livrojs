const prompt = require("prompt-sync")();

const vPermitidida = Number(prompt("Vélocidade Permitida:"));
const vCondutor = Number(prompt("Velocidade do Condutor:"));

const limiteVelo = vPermitidida * 1.2;

if (vCondutor <= vPermitidida) {
  console.log("Situação: Sem Multas");
} else if (vCondutor <= limiteVelo) {
  console.log("Situação: Multa Leve");
} else {
  console.log("Situação: Multa Grave");
}
