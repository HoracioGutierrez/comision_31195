import { createContext, useState } from "react"

export const contexto = createContext()

const Provider = contexto.Provider

export const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const agregarProducto = (producto,cantidad) => {
        const copia = [...carrito]
        
        const nuevo_producto = {
            ...producto,
            cantidad : cantidad
        }

        copia.push(nuevo_producto)
        setCarrito(copia)
        setCantidadTotal(cantidad_total+cantidad)
        setPrecioTotal(precio_total+cantidad*producto.precio)
    }

    const eliminarProducto = (producto) => {

    }
    
    const actualizarCantidad = (producto, cantidad) => {

    }

    const vaciarCarrito = () => {}

    const valorDelContexto = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        agregarProducto : agregarProducto,
    }


    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


