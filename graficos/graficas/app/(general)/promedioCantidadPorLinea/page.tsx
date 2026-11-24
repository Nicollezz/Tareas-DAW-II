'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchPromedioCantidadPorLinea } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [
      { label: 'Valor Promedio', data: [] as any[], backgroundColor: 'rgba(147, 197, 253, 0.7)' },
      { label: 'Cantidad de Productos', data: [] as any[], backgroundColor: 'rgba(134, 189, 152, 0.7)' },
    ]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '14. Valor Promedio y Cantidad por Línea (lineCode)' },
    },
  });

  useEffect(() => {
    fetchPromedioCantidadPorLinea().then((data) => {
      const labels = data.map((item: any) => item.lineCode);
      const promedio = data.map((item: any) => parseFloat(item.valor_promedio));
      const cantidad = data.map((item: any) => parseInt(item.cantidad_total));
      setCharData({
        labels,
        datasets: [
          { label: 'Valor Promedio', data: promedio, backgroundColor: 'rgba(147, 197, 253, 0.7)' },
          { label: 'Cantidad de Productos', data: cantidad, backgroundColor: 'rgba(134, 189, 152, 0.7)' },
        ]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}