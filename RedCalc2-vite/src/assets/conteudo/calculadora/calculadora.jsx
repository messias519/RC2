import {useState } from 'react';
import './calculadora.css';

export default function Calculadora(){
//variaveis pct
    const [peso, setPeso] = useState("70")
    const [velocidade, setVelocidade] = useState("10")

//handle
    const handleChangePeso = (e) => {
        e.preventDefault();
        setPeso(e.target.value);
    }; 
    
    const handleChangeVelocidade = (e) => {
        e.preventDefault();
        setVelocidade(e.target.value);
    }; 

       const handleChangeVolumeSolucao = (e) => {
        e.preventDefault();
        setVolumeSolucao(e.target.value);
    }

    const handleChangeVolumeDroga = (e) => {
        e.preventDefault();
        setVolumeDroga(e.target.value)
    }

    const handleChangeConcentracaoAmpola = (e) => {
        e.preventDefault();
        setConcentracaoAmpola(e.target.value)
    }



// variaveis droga
    const [droga, setDroga] = useState('')
    const [volumeDroga, setVolumeDroga] = useState('')
    const [volumeSolucao, setVolumeSolucao] = useState('')    
    const [concentracaoAmpola, setConcentracaoAmpola] = useState('')
    const [dose, setDose] = useState('')
    const [doseMax, setDoseMax] = useState('')
    const [doseMin, setDoseMin] = useState('')

// formulas
    // concentração da ampola -> mg/ml     concentração final -> mcg/ml
    const concentracaoFinal = ((concentracaoAmpola * volumeDroga) / volumeSolucao) * 1000
    const resFormulaDose = (velocidade * concentracaoFinal) / 60 / peso
    const resFormulaDoseMax = ((doseMax * peso) / concentracaoFinal) * 60
    const resFormulaDoseMin = ((doseMin * peso) / concentracaoFinal) * 60

// drogas
    const noradrenalina = (e) => {
        e.preventDefault()
        setDroga(e.target.value)
        setVolumeDroga(16) // em ml
        setVolumeSolucao(250) // em ml
        setConcentracaoAmpola(1) // em mg/ml
        setDoseMax(3.3) // em mcg/kg
        setDoseMin(0.01) // em mcg/kg        
    }
    
    const dobutamina = (e) => {
        e.preventDefault()
        setDroga(e.target.value)
        setVolumeDroga(80)
        setVolumeSolucao(250)
        setConcentracaoAmpola(12.5)
        setDoseMax(20)
        setDoseMin(2.5)        
    }

    const nipride = (e) => {
        e.preventDefault()
        setDroga(e.target.value)
        setVolumeDroga(2)
        setVolumeSolucao(250)
        setConcentracaoAmpola(25)
        setDoseMax(10)
        setDoseMin(0.5)        
    }

    const tridil = (e) => {
        e.preventDefault()
        setDroga(e.target.value)
        setVolumeDroga(10)
        setVolumeSolucao(250)
        setConcentracaoAmpola(5)
        setDoseMax(20)
        setDoseMin(0.5)        
    }

   
    
    const custom = (e) => {
        e.preventDefault()
        setDroga(e.target.value)
        setVolumeDroga(10)
        setVolumeSolucao(250)
        setConcentracaoAmpola(1)
        setDoseMax()
        setDoseMin()        
    }


    return(
        <div>
            <div className='calculadora-doses'>
                <div className="title">Calculadora de Doses</div>
                
                <div className="input-peso">
                    <p> Peso  <input className='input-peso-box' type='range' step='1' min='40' max='160' onChange={handleChangePeso} value={peso} /> {peso}Kg </p>
                </div>
                
                <div className="input-velocidade">
                    <p> Velocidade na bomba <input className='input-velocidade-box' type='range' step='1' min='1' max='100' onChange={handleChangeVelocidade} value={velocidade} /> {velocidade}ml/h </p>
                </div>

                <div className="escolha-droga">
                    <div className="escolha-droga-titulo"> Selecione a droga: </div>
                    <div className="escolha-droga-drogas">
                    <input type='button' name='droga' value='Dobutamina' onClick={dobutamina}/>
                        <input type='button' name='droga' value='Noradrenalina' onClick={noradrenalina}/>                    
                        <input type='button' name='droga' value='Nipride' onClick={nipride}/>
                        <input type='button' name='droga' value='Tridil' onClick={tridil}/>
                        <input type='button' name='droga' value='Custom' onClick={custom}/>
                    </div>
                </div>

                <div className="escolha-diluicao">
                    <div className="escolha-diluicao-titulo"> Qual a diluição? </div>
                    <div className="volume-soro">
                    Volume da solução: <input type='number' value={volumeSolucao} onChange={handleChangeVolumeSolucao}/>ml
                    </div>
                    <div className="volume-droga">
                    Volume da droga: <input type='number' value={volumeDroga} onChange={handleChangeVolumeDroga}/>ml
                    </div>
                    <div className="concentracaoAmpola">
                    Concentração da ampola: <input type='number' value={concentracaoAmpola} onChange={handleChangeConcentracaoAmpola}/>mg/ml
                    </div>
                </div>

                <div className="resultado">
                    <div className="resultado-titulo"> Resultado para {droga}: </div>
                    <div className="resultado-card">
                        <div className="resultado-dose"> Dose atual de {resFormulaDose.toFixed(2)}mcg/kg/min </div>
                        <div className='resultado-dose-max'> Dose máxima {resFormulaDoseMax.toFixed(2)}ml/h </div>
                        <div className="resultado-dose-min"> Dose mínima {resFormulaDoseMin.toFixed(2)}ml/h </div>
                    </div>
                </div>
            </div>
        </div>
    )
}