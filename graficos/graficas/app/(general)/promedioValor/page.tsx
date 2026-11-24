'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchPromedioValor } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: ['Valor Promedio'],
    datasets: [{
      label: 'Promedio ($)',
      data: [] as any[],
      backgroundColor: 'rgba(246, 213, 142, 0.8)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '3. Valor Promedio de los Productos' },
    },
  });

  useEffect(() => {
    fetchPromedioValor().then((data) => {
      const promedio = data.map((item: any) => parseFloat(item.valor_promedio));
      setCharData({
        labels: ['Valor Promedio'],
        datasets: [{
          label: 'Promedio ($)',
          data: promedio,
          backgroundColor: 'rgba(246, 213, 142, 0.8)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}