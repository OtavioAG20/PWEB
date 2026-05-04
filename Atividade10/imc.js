function calcIMC(){
    let peso;
    let altura;

    peso = parseFloat(prompt("Insira seu peso"));
    altura = parseFloat(prompt("Insira sua altura"));

    let IMC = peso/(altura * altura);
    if(IMC<18.5)
        alert("MAGREZA");
    else if(IMC>=18.5 && IMC<25)
        alert("NORMAL");
    else if(IMC>=25 && IMC<30)
        alert("SOBREPESO")
    else if(IMC>=30 && IMC<40)
        alert("OBESIDADE");
    else
        alert("OBESIDADE GRAVE");
                
}