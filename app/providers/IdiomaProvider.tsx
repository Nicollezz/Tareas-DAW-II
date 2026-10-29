'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { IdiomaContext } from '../context/IdiomaContext';


import listaDePalabras from '../traducciones.json';

interface IdiomaProviderProps {
  children: ReactNode;
}

export default function IdiomaProvider(props: IdiomaProviderProps) {
  const [idiomaActual, setIdiomaActual] = useState<'es' | 'en'>('es');
  const [listaMostrada, setListaMostrada] = useState<string[]>([]);


  useEffect(() => {
    const nuevaLista = listaDePalabras.map((item) => item[idiomaActual]);
    setListaMostrada(nuevaLista);
  }, [idiomaActual]);

  const cambiarAEspanol = () => setIdiomaActual('es');
  const cambiarAIngles = () => setIdiomaActual('en');

  return (
    <IdiomaContext.Provider
      value={{
        idiomaActual,
        listaMostrada,
        cambiarAEspanol,
        cambiarAIngles,
      }}
    >
      {props.children}
    </IdiomaContext.Provider>
  );
}

export const useIdioma = () => {
  return React.useContext(IdiomaContext);
};