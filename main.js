const form = document.getElementById("form-agenda");
const contato = [];
const numTel = [];

let linhas = '';

function adicionaLinhas(){
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumContato = document.getElementById("num-contato");

    if (contato.includes(inputNomeContato.value)){

        alert(`Nome já cadastrado`);

    }else if(numTel.includes(inputNumContato.value)){
        
        alert(`Número já está cadastrado para um outro contato`);

    }else{
        
        contato.push(inputNomeContato.value);
        numTel.push(inputNumContato.value);
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;

        inputNomeContato.value = "";
        inputNumContato.value = "";
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    adicionaLinhas();
    atualizaTabela();
});