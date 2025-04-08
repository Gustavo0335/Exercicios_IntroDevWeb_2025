const campo = document.getElementById("campoCor");

campo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const corDigitada = campo.value.trim();
    document.body.style.backgroundColor = corDigitada;
  }
});
