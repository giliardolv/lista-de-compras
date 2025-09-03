const msgListaVazia = document.querySelector(".msg-lista-vazia");

function verificarListaVazia(listaDeItens) {
    const itens = listaDeItens.querySelectorAll("li");
    if(itens.length === 0){
        msgListaVazia.style.display = "block";
    }else {
        msgListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;