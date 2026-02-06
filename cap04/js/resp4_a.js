const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = Number(frm.inNumero.value);

  resp.innerText = num % 2 !== 0 ? `${num} é ímpar` : `${num} é par`;

  /*
  if (num % 2 != 0) {
    resp.innerText = `${num} é impar`;
  } else {
    resp.innerText = `${num} é par`;
  }
  */
});
