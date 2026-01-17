const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const precoKg = Number(frm.inQuilo.value);
  const consumoGr = Number(frm.inConsumo.value);

  const gramasEmKg = consumoGr / 1000;
  const valorPagar = gramasEmKg * precoKg;

  resp1.innerText = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`;

  e.preventDefault();
});
