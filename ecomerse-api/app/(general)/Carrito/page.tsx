'use client';
import { useEffect } from 'react';
import CardProducto from '@/app/Components/CardProducto';
import { Producto } from '@/app/modelos/Producto';
import { useContextProducto } from '@/app/Provider/ProviderProducto';

export default function CarritoPage() {
    const { carritoProducto } = useContextProducto();

    
    const totalPagar = carritoProducto.reduce((acumulado: number, producto: Producto) => {
        const precio = Number(producto.precioProducto) || 0;
        const isv = Number(producto.isvProducto) || 0;
        return acumulado + precio + isv;
    }, 0);

    return (
        <div className='container mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-6'> Carrito de Compras</h1>

            <div className='row grid grid-cols-1 md:grid-cols-3 gap-4'>
                {carritoProducto.length === 0 ? (
                    <p className='text-gray-500 col-span-3'>El carrito está vacío.</p>
                ) : (
                    carritoProducto.map((producto: Producto, index: number) => (
                        <div className='col-md-4' key={`${producto.idProducto || index}-${index}`}>
                            <CardProducto {...producto} />
                            
                            <br />
                        </div>
                    ))
                )}
            </div>


            {carritoProducto.length > 0 && (
                <div className='mt-8 bg-gray-50 p-4 rounded-lg shadow flex justify-between items-center'>
                    <div>
                        <span className='text-lg font-bold'>Total a Pagar (con ISV):</span>
                        <span className='text-xl font-extrabold text-green-600 ml-3'>
                            ${totalPagar.toFixed(2)}
                        </span>
                    </div>
                    <button 
                        onClick={() => alert(`¡Pago realizado por un total de $${totalPagar.toFixed(2)}!`)}
                        className='bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700'
                    >
                        Pagar
                    </button>
                </div>
            )}
        </div>
    );
}