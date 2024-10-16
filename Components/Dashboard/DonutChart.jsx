"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";


Chart.register(ArcElement, Tooltip, Legend); 

const DonutChart = () => {
  const data = {
    labels: [
      "Birth", 
      "Marriage", 
      "Divorce", 
      "Death", 
      "Adoption", 
      "Determination of paternity", 
      "Child Acceptance"
    ],
    datasets: [
      {
        label: "Total Transactions",
        data: [32.5, 25, 43, 4, 8, 12, 45],
        backgroundColor: [
          "#6F018D", 
          "#5F5C00", 
          "#C64700", 
          "#D4AD6C", 
          "#005650", 
          "#95ADCF", 
          "#4E4351"
        ],
        datalabels: {
          color: "#fff", 
          font: {
            size: 14,
          },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
