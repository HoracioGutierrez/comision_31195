import { useState } from "react"

const ItemCount = ({ stock, initial , onAdd }) => {

  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador(contador - 1)
  }

  const confirmarContador = (e) => {
    onAdd(contador)
  }

  return (
    <div onClick={(e) => { console.log(e.currentTarget) }}>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={bajarContador}>disminuir</button>
      <button onClick={confirmarContador}>confirmar</button>
    </div>
  )
}
export default ItemCount