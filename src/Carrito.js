import { useReducer } from "react"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./MiContexto"

const Carrito = () => {

  const { carrito } = useContext(contexto)
  const [nombre, setNombre] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    //const usuario = { nombre, tel, email }
    //console.log(usuario)
  }

  const handleClick = (e) => {
    e.preventDefault()
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

  const handleChange = (e) => {
    //usuario.nombre
    //usuario.e.target.id
    //usuario{e.target.id}
    //console.dir(e.target.id)
    //usuario.nombre = ??
    /*  const nombre = e.target.id
     usuario.nombre */
    //Object.assing()
    /* const copia = { ...usuario }
    copia[e.target.id] = e.target.value
    setUsuario(copia) */
    setUsuario({ ...usuario, [e.target.id] : e.target.value})
    //{telefono:"",email:"", nombre : "horacio" }
  }

  return (
    <div>
      <h1>Carrito</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit sint minima cum minus? Numquam deleniti facilis, officiis perferendis quis sed voluptas nisi ipsa, magni, temporibus odio a commodi maiores!</p>

      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" id="nombre" placeholder="Nombre..." value={nombre} />
        </div>
        <div>
          <input onChange={handleChange} type="email" id="email" placeholder="Email..." value={email} />
        </div>
        <div>
          <input onChange={handleChange} type="number" id="telefono" placeholder="Telefono..." />
        </div>
        <button /* onClick={handleClick} */>comprar</button>
      </form>

      <Link to="/checkout">Proceder con la compra</Link>
    </div>
  )
}
export default Carrito