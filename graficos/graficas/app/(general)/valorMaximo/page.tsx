'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchValorMaximo } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: ['Valor Máximo'],
    datasets: [{
      label: 'Máximo ($)',
      data: [] as any[],
      backgroundColor: 'rgba(134, 189, 152, 0.7)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '4. Producto con el Valor Más Alto' },
    },
  });

  useEffect(() => {
    fetchValorMaximo().then((data) => {
      const maximo = data.map((item: any) => parseFloat(item.valor_maximo));
      setCharData({
        labels: ['Valor Máximo'],
        datasets: [{
          label: 'Máximo ($)',
          data: maximo,
          backgroundColor: 'rgba(134, 189, 152, 0.7)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}