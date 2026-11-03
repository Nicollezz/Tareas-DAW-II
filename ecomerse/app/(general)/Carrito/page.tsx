'use client'
import React from 'react'
import { useContextProducto } from '@/app/Provider/ProviderProducto'

export default function Page() {

    const { carritoProducto, eliminarCarrito } = useContextProducto();

    return (
        <div className='container my-4'>
            <h2>Mi Carrito de Compras</h2>
            <div className='row'>
                {
                    carritoProducto.length === 0 ? (
                        <p>El carrito está vacío.</p>
                    ) : (
                        carritoProducto.map((prod, index) => (
                            <div className='col-md-4' key={`${prod.idProducto}-${index}`}>
                                <div className="card p-3 border rounded shadow-sm">
                                    <h5>{prod.nombreProducto}</h5>
                                    <p>Precio: L. {prod.precioProducto}</p>
                                    <p>ISV: L. {prod.isvProducto}</p>
                                    
                                    
                                    <button 
                                        className="btn btn-danger btn-sm mt-2"
                                        onClick={() => eliminarCarrito(prod.idProducto)}
                                    >
                                        Eliminar del carrito
                                    </button>
                                </div>
                                <br />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}