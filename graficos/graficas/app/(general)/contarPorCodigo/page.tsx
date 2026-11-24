'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchContarPorCodigo } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Cantidad por Código (partNumber)',
      data: [] as any[],
      backgroundColor: 'rgba(252, 165, 165, 0.7)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '13. Conteo por Código de Producto (partNumber)' },
    },
  });

  useEffect(() => {
    fetchContarPorCodigo().then((data) => {
      const labels = data.map((item: any) => item.partNumber);
      const cantidad = data.map((item: any) => parseInt(item.cantidad_total));
      setCharData({
        labels,
        datasets: [{
          label: 'Cantidad por Código (partNumber)',
          data: cantidad,
          backgroundColor: 'rgba(252, 165, 165, 0.7)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}