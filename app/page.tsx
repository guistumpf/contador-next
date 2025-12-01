'use client'

import { useState } from "react"


export default function App(){

const [numero, setnumero] = useState(0)


let cor

function mais(){
  setnumero(numero + 1)
}
function reset(){
  setnumero(0)
}

function menos(){
   setnumero(numero - 1)
}


if(numero > 0){
  cor = "green"
} else if(numero < 0){
  cor = "red"
} else {
  cor = "white"
}


return(
  <section>
    <h1>Contador</h1>
    <p style={{color: cor}}>{numero}</p>
    <button onClick={mais}>➕</button>
    <button onClick={reset}>🔃</button>
    <button onClick={menos}>➖</button>
  </section>
)



}