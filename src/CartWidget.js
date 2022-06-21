import React, { useContext } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from './MiContexto'

const CartWidget = () => {

    //useState()
    const resultado = useContext(contexto)
    console.log(resultado)

    //resultado.agregarProducto()
    /* setTimeout(()=>{
        resultado.setCarrito(["Producto 1", "Producto 2"])
    },5000) */

    return (
        <NavLink to="/carrito">carrito {resultado.cantidad_total}</NavLink>
    )
}

export default CartWidget