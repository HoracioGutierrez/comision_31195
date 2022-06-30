import { db } from "./firebase"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { useState } from "react"


const Checkout = () => {

  const [idCompra,setIdCompra] = useState("")

  const handleBuy = () => {
    
    const collectionOrdenes = collection(db,"ordenes")

    const orderData = {
      buyer : {
        name : "Horacio",
        phone : "555555555",
        email : "test@tes.com"
      },
      items : [{id:1,titulo:"test producto"}],
      date : serverTimestamp(),
      total : 100
    }

    const consulta = addDoc(collectionOrdenes,orderData)

    consulta
      .then(resultado=>{
        setIdCompra(resultado.id)
      })
      .catch(error=>{
        console.log(error)
      })


  }

  return (
    <>
    <div>Checkout</div>
    {idCompra&&<p>Su compra es : {idCompra}</p>}
    <button onClick={handleBuy}>guardar</button>
    </>
  )
}
export default Checkout
