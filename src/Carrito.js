import { useReducer } from "react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./MiContexto"

const Carrito = () => {

  const {carrito} = useContext(contexto)
  /* const [usuario,setUsuario] = useState({
    nombre : "h",
    tel : "",
    email :""
  }) */
  const [nombre,setNombre] = useState("")
  const [tel,setTel] = useState("")
  const [email,setEmail] = useState("")

  //useReducer()

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.dir(e.target)
    //console.log(e.target.elements.nombre.value)
    /* const nombre = e.target.elements.nombre.value
    const tel = e.target.elements.telefono.value
    const email = e.target.elements.email.value */

    const usuario = { nombre , tel , email}
    console.log(usuario)
  }

  const handleClick = (e) => {
    e.preventDefault()
    //e.target.value
  }

  const handleNombreChange = (e) => {
    setNombre(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleTelChange = (e) => {
    setTel(e.target.value)
  }
  
  return (
    <div>
      <h1>Carrito</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit sint minima cum minus? Numquam deleniti facilis, officiis perferendis quis sed voluptas nisi ipsa, magni, temporibus odio a commodi maiores!</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleNombreChange} type="text" id="nombre" placeholder="Nombre..." value={usuario.nombre}/>
        </div>
        <div>
          <input onChange={handleEmailChange} type="email" id="email" placeholder="Email..." value={usuario.email}/>
        </div>
        <div>
          <input onChange={handleTelChange} type="number" id="telefono" placeholder="Telefono..."/>
        </div>
        <button /* onClick={handleClick} */>comprar</button>
      </form>

      <Link to="/checkout">Proceder con la compra</Link>
    </div>
  )
}
export default Carrito