import { useState } from "react"
import './design.css'
import Banner from '../img/Velocimetro_IMC.jpg'

const calc_imc = () => {

    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let [imc_calc, setImc_calc] = useState("Valor de IMC");
    let [test, settest] = useState("Classificação IMC");

    const imc = () =>{
        let result_imc = 0;
        result_imc = peso / (altura * altura);
        return result_imc.toFixed(0);
    }

    const retorna_imc = () => {
        const val_imc = imc();
        const imc_class = clas_imc();
        
        setImc_calc(val_imc);
        settest(imc_class);
    }

    const clas_imc = () => {
        if (imc() <= 18.5){
            return "Abaixo do Normal"
        }
        if (imc() >= 18.6 && imc() <= 24.9){
            return "Normal"
        }
        if (imc() >= 25 && imc() <= 29.9){
            return "Sobrepeso"
        }
        if (imc() >= 30 && imc() <= 34.9){
            return "Obesidade grau I"
        }
        if (imc() >= 35 && imc() <= 39.9){
            return "Obesidade grau II"
        }
        if (imc() >= 40){
            return "Obesidade grau III"
        }
    }
        
    return(
        <div className="corpo">
            <img className="banner" src={Banner} alt="" />
            <h1 className="titulo">Calculadora IMC</h1>
            <div className="calc_imc">
                <div className="desc_imc">
                    <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
                    <br/><p>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
                    <br/><p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.</p>
                </div>
                <div className="peso_alt">
                    <h2 className="titulo_calc">Vamos Calcular sem IMC</h2>
                    <div className="caixa_imc">
                        <form>
                            <input
                                className="ent entPeso"
                                type="number" 
                                placeholder="Digite seu Peso" 
                                onChange={e => setPeso(e.target.value)} 
                            /><br/>
                            <input 
                                className="ent entAlt"
                                type="number" 
                                placeholder="Digite sua Altura" 
                                onChange={e => setAltura(e.target.value)} 
                            />
                        </form>
                        <div className="result_imc">
                            <p className="valor_imc">{imc_calc}</p>
                            <p className="classificacao_imc">{test}</p>
                        </div>
                    </div>
                    <button onClick={retorna_imc} type="button">Calcular</button>
                </div>
            </div>
        </div>
    )
}

export default calc_imc