'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchPromedioPorCategoria } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Valor Promedio',
      data: [] as any[],
      borderColor: '#a78bfa',
      backgroundColor: 'rgba(196, 181, 253, 0.5)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '10. Valor Promedio por Categoría (categoryCode)' },
    },
  });

  useEffect(() => {
    fetchPromedioPorCategoria().then((data) => {
      const labels = data.map((item: any) => item.categoryCode);
      const promedio = data.map((item: any) => parseFloat(item.valor_promedio));
      setCharData({
        labels,
        datasets: [{
          label: 'Valor Promedio',
          data: promedio,
          borderColor: '#a78bfa',
          backgroundColor: 'rgba(196, 181, 253, 0.5)',
        }]
      });
    });
  }, []);

  return <Line data={charData} options={options} />;
}