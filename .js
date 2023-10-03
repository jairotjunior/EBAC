// class aluno {
//     constructor(nome, nota){
//         this.nome = nome;
//         this.nota = nota;
//     }

//     mediaNotas(){
//         if (this.nota >= 6){
//             console.log(`Aluno ${this.nome} foi aprovado com média ${this.nota}`);
//         }else{
//             console.log(`Aluno ${this.nome} foi reprovado com média ${this.nota}`);
//         }
//     }
// }

// class sala1 extends aluno{

// }

// const jairo = new sala1("Jairo", 5);
// jairo.mediaNotas();


// function media(notas){
//     return 
// }

let notas = [6, 10, 5, 3];
let soma = 0;

notas.forEach(function(nota){
    soma += nota;
});

function calcMedia(soma){
    return soma/notas.length;
}

const aprovados = notas.filter(function(media) {
    return calcMedia(soma);
})

console.log(aprovados);