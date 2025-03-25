import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ dataset1, dataset2, dataLength }) => {
  let labels = [];

  for (let index = 0; index < dataLength; index++) {
    labels.push("Round " + (index + 1));
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Team A",
        data: dataset1,
        backgroundColor: "#A10702EE",
        borderColor: 'red',
        borderRadius: "24",
        borderWidth: "4",
      },
      {
        label: "Team B",
        data: dataset2,
        backgroundColor: "#DC6D04AA",
        borderColor: 'orange',
        borderRadius: "24",
        borderWidth: "4",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Comparison of Points between Mclaren and Mercedes",
      },
    },
  };

  return <Bar data={data} options={options} style={{height: "400px"}} />;
};

export default BarChart;