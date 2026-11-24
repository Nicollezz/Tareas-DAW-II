'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchContarProductos } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: ['Total de Productos'],
    datasets: [{
      label: 'Cantidad de Productos',
      data: [] as any[],
      backgroundColor: 'rgba(134, 189, 152, 0.7)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '1. Contar Productos en la Tabla' },
    },
  });

  useEffect(() => {
    fetchContarProductos().then((data) => {
      const total = data.map((item: any) => parseInt(item.total_productos));
      setCharData({
        labels: ['Total de Productos'],
        datasets: [{
          label: 'Cantidad de Productos',
          data: total,
          backgroundColor: 'rgba(134, 189, 152, 0.7)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}