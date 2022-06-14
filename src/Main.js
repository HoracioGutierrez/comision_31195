import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"

/* 

/   = Home
/categoria/jewelery = Jewelery
/categoria/electronics = Electronics
/categoria/clothing = Clothing

rutas = ["jewelery", "electronics", "clothing"]

*/

const Main = () => {

  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:category" element={<ItemListContainer />} />
        {/* <Route>
        <Route>
        <Route>
        <Route> */}
      </Routes>
    </main>
  )
}

export default Main