const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

frm.addEventListener("submit", (e) => {
  const produto = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);

  const calculo = Math.floor(preco * 2);

  resp1.innerText = `Promoção de ${produto}`;
  resp2.innerText = `Leve 2 por apenas R$: ${calculo.toFixed(2)}`;

  e.preventDefault();
});
çp;
