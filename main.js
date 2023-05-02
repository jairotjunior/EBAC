const form = document.getElementById("caixa");
let campos = document.querySelector(".campo")
let campobValido = document.querySelector(".campobValido");
const campoA = document.getElementsByName("campoA")[0];
const campoB = document.getElementsByName("campoA")[1];

function voltar(){
    campos.style.display = "block";
    campobValido.style.display = "none";
    campoA.value =" ";
    campoB.value =" ";
}

function formValido (){
    campobValido.innerHTML = "O campo B é maior, sua solicitação foi processada";
    campos.style.display = "none";
    campobValido.style.display = "block";
}

function formInvalido (){
    campobValido.innerHTML = "O campo A é maior, sua solicitação foi negada";
    campos.style.display = "block";
    campobValido.style.display = "block";
    campobValido.style.backgroundColor = 'red';
    campobValido.style.color = 'white';
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if (campoA.value == campoB.value)
    {
        campobValido.innerHTML = "Os campos são iguais";
        campobValido.style.display = "block";

    }else{
        console.log(campoA.value >= campoB.value ? formInvalido () : formValido () );
    }
})