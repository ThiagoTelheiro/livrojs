const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorD = Number(frm.inNum.value);
  console.log(valorD);

  const min30 = 1.0;
  const min60 = 1.75;
  const min120 = 3.0;

  if (valorD < min30) {
    resp1.innerText = `Valor Insuficiente`;
  }

  let troco;

  if (valorD >= min30) {
    troco = valorD - min30;
    resp1.innerText = `Tempo: 30 min`;
    resp2.innerText = `Troco: ${troco.toFixed(2)}`;
  } else if (valorD >= min60) {
    troco = valorD - min60;
    resp1.innerText = `Tempo: 60 min`;
    resp2.innerText = `Troco: ${troco.toFixed(2)}`;
  } else {
    troco = valorD - min120;
    resp1.innerText = `Tempo: 120 min`;
    resp2.innerText = `Troco: ${troco.toFixed(2)}`;
  }
});
