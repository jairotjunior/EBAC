function Desenvolvedor (raciociniologico, autoDidata, linguagens, aplicacao){
    this.raciociniologico = raciociniologico;
    this.autoDidata = autoDidata;
    this.linguagens = linguagens;
    this.aplicacao = aplicacao;
}

function Desenvolvedor_web (raciociniologico, autoDidata, linguagens, aplicacao){
    Desenvolvedor.call(this, raciociniologico, autoDidata, linguagens, aplicacao);
}

function Desenvolvedor_app (raciociniologico, autoDidata, linguagens, aplicacao){
    Desenvolvedor.call(this, raciociniologico, autoDidata, linguagens, aplicacao);
}

const Desenvolvedor1 = new Desenvolvedor();
const Desenvolvedor_web1 = new Desenvolvedor_web("Sim", "Sim", "HTML", "Navegador");
const Desenvolvedor_app1 = new Desenvolvedor_app("Sim", "Sim", "JAVA", "Celular");

console.log(Desenvolvedor1);
console.log(Desenvolvedor_web1);
console.log(Desenvolvedor_app1);