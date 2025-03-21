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
  const labels = ["Q1", "Q2", "Q3"];
  const dataset1 = labels.map(() => Math.floor(Math.random() * 100));
  const dataset2 = labels.map(() => Math.floor(Math.random() * 100));

  const data = {
    labels,
    datasets: [
      {
        label: "Mercedes",
        data: dataset1,
        backgroundColor: "#00AADD77",
        borderColor: '#00BBFF',
        borderRadius: "24",
        borderWidth: "4",
      },
      {
        label: "MClaren",
        data: dataset2,
        backgroundColor: "#2266FF77",
        borderColor: '#0066FF',
        borderRadius: "24",
        borderWidth: "4",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Qualifier Points",
      },
      y: {
        label: "Time in Secconds"
      }
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;