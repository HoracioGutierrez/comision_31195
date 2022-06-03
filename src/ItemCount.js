import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {

  //let contador = initial
  const [contador, setContador] = useState(initial)

  //console.log(contador)


  const aumentarContador = () => {
    //contador = contador + 1
    //console.log(contador + 1)
    //console.log(contador)
    
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador("Horacio")
    //setContador(?)
    //contador = ?
  }

  const confirmarContador = () => { }

  return (
    <div>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={bajarContador}>disminuir</button>
      <button>confirmar</button>
    </div>
  )
}
export default ItemCount