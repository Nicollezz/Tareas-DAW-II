import React, { useContext, useState } from 'react'
import { Receta } from '../models/Receta';
import { Plantilla } from '../models/Plantilla';
import { RecetasContext } from '../context/RecetasContext';

export default function RecetasProvider({ children }: Plantilla) {

    const [recetas, setRecetas] = useState<Receta[]>([]);
    const [seleccionada, setSeleccionada] = useState<Receta>();

    function agregarReceta(receta: Receta) {
        setRecetas([...recetas, receta]);
    }

    function eliminarReceta(numero: number) {
        const quedan = recetas.filter((receta) => receta.numero !== numero);

        const renumeradas = quedan.map((receta, indice) => {
            return {
                numero: indice + 1,
                nombre: receta.nombre,
                ingredientes: receta.ingredientes,
                fecha: receta.fecha,
            }
        });

        setRecetas(renumeradas);
        setSeleccionada(undefined);
    }

    function buscarReceta(numero: string) {
        const encontrada = recetas.find((receta) => receta.numero === Number(numero));
        setSeleccionada(encontrada);
    }

    function cerrarDetalle() {
        setSeleccionada(undefined);
    }

    return (
        <RecetasContext.Provider value={{ recetas, seleccionada, agregarReceta, eliminarReceta, buscarReceta, cerrarDetalle }}>
            {children}
        </RecetasContext.Provider>
    )
}

export const useContextRecetas = () => {
    return useContext(RecetasContext);
}
