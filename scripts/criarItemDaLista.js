import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    if(inputItem.value === ""){
        alert("Por favor, insira um item.");
        return
    }

    const itemDaLista = document.createElement("li"); //cria o elemento li
    const containerItemDaLista = document.createElement("div"); //cria a div container (li > div)
    containerItemDaLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement("input"); //cria o input checkbox
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = `checkbox-${contador++}`;
    const nomeItem = document.createElement("p"); //cria o parágrafo)
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        }else {
            nomeItem.style.textDecoration = "none";
        }
    })

    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p"); //cria o parágrafo da data
    itemData.classList.add('texto-data')
    itemData.innerText = dataCompleta;

    containerItemDaLista.appendChild(inputCheckbox); //adiciona o checkbox na div container
    containerItemDaLista.appendChild(nomeItem); //adiciona o parágrafo na div container

    itemDaLista.appendChild(containerItemDaLista); //adiciona a div container na li
    itemDaLista.appendChild(itemData); //adiciona o parágrafo da data na li
    
    return itemDaLista;
}