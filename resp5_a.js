const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inFruta.value;
  const num = Number(frm.inNumero.value);

  let fruta = "";
  for (let i = 1; i <= num; i++) {
    fruta = fruta + nome;

    if (i < num) {
      fruta = fruta + " * ";
    }
  }

  resp.innerText = fruta;
});
