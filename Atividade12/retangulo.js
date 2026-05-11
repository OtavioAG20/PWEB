function Retangulo(x, y){
    this.base = x;
    this.altura = y;
    this.calcularArea = function(){
        return this.base * this.altura;
    }
}

function calcularArea(){
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let objRet = new Retangulo(base, altura);

    alert("Área= " + objRet.calcularArea());
}