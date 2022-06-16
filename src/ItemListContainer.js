import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { productos } from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
  
  //Habia Estados
  const [items, setItems] = useState([])
  const resultado = useParams()

  //console.log(resultado)

  /* if(?){
//pido todo
  }else{
    //pido por categoria
  } */

  //Habia Efectos
  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((respuesta) => {
        const p = respuesta.json()
        return p
      })
      .then((productos) => {
        setItems(productos)
      })
      .catch((error) => {
        console.log("Hubo un error")
      })


      
 /* const MockAsync = new Promise((res) => {
      setTimeout(() => {
        console.log("pidiendo Productos...")
        const productosDeDB = [{titulo:"Producto 1",categoria:"cat1"}, "Producto 2", "Producto 3"]
        res(productosDeDB)
      }, 2000)
    })

    MockAsync.then(productos => {
      setItems(productos)
    }) */
   

  }, [])

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer