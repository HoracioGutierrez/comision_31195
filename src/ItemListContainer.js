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
  //const [loadingText,setLoadingText] = useState("Cargando...")
  //const loadingText = useRef("Cargando catálogo...");


  //let mensaje = "Mensaje 1"

  useEffect(() => {

    setTimeout(()=>{
      setLoading(false)
    },3000)

    if (category) {
      //mensaje = "Cambio 1"
      //setLoadingText("Cambio 1")
      //loadingText.current = "Cargando catálogo...";
      setItems("")
    } else {
      //mensaje = "Cambio 2"
    }

    /* setLoading(true)

    new Promise((res, rej) => {
      setTimeout(() => {
        res(category ? productos.filter((producto) => {
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
      }) */

  }, [category])



  return (
    <>
      {/* {loading ? <p className="rojo">Texto 1</p> : <p className="azul">Texto 1</p>} */}
      {/* <p className={loading && "customClass"}>text 1</p> */}
      {/* <p className={`baseClass ${loading ? "customClass" : ""}`}>text 1</p> */}
      {/* {loading ? <ProductLoader /> : <ItemList items={items} />} */}
      {/* {mensaje} */}
    </>
  )
}

export default ItemListContainer