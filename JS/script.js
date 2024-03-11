
function codificar(texto) {
    let codigoReferencia = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < codigoReferencia.length; i++) {
        if(texto.includes(codigoReferencia[i][0])){
            texto = texto.replaceAll(codigoReferencia[i][0], codigoReferencia[i][1]);
        }
    }
    return texto;
}

function descodificar(texto) {
    let codigoReferencia = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < codigoReferencia.length; i++) {
        if(texto.includes(codigoReferencia[i][1])){
            texto = texto.replaceAll(codigoReferencia[i][1], codigoReferencia[i][0]);
        }
    }
    return texto;
}

function arrumandoElementos(texto){
    const areaDeTextoCodificado = document.querySelector(".mensagemCodificada");
    areaDeTextoCodificado.style.backgroundImage = 'none';
    areaDeTextoCodificado.style.display = 'block';
    areaDeTextoCodificado.value = texto;

    const textosComplementares = document.querySelectorAll('.vizualizacao__posicao');
    textosComplementares.forEach(elemento => {
        elemento.parentNode.removeChild(elemento);
    });

    const botaoCopiar = document.querySelector(".principal__vizualizacao__copiar");
    botaoCopiar.style.display = "block";
}

function codificandoTexto(){
    const textoParaCodificar = document.querySelector(".principal__campo_texto_mensagem").value;
    const textoCodificado = codificar(textoParaCodificar);

    arrumandoElementos(textoCodificado);
}

document.getElementById("codificarLink").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link recarregue a página
    codificandoTexto();
});

function descodificandoTexto(){
    const textoParaDescodificar = document.querySelector(".principal__campo_texto_mensagem").value;
    const textoDescodificado = descodificar(textoParaDescodificar);

    arrumandoElementos(textoDescodificado);

}

document.getElementById("descodificarLink").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link recarregue a página
    descodificandoTexto();
});

function copiarTexto() {
    var areaDeTextoCodificado = document.querySelector(".mensagemCodificada").value;
    
    navigator.clipboard.writeText(areaDeTextoCodificado);
}

document.getElementById("copiarLink").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link recarregue a página
    copiarTexto();
});
