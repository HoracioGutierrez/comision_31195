import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Carrito from "./Carrito"
import Checkout from "./Checkout"
import { Routes, Route } from "react-router-dom"


const Main = () => {

  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </main>
  )
}

export default Main