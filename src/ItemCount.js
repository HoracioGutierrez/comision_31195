import { useEffect, useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial)

  useEffect(()=>{
    
    //console.log("Pidiendo usuarios...")

  },[])

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador("Horacio")
  }

  const confirmarContador = () => {
    //onAdd(contador) ?
   }

  return (
    <div>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={bajarContador}>disminuir</button>
      <button onClick={confirmarContador}>confirmar</button>
    </div>
  )
}
export default ItemCount