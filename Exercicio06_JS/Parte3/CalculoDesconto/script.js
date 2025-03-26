let valor, desconto, valorFinal;
valor = prompt("Digite o valor do produto: ");
valor = parseFloat(valor);
desconto = prompt("Digite o valor do desconto: ");
desconto = parseFloat(desconto);
valorFinal = valor - desconto * valor / 100;
alert("O valor final do produto é: " + valorFinal);