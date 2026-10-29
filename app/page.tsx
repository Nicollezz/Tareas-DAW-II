'use client';

import React, { useState, useEffect } from 'react';
import { IdiomaContext } from './context/IdiomaContext';
import BotonEspanol from './components/BotonEspanol';
import BotonIngles from './components/BotonIngles';


import traduccionesData from './traducciones.json';

export default function App() {

  const [idiomaActual, setIdiomaActual] = useState<'es' | 'en'>('es');
  const [listaMostrada, setListaMostrada] = useState<string[]>([]);


  useEffect(() => {
    const nuevaLista = traduccionesData.map((item) => item[idiomaActual]);
    setListaMostrada(nuevaLista);
  }, [idiomaActual]);

  const cambiarAEspanol = () => setIdiomaActual('es');
  const cambiarAIngles = () => setIdiomaActual('en');

  return (

    <IdiomaContext.Provider value={{ listaMostrada, cambiarAEspanol, cambiarAIngles }}>
      <main style={{ padding: '30px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>
          Lista de Palabras ({idiomaActual === 'es' ? 'Español' : 'Inglés'})
        </h1>

      
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
          <BotonEspanol />
          <BotonIngles />
        </div>

   
        <ul>
          {listaMostrada.map((palabra, index) => (
            <li key={index} style={{ padding: '6px 0' }}>
              {index + 1}. {palabra}
            </li>
          ))}
        </ul>
      </main>
    </IdiomaContext.Provider>
  );
}