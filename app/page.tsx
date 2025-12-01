'use client'

import { useState } from "react"


export default function App(){

const [numero, setnumero] = useState(0)

function mais(){
  setnumero(numero + 1)
}

function menos(){
   setnumero(numero - 1)
}

return(
  <section>
    <h1>Contador</h1>
    <p>{numero}</p>
    <button onClick={mais}>mais</button>
    <button onClick={reset}></button>
    <button onClick={menos}>menos</button>
  </section>
)



}