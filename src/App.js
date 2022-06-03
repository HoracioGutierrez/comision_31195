
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { useState } from "react"



const App = () => {

  //const contador = 0
  //const resultado = useState(0)
  //const contador = resultado[0]
  //const cambiarContador = resultado[1]
  //const [contador, cambiarContador] = useState(0)
  const [contador, setContador] = useState()


  //console.log(contador)

  //contador = 1
  //contador++

  /* const otrouseState = useState("horacio")
  const nombre = otrouseState[0]
  const cambiarNombre = otrouseState[1] */
  //cambiarContador(contador + 1)

  //const btn = document.getElementById("")
  //btn.addEventListener("click",aumentarContador)

  const aumentarContador = () => {
    console.log("aumentarContador")
    //console.log(contador++)
    //console.log(contador=1)
    //console.log(contador+=1)
    setContador(contador + 1)
  }

  const bajarContador = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }



  return (
    <>
      <Header />
      <Main/>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={bajarContador}>disminuir</button>
      <button>confirmar</button>
      <Footer />
    </>
  )
}

export default App