import React from "react";

function Carro(props){
  return(
    <div className="divPaiDoCarro">
    <h2>Carro: {props.nome}</h2>
    <p>cor: {props.cor}</p>
    <p>ano {props.ano}</p>
    <p>flex: {props.flex}</p>
    </div>
  )
}
export default Carro