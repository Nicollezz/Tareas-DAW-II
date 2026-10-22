'use client'

import React, { useState } from 'react'
import { ListaConversiones } from './componentes/ListaConversiones'

export default function App() {
  const [celsius, setCelsius] = useState<number>(32)

  const fahrenheit = (celsius * 9) / 5 + 32
  const kelvin = celsius + 273.15

  const conversiones = [
    { unidad: 'Celsius (°C)', valor: celsius },
    { unidad: 'Fahrenheit (°F)', valor: fahrenheit },
    { unidad: 'Kelvin (K)', valor: kelvin },
  ]

  return (
    <div>
      <h1>Conversor de Temperatura</h1>

      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(Number(e.target.value))}
      />
    
      <ListaConversiones conversiones={conversiones} />

    </div>
  )
}