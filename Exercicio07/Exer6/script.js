const botao = document.getElementById("mudarCorBtn");

botao.addEventListener("click", () => {
  const corAleatoria = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = corAleatoria;
});
