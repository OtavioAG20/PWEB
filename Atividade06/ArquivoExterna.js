var num1;
var num2;
var operacao;
function operacoes(){
    num1 = parseFloat(prompt("Digite o primeiro número"));
    num2 = parseFloat(prompt("Digite o segundo número"));

    operacao = num1 + num2;
    alert("A soma dos dois números é: " + operacao);
    operacao = num1 - num2;
    alert("A subtração do primeiro pelo segundo: " + operacao);
    operacao = num1 * num2;
    alert("O produto dos dois numeros: " + operacao);
    operacao = num1/num2;
    alert("Divisão do primeiro pelo segundo: " + operacao);
    operacao = num1%num2;
    alert("O resto da divisão do primeiro pelo segundo" + operacao);

}