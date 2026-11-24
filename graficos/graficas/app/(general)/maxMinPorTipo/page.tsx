'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { fetchMaxMinPorTipo } from '@/app/Servicios/api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {
  const [charData, setCharData] = useState({
    labels: [] as string[],
    datasets: [
      { label: 'Valor Máximo', data: [] as any[], backgroundColor: 'rgba(134, 189, 152, 0.7)' },
      { label: 'Valor Mínimo', data: [] as any[], backgroundColor: 'rgba(253, 186, 116, 0.7)' },
    ]
  });

  const [options] = useState({
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '9. Valor Máximo y Mínimo por Tipo de Producto' },
    },
  });

  useEffect(() => {
    fetchMaxMinPorTipo().then((data) => {
      const labels = data.map((item: any) => item.productType);
      const maximos = data.map((item: any) => parseFloat(item.valor_maximo));
      const minimos = data.map((item: any) => parseFloat(item.valor_minimo));
      setCharData({
        labels,
        datasets: [
          { label: 'Valor Máximo', data: maximos, backgroundColor: 'rgba(134, 189, 152, 0.7)' },
          { label: 'Valor Mínimo', data: minimos, backgroundColor: 'rgba(253, 186, 116, 0.7)' },
        ]
      });
    });
  }, []);

  return <Bar data={charData} options={options} />;
}