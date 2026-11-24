'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchPromedioPorMoneda } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Valor Promedio',
      data: [] as any[],
      backgroundColor: 'rgba(134, 189, 152, 0.7)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '7. Valor Promedio por Tipo de Moneda' },
    },
  });

  useEffect(() => {
    fetchPromedioPorMoneda().then((data) => {
      const labels = data.map((item: any) => item.valueCurrency);
      const promedio = data.map((item: any) => parseFloat(item.valor_promedio));
      setCharData({
        labels,
        datasets: [{
          label: 'Valor Promedio',
          data: promedio,
          backgroundColor: 'rgba(134, 189, 152, 0.7)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}