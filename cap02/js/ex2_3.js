const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");
const resp3 = document.querySelector("#outresp3");

frm.addEventListener("submit", (e) => {
  const modelo = frm.inVeiculo.value;
  const preco = Number(frm.inPreco.value);

  const valorEntrada = preco / 2;
  const saldoParcelado = valorEntrada / 12;

  resp1.innerText = `Promoção: ${modelo}`;
  resp2.innerText = `Entrada de R$: ${valorEntrada.toFixed(2)}`;
  resp3.innerText = `+12x de R$: ${saldoParcelado.toFixed(2)}`;

  e.preventDefault();
});
