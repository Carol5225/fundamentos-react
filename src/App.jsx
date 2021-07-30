import React from 'react';

import Primeiro from './Components/Basicos/Primeiro';
import ComParametro from './Components/Basicos/ComParametro';
import Fragmento from './Components/Basicos/Fragmento';
import Aleatorio from './Components/Aleatório';
import Card from  './Layout/Card';


export default () => (
    <div id="app">
      <h1>Fundamentos React</h1>
      
        <Card titulo="Desafio Aleatório">
          <Aleatorio min={1} max={60}/>
          </Card>

        <Aleatorio min={1} max={60}/>
        <Fragmento />
        <ComParametro
          titulo="Situação do aluno"
          aluno=" pedro "
          nota={9.3}
        />
        <Primeiro />
    </div>
);