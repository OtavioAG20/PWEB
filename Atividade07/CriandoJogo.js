function pedra(){
    var num1 = 2;
    var num2 = Math.floor(Math.random() * 3) + 1;
    if(num2 < num1){
        alert("Você ganhou da tesoura!");
    }
    else{
        if(num2 > num1){
            alert("Você perdeu para o papel!");
        }
        else{
            alert("Deu Empate!")
        }
    }
}
function tesoura(){
    var num1 = 2;
    var num2 = Math.floor(Math.random() * 3) + 1;
    if(num2 < num1){
        alert("Você ganhou do papel!");
    }
    else{
        if(num2 > num1){
            alert("Você perdeu para a pedra!");
        }
        else{
            alert("Deu Empate!")
        }
    }
}
function papel(){
    var num1 = 2;
    var num2 = Math.floor(Math.random() * 3) + 1;
    if(num2 < num1){
        alert("Você ganhou da pedra!");
    }
    else{
        if(num2 > num1){
            alert("Você perdeu para a tesoura!");
        }
        else{
            alert("Deu Empate!")
        }
    }
}