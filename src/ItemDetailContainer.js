import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { productos } from "./productos"
import { SkeletonCard } from "./ProductLoader"
import { db } from "./firebase"
import { collection , getDoc , doc } from "firebase/firestore"


const ItemDetailContainer = () => {


  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    setLoading(true)

    const collectionProductos = collection(db, "productos")
    const refeDelDoc = doc(collectionProductos,"kecWwFEGf9cK6CYh9XZ4")
    const consulta = getDoc(refeDelDoc)

    consulta
      .then(resultado=>{
        //console.log(resultado.id)
        //console.log(resultado.data())
        const producto = resultado.data()
        //console.log(producto)
        setItem(producto)
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
      })

  }, [])


  return (
    <>
      {loading ? <SkeletonCard /> : <ItemDetail item={item} />}
    </>
  )
}
export default ItemDetailContainer
