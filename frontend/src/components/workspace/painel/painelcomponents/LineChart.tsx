import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { DataLocalStorage } from '@/functions/localstorege/DataLocalStorage';

interface LineChartProps {
  month: string;
}

export const LineChart = ({ month }: LineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const DataLocal = DataLocalStorage();
  const labelsMonth: string[] = [];

  if (DataLocal) {
    DataLocal.forEach((e) => {
      const month = e.referenceMonth.month;
      labelsMonth.push(month);
    });
  }

  useEffect(() => {

    let pointEdit = labelsMonth.map((label) => (label.includes(month) ? 10 : 5));
    
    if (chartInstanceRef.current) {
      // Destruir a instância anterior do gráfico antes de recriá-la
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labelsMonth,
            datasets: [
              {
                label: 'Faturas',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                pointRadius: pointEdit,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [month]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
