const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);

  const terceiro = preco * 0.5;
  const precoFinal = preco * 2 + terceiro;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${precoFinal.toFixed(2)}`;

  resp2.innerText = `o 3° Produto custa apenas R$:  ${terceiro.toFixed(2)}`;
});
