import React from "react";
import Carro from "./Carro"

function Garagem(props){
   return(
    <div>
      <h1>Garagem de {props.nome}</h1>
      <h1>Idade de {props.nome} é {props.idade}</h1>
      <h3 id="carro1" ><Carro nomeDoCarro="Porsche Cayan" ano="2007"  potencia="500 cavalos" turbo="Não é"/></h3>
      <h3 id="carro2"><Carro nomeDoCarro="Ford Mustang GT" ano="2021"  potencia="800 cavalos" turbo="Modificado" /></h3>
    </div>
   )
}
export default Garagem