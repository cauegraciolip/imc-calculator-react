import React, { useState } from 'react';

import Form from './components/Form/Form'

import './App.css'

function App() {

  const [result, setResult] = useState("");

  const MESSAGE = {
    0: "Magreza Grau III",
    1: "Magreza Grau II",
    2: "Magreza Grau I",
    3: "Adequado",
    4: "Pré-Obeso",
    5: "Obesidade Grau I",
    6: "Obesidade Grau II",
    7: "Obesidade Grau III"
  }

  const IMC = {
    0: 16,
    1: 16.9,
    2: 18.4,
    3: 24.9,
    4: 29.9,
    5: 34.9,
    6: 39.9,
    7: 40
  }

  let messageIMC = "Digite seu peso e altura";
  
  for(let index in IMC) {

    const conditional = result < IMC[index];

    if( conditional && result > IMC[index - 1] ) {

     messageIMC = `IMC = ${Number(result).toFixed(2)} - ${MESSAGE[index]}`;
     console.log(index, result);

    } else if(result < IMC[0]) {
      
      messageIMC = `IMC = ${Number(result).toFixed(2)} - ${MESSAGE[0]}`;
      console.log(index, result);
    
    } else if(result >= IMC[7]) {

      messageIMC = `IMC = ${Number(result).toFixed(2)} - ${MESSAGE[index]}`;
      console.log(index, result);
    }
    
  }

  function getResult(text) {
    setResult(text);
  }

  return <div className="principal-container">
    <h1 className="title">Calculadora IMC</h1>
    <Form getResult={getResult} />
    <div>
      <h3>{messageIMC}</h3>
    </div>
  </div>

}

export default App
