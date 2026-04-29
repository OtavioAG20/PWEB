function maiorNumero(){
    let num1, num2, num3;
    num1 = parseInt(prompt("Digite o primeiro número"));
    num2 = parseInt(prompt("Digite o segundo número"));
    num3 = parseInt(prompt("Digite o terceiro número"));

    let big = maior(num1, num2, num3);

    alert("O maior número foi: " + big);
}
function maior(n1, n2, n3){
    let max = n1;
    if(n2 > max)
        max = n2;
    if(n3 > max)
        max = n3;

    return max;
}

function ordemCrescente(){
    let num1 = parseInt(prompt("Digite o 1° número"));
    let num2 = parseInt(prompt("Digite o 2° número"));
    let num3 = parseInt(prompt("Digite o 3° número"));

    ordem(num1, num2, num3);
}
function ordem(n1, n2, n3){
    let aux;

    if(n1 > n2){
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    if(n1 > n3){
        aux = n1;
        n1 = n3;
        n3 = aux;
    }
    if(n2 > n3){
        aux = n2;
        n2 = n3;
        n3 = aux;
    }

    alert("A ordem ordem crescente dos números é: " + n1 + ", " + n2 + ", " + n3);
}
function palindromo(){
    let texto = prompt("Digite uma palavra");

    let aux, invertido;
    aux = texto.toUpperCase().replace(/\s/g, "");
    invertido = aux.split("").reverse().join("");

    if(aux === invertido)
        alert("A palavra é um palíndromo!")
    else
        alert("A palavra não é palíndromo!");
}
function subconjunto(){
    let palavra1 = (prompt("Digite a primeira palavra"));
    let palavra2 = (prompt("Digite a segunda palavra"));

    validacao(palavra1, palavra2);
}
function validacao(palavra1, palavra2){
    if(palavra1 ==="" || palavra2==="")
        return alert("Erro");

    palavra1 = palavra1.toUpperCase();
    palavra2 = palavra2.toUpperCase();
    if(palavra1.includes(palavra2))
        return alert("É um subconjunto");
    else 
        return alert("Não é um subconjunto");
         
}

function diaSemana(){
        let data = prompt("Digite uma data - AAAA/MM/DD");
        let objData = new Date(data);

        let dia = objData.getDay();
        let dias = ["Domingo", "Segunda","Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        alert("O dia da semana que caiu essa data: " + dias[dia]);
}