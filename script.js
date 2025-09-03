import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeItens = document.getElementById("lista-de-compras"); //ul

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeItens.appendChild(itemDaLista); //adiciona a li na ul
    verificarListaVazia(listaDeItens);
})

verificarListaVazia(listaDeItens);