let numero = 0;

const numeroSpan = document.getElementById("numero");
const btnAumentar = document.getElementById("aumentar");
const btnDiminuir = document.getElementById("diminuir");

btnAumentar.addEventListener("click", () => {
  numero++;
  numeroSpan.textContent = numero;
});

btnDiminuir.addEventListener("click", () => {
  numero--;
  numeroSpan.textContent = numero;
});
