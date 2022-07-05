import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { ProductLoader } from "./ProductLoader"
import { db } from "./firebase"
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {

    if (category) {
      const collectionProductos = collection(db, "productos")
      const filtroDeLaConsulta = query(collectionProductos, where("price", ">", 100), where("category", "==", "clothing"))
      const consulta = getDocs(filtroDeLaConsulta)

      consulta
        .then((resultado) => {
          const productos_mapeados = resultado.docs.map(referencia => {
            const aux = referencia.data()
            aux.id = referencia.id
            return aux
          })
          setItems(productos_mapeados)
          setLoading(false)

        })
        .catch((error) => {
          console.log(error)
        })
    } else {

      const collectionProductos = collection(db, "productos")
      const consulta = getDocs(collectionProductos)

      consulta
        .then((resultado) => {
          const productos_mapeados = resultado.docs.map(referencia => {
            const aux = referencia.data()
            aux.id = referencia.id
            return aux
          })
          setItems(productos_mapeados)
          setLoading(false)

        })
        .catch((error) => {
          console.log(error)
        })
    }


  }, [category])



  return (
    <>
      {/* {loading ? <p className="rojo">Texto 1</p> : <p className="azul">Texto 1</p>} */}
      {/* <p className={loading && "customClass"}>text 1</p> */}
      {/* <p className={`baseClass ${loading ? "customClass" : ""}`}>text 1</p> */}
      {loading ? <ProductLoader /> : <ItemList items={items} />}
      {/* {mensaje} */}
    </>
  )
}

export default ItemListContainer