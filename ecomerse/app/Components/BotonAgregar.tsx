'use client'
import React from 'react'
import { Producto } from '../modelos/Producto'
import { useContextProducto } from '../Provider/ProviderProducto'

interface BotonAgregarProps {
    producto: Producto; 
}

export default function BotonAgregar({ producto }: BotonAgregarProps) {
    
    const { agregarCarrito } = useContextProducto();

    return (
        <button 
            className="btn btn-primary btn-sm mt-2"
            onClick={() => agregarCarrito(producto)}
        >
            Agregar al carrito
        </button>
    )
}