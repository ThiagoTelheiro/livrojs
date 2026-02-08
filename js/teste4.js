const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");
const resp3 = document.querySelector("#outresp3");
const resp4 = document.querySelector("#outresp4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const modeloCaneta = frm.inModelo.value;
  const precoUnitario = Number(frm.inPreco.value);
  const canetasPorPacote = Number(frm.inQuantidade.value);
  const quantidadePacote = Number(frm.inPacote.value);
6
  const canetasTotal = canetasPorPacote * quantidadePacote;
  const valorTotal = canetasTotal * precoUnitario;
  const valorMedio = valorTotal / canetasTotal;
  const valorUniPacote = canetasPorPacote * precoUnitario;

  resp1.innerText = `Modelo: ${modeloCaneta}`;
  resp2.innerText = `Valor Total R$: ${valorTotal.toFixed(2)}`;
  resp3.innerText = `Valor Médio R$: ${valorMedio.toFixed(2)}`;
  resp4.innerText = `Valor de um Pacote R$: ${valorUniPacote.toFixed(2)}`;
});
