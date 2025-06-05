import React from 'react';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import { ChartData } from '../types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ChartCardProps {
  title: string;
  chartData: ChartData;
  chartType: 'pie' | 'bar' | 'doughnut';
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chartData, chartType }) => {
  const renderChart = () => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right' as const,
          labels: {
            color: 'white',
            padding: 20
          }
        }
      }
    };

    switch (chartType) {
      case 'pie':
        return <Pie data={chartData} options={options} />;
      case 'bar':
        return <Bar data={chartData} options={options} />;
      case 'doughnut':
        return <Doughnut data={chartData} options={options} />;
      default:
        return <Pie data={chartData} options={options} />;
    }
  };

  return (
    <div className="bg-navy-light rounded-lg p-4 h-full">
      <h3 className="text-center text-lg font-medium mb-4">{title}</h3>
      <div className="h-64">{renderChart()}</div>
    </div>
  );
};

export default ChartCard;