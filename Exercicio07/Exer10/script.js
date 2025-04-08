const form = document.getElementById("formContato");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Captura os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Exibe os dados na tela
  resultado.innerHTML = `
    <h3>Dados enviados:</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Mensagem:</strong> ${mensagem}</p>
  `;
  
  resultado.style.display = "block";
});
