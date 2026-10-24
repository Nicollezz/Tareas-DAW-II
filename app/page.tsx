'use client'

import { useState, useEffect } from 'react'
import TarjetaPersona from './componentes/tarjetapersona'
import { Persona } from './modelos/persona'

export default function Home() {
  const [personas, setPersonas] = useState<Persona[]>([])

  useEffect(() => {
    const datosIniciales: Persona[] = [
      { id: 1, nombre: 'Emerson Orellana', ocupacion: 'Contador', pais: 'Honduras' },
      { id: 2, nombre: 'Angel Bonilla', ocupacion: 'Estudiante', pais: 'Honduras' },
      { id: 3, nombre: 'Ana Mejía', ocupacion: 'Pedagoga', pais: 'Honduras' },
      { id: 4, nombre: 'Olvin Guevara', ocupacion: 'Contador', pais: 'Honduras' },
      { id: 5, nombre: 'Andrea Guevara', ocupacion: 'Estudiante', pais: 'Honduras' }
    ]

    setPersonas(datosIniciales)
  }, [])

  return (
    <main style={{ 
      padding: '40px 20px', 
      backgroundColor: '#90EE90', 
      minHeight: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#006400', 
          marginBottom: '20px' 
        }}>
          Tarjeta de Presentación
        </h1>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px' 
        }}>
          {personas.map((p) => (
            <TarjetaPersona key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}