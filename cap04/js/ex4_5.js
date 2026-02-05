const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");
const resp3 = document.querySelector("#outresp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorSaque = Number(frm.inSaque.value);

  if (valorSaque % 10 != 0) {
    alert("Valor invalído para notas disponiveis (R$: 10, 50, 100)");
    frm.inSaque.focus();
    return;
  }

  const notasCem = Math.floor(valorSaque / 100);
  let resto = valorSaque % 100;
  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  const notaDez = Math.floor(resto / 10);
  if (notasCem > 0) {
    resp1.innerText = `Notas de R$ 100: ${notasCem}`;
  }
  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`;
  }
  if (notaDez > 0) {
    resp3.innerText = `Notas de R$ 10: ${notaDez}`;
  }
});
