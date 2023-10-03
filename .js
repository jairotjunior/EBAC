
const alunos = [
    {
        nome: "Jairo",
        notas: 6
    },

    {
        nome: "Pedro",
        notas: 5
    },

    {
        nome: "Manoel",
        notas: 10
    }
]

const aprovados = alunos.filter((nota)=> {
    return nota.notas >= 6;
})

console.log(aprovados);