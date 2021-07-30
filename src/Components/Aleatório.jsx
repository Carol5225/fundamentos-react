import React from  'react';

function Aleatorio(props){
  const {min, max} = props;
  const aleatorio = parseInt(Math.random() * (max - min))+ min;
  return(
    <div>
      <h2>Valor aleatório</h2>
      <p><strong>Valor minimo:{min}</strong></p>
      <p><strong>Valor maximo:{max}</strong></p>
      <p><strong>Valor Escolhido:{aleatorio}</strong></p>
    </div>
  )
}
export default Aleatorio;