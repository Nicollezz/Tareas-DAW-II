'use client'
import React from 'react'
import { useContextProducto } from '@/app/Provider/ProviderProducto'

export default function Page() {
    
    const { producto, agregarCarrito } = useContextProducto();

    return (
        <div className='container my-4'>
            <h2>Catálogo de Productos</h2>
            <div className='row'>
                {
                    producto.map((prod) => (
                        <div className='col-md-4' key={prod.idProducto}>
                            <div className="card p-3 border rounded shadow-sm">
                                <h5>{prod.nombreProducto}</h5>
                                <p>Precio: L. {prod.precioProducto}</p>
                                <p>ISV: L. {prod.isvProducto}</p>
                                
                                
                                <button 
                                    className="btn btn-primary btn-sm mt-2"
                                    onClick={() => agregarCarrito(prod)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                            <br />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}