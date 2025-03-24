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

const BarChart = () => {
  const labels = ["Round 1", "Round 2", "Round 3", "Round 4", "Round 5", "Round 6"];
  const dataset1 = labels.map(() => Math.floor(Math.random() * 100));
  const dataset2 = labels.map(() => Math.floor(Math.random() * 100));

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

  return <Bar data={data} options={options} />;
};

export default BarChart;