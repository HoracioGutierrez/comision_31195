import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { productos } from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { ProductLoader } from "./ProductLoader"


const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {

    setLoading(true)

    new Promise((res, rej) => {
      setTimeout(() => {
        res(category ? productos.filter((producto)=>{
          
          return producto.category == category

        }) : productos)
      }, 2000)
    })
      .then(resultado => {
        setItems(resultado)
        setLoading(false)
      })
      .catch(() => {
        //setItems([])
      })

  }, [category])



  return (
    <>
      {loading ? <ProductLoader /> : <ItemList items={items} />}
    </>
  )
}

export default ItemListContainer