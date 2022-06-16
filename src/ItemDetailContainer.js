import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {


  const [item, setItem] = useState({})
  const params = useParams()
  //console.log(params)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setItem(json))
  })


  return (
    <ItemDetail item={item} />
  )
}
export default ItemDetailContainer