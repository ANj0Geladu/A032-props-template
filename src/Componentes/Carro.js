import React from "react";


function Carro(props) {
  return (
     <div>
       <p>Nome do carro: {props.nomeDoCarro}</p>
       <p>ano: {props.ano}</p>
       <p>Potencia: {props.potencia}</p>
       <p>Turbo? {props.turbo}</p>
       <p>{props.Foto}</p>
     </div>
  )
}

export default Carro