import React from "react";
import Carro from "./Carro"

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <Carro nome="Nissan " cor="verde" ano="2005" flex="GÁS, ÁLCOOL, GASOLINA" />
      <Carro nome="Ford Mustang" cor="preto" ano="2021" flex="GASOLINA" />
      <Carro nome="Porsche" cor="Azul perolado" ano="2020" flex="GÁS, ÁLCOOL" />
      <Carro nome="BMW z4" cor="Cinza" ano="2018" flex="GASOLINA" />
    </div>
  )
}

export default Garagem
