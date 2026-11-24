'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { fetchContarPorMoneda } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Cantidad de Productos',
      data: [] as any[],
      backgroundColor: ['#86bd98', '#f6d58e', '#93c5fd', '#fdba74'],
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '6. Cantidad de Productos por Tipo de Moneda' },
    },
  });

  useEffect(() => {
    fetchContarPorMoneda().then((data) => {
      const labels = data.map((item: any) => item.valueCurrency);
      const cantidad = data.map((item: any) => parseInt(item.cantidad_total));
      setCharData({
        labels,
        datasets: [{
          label: 'Cantidad de Productos',
          data: cantidad,
          backgroundColor: ['#86bd98', '#f6d58e', '#93c5fd', '#fdba74'],
        }]
      });
    });
  }, []);

  return <Pie data={charData} options={options} />;
}