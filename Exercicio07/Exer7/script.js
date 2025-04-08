const botao = document.getElementById("mostrarTextoBtn");

botao.addEventListener("click", () => {
  const texto = document.getElementById("entradaTexto").value;
  document.getElementById("resultado").innerText = texto;
});
