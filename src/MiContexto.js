import { createContext, useState } from "react"

export const contexto = createContext()

const Provider = contexto.Provider
//Provider : Es un componente que viene adentro de un contexto y sirve para : 1) Determina quienes tienen acceso a la informacion y 2) Determina el valor del contexto

export const MiProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const agregarProducto = (producto) => {
        //setCarrito()
    }

    const eliminarProducto = (producto) => {
        //setCarrito()
    }
    
    const actualizarCantidad = (producto, cantidad) => {
        //setCarrito()
    }

    const vaciarCarrito = () => {}

    const valorDelContexto = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        //setCarrito : setCarrito,
        agregarProducto : agregarProducto,
    }


    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


