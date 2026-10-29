'use client';
import React, { useContext } from 'react';
import { IdiomaContext } from '../context/IdiomaContext';

export default function BotonEspanol() {
  const { cambiarAEspanol } = useContext(IdiomaContext);

  return (
    <button onClick={cambiarAEspanol} style={{ padding: '10px 16px', cursor: 'pointer' }}>
      Cambiar Idioma Español
    </button>
  );
}