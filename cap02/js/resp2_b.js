const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor15Min = Number(frm.inValor.value);
  const tempoUso = Number(frm.inUso.value);

  const valorTotal = Math.ceil(tempoUso / 15) * valor15Min;

  resp.innerText = `Valor a Pagar R$: ${valorTotal.toFixed(2)}`;
});
