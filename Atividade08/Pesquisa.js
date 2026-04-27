let ativa = false;
let registros = [];
let qtde = 0;
let totalAge = 0, age;
let pessimo = 0, regular = 0, bom = 0, otimo =0;
let opiniao; 
let velho = 0, novo = Infinity; 

function inicializar(){
    ativa = true;
    if(ativa == true && registros.length <45){
        age = parseInt(prompt("Digite a idade da pessoa: "));
        totalAge += age;
        opiniao = parseInt(prompt("Digite a opinião da pessoa 4-Ótimo, 3-Bom, 2-Regular, 1-Ruim"));
        if(opiniao ==4)
            otimo += 1;
        else if(opiniao==3)
                bom +=1;
            else if(opiniao==2)
                    regular+= 1;
                else if(opiniao ==1)
                    pessimo +=1;
        
        if(age > velho)
            velho = age;
        if(age < novo)
            novo = age;

        registros.push({idade: age, opiniao: opiniao});
    }
    else
        alert("Limite da pesquisa atingido");
}
function finalizar(){
    alert("Média de idade de todos que responderam: " + (totalAge/registros.length));
    alert("Pessoa mais velha que respondeu: " + velho);
    alert("Pesosa mais nova que respondeu: " + novo);
    alert("Quantidade de pessoas que responderam péssimo: " + pessimo);
    alert("Porcentagem de pessoas que responderam ótimo e bom: " + ((otimo + bom)/registros.length) * 100);

    registros =[];
    totalAge = 0;
    velho=0;
    novo = Infinity;
    pessimo = 0; regular =0; bom =0; otimo =0;
}