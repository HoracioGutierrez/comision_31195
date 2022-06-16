import { useEffect, useState } from "react"


//3) Recibo el prop funcion del componente padre
const ItemCount = ({ stock, initial , onAdd }) => {

  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador(contador - 1)
  }

  const confirmarContador = (e) => {

    //4) El compoennte Hijo ejecuta la funcion del padre con el parametro que quiera
    onAdd(contador)
    //Comportamiento por default : 


    //Propagacion de Eventos :  Los eventos por default se propagan a los elementos que los contienen (bubbling) [y a los elementos que contiene (capturing)]
    //e.stopPropagation()

    //e/Event : Es un objeto que representa el evento que se está propagando actualmente.
    //console.log(e.target)


    //onAdd(contador) ?
    //console.log("Confirmar")

    //return undefined
    /* return ()=>{
      console.log("Soy el return")
    } */
  }

  //confirmarContador()

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    console.log("validando...")
  }

  const handleKeyDown = (e) => {
    //e.preventDefault()
  }

  return (
    <div onClick={(e) => { console.log(e.currentTarget) }}>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={bajarContador}>disminuir</button>
      <button onClick={confirmarContador}>confirmar</button>
      <a href="http://google.com" onClick={(e) => {
        e.preventDefault()
        console.log("No se ejecuta")
      }} >google</a>

      <form onSubmit={handleSubmit}>
        <input type="text" onKeyDown={handleKeyDown} />
      </form>

    </div>
  )
}
export default ItemCount