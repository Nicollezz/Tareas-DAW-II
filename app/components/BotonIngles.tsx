'use client';
import React, { useContext } from 'react';
import { IdiomaContext } from '../context/IdiomaContext';

export default function BotonIngles() {
  const { cambiarAIngles } = useContext(IdiomaContext);

  return (
    <button onClick={cambiarAIngles} style={{ padding: '10px 16px', cursor: 'pointer' }}>
      Cambiar Idioma Ingles
    </button>
  );
}