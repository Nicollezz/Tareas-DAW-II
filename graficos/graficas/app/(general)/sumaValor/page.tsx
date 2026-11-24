'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchSumaValor } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: ['Valor Total'],
    datasets: [{
      label: 'Suma Total ($)',
      data: [] as any[],
      backgroundColor: 'rgba(147, 197, 253, 0.7)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '2. Valor Total de Todos los Productos' },
    },
  });

  useEffect(() => {
    fetchSumaValor().then((data) => {
      const total = data.map((item: any) => parseFloat(item.valor_total));
      setCharData({
        labels: ['Valor Total'],
        datasets: [{
          label: 'Suma Total ($)',
          data: total,
          backgroundColor: 'rgba(147, 197, 253, 0.7)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}