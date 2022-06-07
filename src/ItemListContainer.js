import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"


const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])

  useEffect(()=>{
    
    const MockAsync = new Promise((res)=>{
      setTimeout(()=>{
        console.log("pidiendo Productos...")
        const productosDeDB = ["Producto 1", "Producto 2", "Producto 3"]
        res(productosDeDB)
      },2000)
    })

    MockAsync.then(productos => {
      setItems(productos)
    })

  },[])

  const onAdd = () => {  }

  if(items.length > 0 ){
    return (
      <div>
        <h2>{greeting}</h2>
        <ItemCount stock={5} onAdd={onAdd} initial={0} />
      </div>
    )
  }else{
    return (
      <div>
        <h2>{greeting}</h2>
        <p>Cargando...</p>
      </div>
    )
  }
}

export default ItemListContainer