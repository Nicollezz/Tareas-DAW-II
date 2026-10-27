'use client';

import React, { useState } from 'react';
import { Tarea, EstadoTarea } from './modelos/tareas';
import FormularioTarea from './componentes/formularioTarea'; 
import TablaTareas from './componentes/tablaTareas';  

export default function PaginaTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);


  const manejarAgregarTarea = (nuevaTareaData: Omit<Tarea, 'id'>) => {
    const nuevoId = tareas.length > 0 ? Math.max(...tareas.map((t) => t.id)) + 1 : 1;
    
    const nuevaTarea: Tarea = {
      id: nuevoId,
      ...nuevaTareaData,
    };

    setTareas([...tareas, nuevaTarea]);
  };


  const manejarCambiarEstado = (id: number, nuevoEstado: EstadoTarea) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, estado: nuevoEstado } : tarea
      )
    );
  };

  
  const manejarEliminarTarea = (id: number) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
     

    
      <FormularioTarea onAgregarTarea={manejarAgregarTarea} />

      
      <TablaTareas
        tareas={tareas}
        onCambiarEstado={manejarCambiarEstado}
        onEliminarTarea={manejarEliminarTarea}
      />
    </main>
  );
}