'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchMaximoPorPlanificador } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [{
      label: 'Valor Máximo',
      data: [] as any[],
      borderColor: '#86bd98',
      backgroundColor: 'rgba(134, 189, 152, 0.4)',
    }]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '15. Valor Más Alto por plannerCode' },
    },
  });

  useEffect(() => {
    fetchMaximoPorPlanificador().then((data) => {
      const labels = data.map((item: any) => item.plannerCode);
      const maximo = data.map((item: any) => parseFloat(item.valor_maximo));
      setCharData({
        labels,
        datasets: [{
          label: 'Valor Máximo',
          data: maximo,
          borderColor: '#86bd98',
          backgroundColor: 'rgba(134, 189, 152, 0.4)',
        }]
      });
    });
  }, []);

  return <Line data={charData} options={options} />;
}