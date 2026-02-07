const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorD = Number(frm.inNum.value);

  const min30 = 1.0;
  const min60 = 1.75;
  const min120 = 3.0;

  if (valorD < min30) {
    resp1.innerText = `Valor Insuficiente`;
    resp2.innerText = ``;
    frm.inNum.focus();
    return;
  }

  let troco;
  if (valorD >= min120) {
    troco = valorD - min120;
    resp1.innerText = `Tempo: 120min`;
    resp2.innerText = `Troco: ${troco.toFixed(2)}`;
  } else if (valorD >= min60) {
    troco = valorD - min60;
    resp1.innerText = `Tempo: 60min`;
    resp2.innerText = `Troco: ${troco.toFixed(2)}`;
  } else {
    troco = valorD - min30;
    resp1.innerText = `Tempo: 30min`;
    resp2.innerText = `Troco: ${troco.toFixed(2)}`;
  }
});
