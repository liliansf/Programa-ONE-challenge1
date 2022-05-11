const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");



function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    const apagarMsg = document.querySelector(".hiddenmsg");

    if (textoEncriptado != "") {
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none";
    apagarMsg.style.visibility = "hidden";
 
    }
    else {

        alert("Insira um texto não acentuado para continuar")
    
    }
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}



function btnDescriptar() {
     const textoDescriptado = descriptar(mensagem.value)
     const textoDescriptado2 = descriptar(inputTexto.value)
     const apagarMsg = document.querySelector(".hiddenmsg");
     
    if (textoDescriptado != "" || textoDescriptado2 != "") {
    mensagem.value = textoDescriptado
    mensagem.value = textoDescriptado2
    mensagem.style.backgroundImage = "none";
    apagarMsg.style.visibility = "hidden";

} else {

    alert("Criptografe um texto para continuar")

}
}

function descriptar(stringEncriptada) {

    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ober", "o"], ["ai", "a"], ["ufat", "u"]]
 
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada

}


/* função que seleciona e copia o texto de saída */
function Copy() {

    let copyText = document.querySelector(".mensagem");
  
     copyText.select();
     copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
  }
  
   /* função que atualiza a página e limpa todos os campos */
  function goBack() {
  
    location.reload();
  
  }