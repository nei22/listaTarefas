let contador = 0;
let buttonAdd = document.getElementById('btn')
let input = document.getElementById('texto')
let main = document.getElementById('areaLista')

function coloqueTarefa() {
    // pegar o valor do input
    let inputValor = input.value;
    // se nao for vazio nulo nem indefinido
    if ((inputValor !== "") && (inputValor !== null) && (inputValor !== undefined)){
        ++contador
        let itemNovo = `
        <div id="${contador}"class="item">
        <div onclick="tarefaMarcada(${contador})" class="item-icone">
            <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="tarefaMarcada(${contador})" class="item-nome">
            ${inputValor}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i  class="mdi mdi-delete"></i> Deletar</button>
        </div> 
        </div>`;
        // += adiciona item no main
        main.innerHTML += itemNovo
        // zera os campos
        input.value = "";
        input.focus()
    }

}

function tarefaMarcada(id){
    let item = document.getElementById(id)
    let classe = item.getAttribute('class')
    console.log(classe);
    if (classe == "item") {
        item.classList.add('clicado')
        let icone = document.getElementById('icone_'+ id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')
        item.parentNode.appendChild(item)
  }
    else{
            item.classList.remove('clicado')
            let icone = document.getElementById('icone_'+ id)
            icone.classList.add('mdi-circle-outline')
            icone.classList.remove('mdi-check-circle')
        }
}

function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove()
}
input.addEventListener('keyup', function(event) {
    // se teclou enter(13 keyboard) dispare evento de click
    if (event.keyCode === 13) {
        event.preventDefault();
        buttonAdd.click();
    }
})
