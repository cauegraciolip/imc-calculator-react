import React, { useState } from 'react';

import Button from '../Button/Button';

import './Form.css'

const Form = (props)=> {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    function getPeso(event) {
        const pesoValue = event.target.value;
        setPeso(pesoValue);
    }

    function getAltura(event) {
        const alturaValue = event.target.value;
        setAltura(alturaValue);
    }

    function sendResult(event) {
        event.preventDefault();
        props.getResult(calculateIMC())
    }

    function calculateIMC() {
        if(peso && altura) {
            const result = peso / (altura * altura);
            return result
        } else {
            return "Preencha todos os campos"
        }


    }

    return <form className="container">
        <div className="control-input">
            <div className="input-peso">
                <label>Peso</label>
                <input onChange={getPeso} className="input" placeholder="Peso" type="number" />
            </div>
            <div className="input-altura">
                <label>Altura</label>
                <input onChange={getAltura} className="input" placeholder="Altura" type="text" />
            </div>
        </div>
        <Button onClick={sendResult}>Adicionar</Button>
    </form>
}

export default Form;