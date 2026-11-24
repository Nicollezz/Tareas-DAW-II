'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { fetchContarPorEstado } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Productos por Estado',
      data: [] as any[],
      backgroundColor: ['#86bd98', '#fca5a5', '#f6d58e', '#93c5fd'],
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '11. Contar Productos Disponibles en Cada Estado' },
    },
  });

  useEffect(() => {
    fetchContarPorEstado().then((data) => {
      const labels = data.map((item: any) => item.status);
      const cantidad = data.map((item: any) => parseInt(item.cantidad_total));
      setCharData({
        labels,
        datasets: [{
          label: 'Productos por Estado',
          data: cantidad,
          backgroundColor: ['#86bd98', '#fca5a5', '#f6d58e', '#93c5fd'],
        }]
      });
    });
  }, []);

  return <Doughnut data={charData} options={options} />;
}