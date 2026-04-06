var prova1;
var prova2;
var trab1;
var trab2;
var soma;

function somarNotas(){
    prova1 = parseFloat(prompt("Digite a nota da primeira prova: "));
    prova2 = parseFloat(prompt("Digite a nota da segunda prova: "));
    trab1 = parseFloat(prompt("Digite a nota do primeiro trabalho: "));
    trab2 = parseFloat(prompt("Digite a nota do segundo trabalho: "));

    soma = (((prova1 + prova2)/2) + ((trab1 + trab2)/2))/2;

    alert("Nota final = " + soma);
}