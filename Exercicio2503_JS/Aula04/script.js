//nome e idade
let nome, idade;

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");
document.write("Olá, " + nome + "! Você tem " + idade + " anos de idade.");

//soma de dois números
let n1, n2, soma;
n1 = Number(prompt("Digite o primeiro número: "));
n2 = Number(prompt("Digite o segundo número: "));
soma = n1 + n2;
document.write("<br>A soma dos números é: " + soma);

//A média de três notas
let nt1, nt2, nt3, media;

nt1 = Number(prompt("Digite a primeira nota: "));
nt2 = Number(prompt("Digite a segunda nota: "));
nt3 = Number(prompt("Digite a terceira nota: "));
media = (nt1 + nt2 + nt3) / 3;
document.write("<br>A média das notas é: " + media);
