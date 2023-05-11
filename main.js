const entradaTarefa = $('#entrada-tarefa');
const tarefa = [];
let listas;

function validarTarefa(){

    if (!entradaTarefa.val()){

        alert("Necessário adicionar uma tarefa");
        return;

    }

    tarefa.includes(entradaTarefa.val()) ? alert("Tarefa já adicionada") : adicionaTarefa();

}

function adicionaTarefa(){

        tarefa.push(entradaTarefa.val());

        listas = $("ul").append(`<li class="criada">${entradaTarefa.val()}</li>`)
        entradaTarefa.val("");
        entradaTarefa.focus();

}

$("ul").click(e => {
    $(e.target).toggleClass("riscado");
})

function cadastrar(){
    validarTarefa();
}