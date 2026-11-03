'use client'
import React from 'react'
import { useContextProducto } from '../Provider/ProviderProducto'

interface BotonEliminarProps {
    idProducto: number; 
}

export default function BotonEliminar({ idProducto }: BotonEliminarProps) {
    
    const { eliminarCarrito } = useContextProducto();

    return (
        <button 
            className="btn btn-danger btn-sm mt-2"
            onClick={() => eliminarCarrito(idProducto)}
        >
            Eliminar del carrito
        </button>
    )
}