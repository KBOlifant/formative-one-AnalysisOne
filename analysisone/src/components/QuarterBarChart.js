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
  scales,
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
    scales: {
      y: {
        grid: {
          color: 'white', 
        },
      },
      x: {
        grid: {
          color: 'white',
        }
      }
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: 'white', // Change legend text color to white
          font: {
            size: 16, 
          },
        },
      },
      title: {
        display: true,
        text: "Qualifier Points",
      },
      y: {
        label: "Time in Secconds"
      },
    },
  };

  return <div style={{height: '400px', width: '100%'}}><Bar data={data} options={options} /></div>;
};

export default BarChart;