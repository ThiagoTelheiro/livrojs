const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeSorvete = frm.inNome.value;
  const precoBola = Number(frm.inPreco.value);
  const quantidadeBola = Number(frm.inQuantidade.value);

  const valorTotal = precoBola * quantidadeBola;
  const valorMedio = valorTotal / quantidadeBola;

  resp1.innerText = `Valor Total R$: ${valorTotal.toFixed(2)}`;
  resp2.innerText = `Valor Medio Por Bola R$: ${valorMedio.toFixed(2)}`;
});
