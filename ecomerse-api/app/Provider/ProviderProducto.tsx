import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContexrProducto } from '../Context/ContextProducto';

export default function ProviderProducto({ children }: Plantilla) {

    const [producto, setProducto] = useState<Producto[]>([]);

    const [carritoProducto, setCarritoProducto] = useState<Producto[]>([]);

    function agregarCarrito(producto: Producto) {
        alert('Producto Agregado al carrito')
        setCarritoProducto([...carritoProducto, producto])
    }

    async function consultarProducto() {
        try {

            const res = await fetch('http://localhost:5000/producto')
            const data = await res.json()

            setProducto(data)
            // alert()

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }
    }

    async function agregarProducto(producto: Producto) {

        console.log(producto)

        try {

            const res = await fetch('http://localhost:5000/producto', {
                method: 'POST',
                body: JSON.stringify(producto),
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto creado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }

    async function editarProducto(producto: Producto) {

        console.log(producto)


        try {

            const res = await fetch('http://localhost:5000/producto/' + producto.idProducto, {
                method: 'PUT',
                body: JSON.stringify(producto),
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto Actualizado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }


    async function eliminarProducto(id: number) {

        console.log(producto)

        try {

            const res = await fetch('http://localhost:5000/producto/' + id, {
                method: 'DELETE',
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto Eliminado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }




    return (
        <ContexrProducto.Provider value={{ producto, carritoProducto, agregarCarrito, consultarProducto, agregarProducto, eliminarProducto, editarProducto }}>
            {children}
        </ContexrProducto.Provider>
    )
}

export function useContextProducto() {
    return useContext(ContexrProducto)
}
