// PieChart.tsx

import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';


interface PieChartProps {
  trueCount: number;
  falseCount: number;
}

const PieChart: React.FC<PieChartProps> = ({ trueCount, falseCount }) => {
  const data = {
    labels: ['Long', 'Short'],
    datasets: [
      {
        data: [trueCount, falseCount],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Set to false to allow defining the width and height
    responsive: true,
  };

  return <Doughnut data={data} options={options} width={200} height={200} />;
};

export default PieChart;
