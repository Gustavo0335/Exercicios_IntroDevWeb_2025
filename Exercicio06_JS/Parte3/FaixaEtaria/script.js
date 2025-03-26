let idade;
idade = prompt("Digite a sua idade: ");
idade = parseInt(idade);
if (idade < 18) {
    alert("Você é menor de idade.");
}
else if (idade >= 18 && idade <= 65) {
    alert("Você é maior de idade.");
}