import React from 'react'
import { Producto } from '../modelos/Producto'
import { useContextProducto } from '../Provider/ProviderProducto'

export default function CardProducto(producto: Producto) {

    const { agregarCarrito } = useContextProducto()
    return (
        <div className='card'>
            <div className='card-header'>{producto.nombreProducto}</div>
            <div className='card-body'>
                <p>Precio Producto - Lps {producto.precioProducto}</p>
                <p>Isv Producto - Lps {producto.isvProducto}</p>
                <img src={producto.imgProducto} />

            </div>
            <div className='card-footer'>
                <button className='btn btn-info btn-sm' onClick={() => agregarCarrito(producto)}>Agregar al Carrito</button>
                <button className='btn btn-danger btn-sm' >Eliminar</button>
            </div>
        </div>
    )
}
