import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

  const [cant, setCant] = useState(true)

  const onAdd = (cantidadSeleccionada) => {
    setCant(cantidadSeleccionada)
  }

  //agregarAlCarrito

  return (
    <div>
      <h2>{item.title}</h2>
      <img className="detail-image" src={item.image} alt="thumbnail" />
      <p>{item.description}</p>
      <p>Precio : ${item.price}</p>
      <ItemCount initial={1} onAdd={onAdd} stock={5}/>
      <button>terminar mi compra</button>
    </div>
  )
}
export default ItemDetail