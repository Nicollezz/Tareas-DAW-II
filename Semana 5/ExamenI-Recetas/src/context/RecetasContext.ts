import { createContext } from 'react';
import { Receta } from '../models/Receta';

export const RecetasContext = createContext({
    recetas: [] as Receta[],
    seleccionada: undefined as Receta | undefined,
    agregarReceta: (receta: Receta) => { },
    eliminarReceta: (numero: number) => { },
    buscarReceta: (numero: string) => { },
    cerrarDetalle: () => { },
});
