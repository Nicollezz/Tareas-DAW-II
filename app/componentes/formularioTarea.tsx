'use client';

import React, { useState } from 'react';
import { Tarea } from '../modelos/tareas';

interface FormularioTareaProps {
  onAgregarTarea: (tarea: Omit<Tarea, 'id'>) => void;
}

export default function FormularioTarea({ onAgregarTarea }: FormularioTareaProps) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

   
    if (!titulo.trim() || !descripcion.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    onAgregarTarea({
      titulo,
      descripcion,
      estado: 'Pendiente',
    });

    setTitulo('');
    setDescripcion('');
  };

  return (
    <form onSubmit={manejarEnvio} className="p-4 bg-yellow-100 border border-yellow-300 rounded mb-4">
      <h2 className="text-lg font-bold mb-3 text-yellow-800">Crear Tarea</h2>

      <div className="mb-3">
        <label className="block text-sm font-bold mb-1 text-yellow-800">Título</label>
        <input 
          type="text" 
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 bg-white border border-yellow-300 rounded text-black"
          placeholder="Escribe el título..."
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-bold mb-1 text-yellow-800">Descripción</label>
        <textarea 
          value={descripcion} 
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full p-2 bg-white border border-yellow-300 rounded text-black"
          placeholder="Escribe la descripción..."
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-yellow-400 p-2 rounded font-bold text-yellow-900"
      >
        Agregar
      </button>
    </form>
  );
}