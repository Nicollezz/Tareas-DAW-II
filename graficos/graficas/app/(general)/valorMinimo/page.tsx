'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchValorMinimo } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: ['Valor Mínimo'],
    datasets: [{
      label: 'Mínimo ($)',
      data: [] as any[],
      backgroundColor: 'rgba(253, 186, 116, 0.7)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '5. Producto con el Valor Más Bajo' },
    },
  });

  useEffect(() => {
    fetchValorMinimo().then((data) => {
      const minimo = data.map((item: any) => parseFloat(item.valor_minimo));
      setCharData({
        labels: ['Valor Mínimo'],
        datasets: [{
          label: 'Mínimo ($)',
          data: minimo,
          backgroundColor: 'rgba(253, 186, 116, 0.7)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}