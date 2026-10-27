'use client';

import React from 'react';
import { Tarea, EstadoTarea } from '../modelos/tareas';

interface TablaTareasProps {
  tareas: Tarea[];
  onCambiarEstado: (id: number, nuevoEstado: EstadoTarea) => void;
  onEliminarTarea: (id: number) => void;
}

export default function TablaTareas({ tareas, onCambiarEstado, onEliminarTarea }: TablaTareasProps) {
  if (tareas.length === 0) {
    return (
      <div className="p-4 bg-yellow-100 border border-yellow-300 rounded text-center">
        <p className="text-sm font-bold text-yellow-800">Sin tareas</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-yellow-300 rounded bg-white">
      <table className="w-full border-collapse text-sm text-left">
        <thead>
          <tr className="bg-yellow-100 border-b border-yellow-300 font-bold">
            <th className="p-3 text-yellow-800 text-center">ID</th>
            <th className="p-3 text-yellow-800 text-center">Título</th>
            <th className="p-3 text-yellow-800 text-center">Descripción</th>
            <th className="p-3 text-yellow-800 text-center">Estado</th>
            <th className="p-3 text-yellow-800 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id} className="border-b border-yellow-200">
              <td className="p-3 text-black text-center">{tarea.id}</td>
              <td className="p-3 text-black text-center">{tarea.titulo}</td>
              <td className="p-3 text-black text-center">{tarea.descripcion}</td>
              <td className="p-3 text-center">
                <select
                  value={tarea.estado}
                  onChange={(e) => onCambiarEstado(tarea.id, e.target.value as EstadoTarea)}
                  className="p-1 bg-white border border-yellow-300 rounded text-sm text-black"
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Completada">Completada</option>
                </select>
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => onEliminarTarea(tarea.id)}
                  className="bg-yellow-300 px-3 py-1 rounded font-bold text-xs text-yellow-900"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}