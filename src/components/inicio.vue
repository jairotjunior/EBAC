<template>
    <div class="conteudo">
        <div class="entradas">
            <input
                v-model="input1"
                type="number"
                @change="calcular()"
            >

            <div class="selecao">
            <select @change="calcular()" v-model="operadorSelecionado">
                <option v-for="item in options" :value="item" :key="item">
                    {{ item }}
                </option>
            </select>
        </div>

            <input 
                v-model="input2" 
                type="number"
                @change="calcular()"
            >

        </div>

        <div class="result">
            <p class="resultado">{{ resultado }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'inicio',
        data() {
            return {
                operadorSelecionado: '',
                input1: '',
                input2: '',
                options: [ "+", "-", "x", "÷"],
                resultado: 0
            }
        },
        methods: {
            somar(){
                const soma = this.input1 + this.input2;
                this.resultado = soma;
            },
            subtrair(){
                const subtrai = this.input1 - this.input2;
                this.resultado = subtrai;
            },
            multiplicar(){
                const multiplica = this.input1 * this.input2;
                this.resultado = multiplica;
            },
            dividir(){
                const divide = this.input1 / this.input2;
                this.resultado = divide;
            },
            calcular(){
                switch (this.operadorSelecionado){
                    case "+":
                    this.somar();
                    break;

                    case "-":
                    this.subtrair();
                    break;

                    case "x":
                    this.multiplicar();
                    break;

                    case "÷":
                    this.dividir();
                    break;

                    default:
                    break;
                }
            }
        }
    }
</script>

<style>

#app{
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.conteudo{
    display: block;
}

.entradas{
    display: flex;
    align-items: center;
    justify-content: center;
}

input{
    width: 30px;
    height: 30px;
    text-align: center;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
}

.selecao{
    margin: 0 15px;
    height: 20px;
    font-size: large;
    text-align: center;
    cursor: pointer;
}

option {
    font-size: 30px;
}

.result{
    display: block;
    text-align: center;
    margin-top: 50px;
}

</style>