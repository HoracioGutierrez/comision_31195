import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
/* import productos from "./productos.json"

console.log(productos) */

const ItemDetailContainer = () => {


  //Habia Estados
  const [item, setItem] = useState({})

  //Habia Efectos
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setItem(json))


    //Dejar ejemplo con Promise

  })


  return (
    <ItemDetail item={item} />
  )
}
export default ItemDetailContainer