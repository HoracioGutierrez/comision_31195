import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
//import { useEffect } from "react"

const App = () => {

  //useEffect : Nos permite ejecutar una funcion despues de cada renderizacion
  //useEffect(function [,array])
  /* useEffect(()=>{
    console.log("Hola")
  }) */
  
  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  )
}

export default App