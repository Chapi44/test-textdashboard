import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [10000, 20000, 30000, 40000, 50000, 20000, 30000, 40000, 50000, 60000, 40000, 50000],
        backgroundColor: "#6F018D",
        borderRadius:100,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false, 
        },
    },
    scales: {
        x: {
          grid: {
            display: false, 
          },
        },
        y: {
          grid: {
            display: true, 
          },
          beginAtZero: true,
        },
      },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
