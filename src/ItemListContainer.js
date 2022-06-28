import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { productos } from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { ProductLoader } from "./ProductLoader"
import { db } from "./firebase"
import { getDocs, collection } from "firebase/firestore"
//getDocs : Sirve para traer muchos documentos en una coleccion
//getDoc : Sirve para traer un solo documento en base a su ID
//doc : Referencia a un documento de coleccion
//query
//where 
//collection

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {

    //1) Necesito referencia de la coleccion
    const collectionProductos = collection(db, "productos")
    //2) Hago la consulta
    const consulta = getDocs(collectionProductos)

    consulta
      .then((resultado)=>{
        //la consulta de firebase retorna un objeto que adentro tiene un array (docs) el cual tiene una representacion de los productos(documentos dentro de la colecion)
        //console.log(resultado.docs)
        
        const productos_mapeados = resultado.docs.map(referencia=>{
          //console.log(referencia.id)
          //console.log(referencia.data())//seria como el response.json()
          const aux = referencia.data()
          aux.id = referencia.id
          return aux
        })

        setItems(productos_mapeados)
        setLoading(false)

      })
      .catch((error)=>{
        console.log(error)
      })

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