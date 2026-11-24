'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchSumaPorMarca } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Valor Total por Marca',
      data: [] as any[],
      backgroundColor: 'rgba(246, 213, 142, 0.8)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '12. Valor Total de Productos por Marca (brandCode)' },
    },
  });

  useEffect(() => {
    fetchSumaPorMarca().then((data) => {
      const labels = data.map((item: any) => item.brandCode);
      const total = data.map((item: any) => parseFloat(item.valor_total));
      setCharData({
        labels,
        datasets: [{
          label: 'Valor Total por Marca',
          data: total,
          backgroundColor: 'rgba(246, 213, 142, 0.8)',
        }]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}