function abrirJanela(){
    document.getElementById("janela").src="imagens/janela_aberta.webp";
    document.getElementById("abre").innerHTML="Janela Aberta";
}
function fecharJanela(){
    document.getElementById("janela").src = "imagens/janela_fechada.webp";
    document.getElementById("abre").innerHTML = "Janela Fechada";
}

function quebrarJanela(){
    document.getElementById("janela").src = "imagens/janela_quebrada.webp";
    document.getElementById("abre").innerHTML = "Janela Quebrada";

    let img = document.getElementById("janela");
    img.onmouseover = null;
    img.onmouseout = null;
}