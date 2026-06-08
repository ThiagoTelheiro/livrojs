const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);
  const anos = Number(frm.inAnos.value);

  if (num % 2 != 0) {
    resp.innerText = "Digite um número válido (um casal)";
    return;
  }

  let anos2 = "";
  let chin = num;

  for (let i = 1; i <= anos; i++) {
    anos2 += `${i}° Ano: ${chin} Chinchilas\n`;
    chin *= 3;
  }

  resp.innerText = anos2;
});
