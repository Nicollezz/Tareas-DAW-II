import React from 'react'
import { Persona } from '../modelos/persona'

export default function TarjetaPersona(props: Persona) {
  return (
    <div style={{
      border: '1px solid #6F4E37',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '250px',
      backgroundColor: '#006400',
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#f8fafc' }}>{props.nombre}</h3>
      <p style={{ margin: '4px 0', color: '#f8fafc' }}><strong>Ocupación:</strong> {props.ocupacion}</p>
      <p style={{ margin: '4px 0', color: '#f8fafc' }}><strong>País:</strong> {props.pais}</p>
    </div>
  )
}