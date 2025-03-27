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

const BarChart = ({ apiData1, apiData2 }) => {
  const labels = ["Q1", "Q2", "Q3"];
  const dataset1 = labels.map(() => Math.floor(Math.random() * 100));
  const dataset2 = labels.map(() => Math.floor(Math.random() * 100));

  const data = {
    labels,
    datasets: [
      {
        label: apiData1.TeamName,
        data: dataset1,
        backgroundColor: apiData1.color + "77",
        borderColor: apiData1.color,
        borderRadius: "24",
        borderWidth: "4",
      },
      {
        label: apiData2.TeamName,
        data: dataset2,
        backgroundColor: apiData2.color + "77",
        borderColor: apiData2.color,
        borderRadius: "24",
        borderWidth: "4",
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
            labels: {
                font: {
                    family: "Tomorrow",
                },
                color: "white"
            }
        },
        fill: "start"
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: {
            title: {
                display: true,
                text: 'Points',
                font: {
                    size: 14,
                    weight: 'bold', 
                    family: "tomorrow",
                },
                color: "white"
            },
            ticks: {
                color: "white"
            },
            beginAtZero: true
        },
        x :{
            ticks: {
                font:{
                    family: "tomorrow"
                },
                color: "white"
            },
            title:{
                font: {
                    size: 26,
                    weight: 'bold', 
                    family: "tomorrow",
                },
                color: "white",
                display: true,
                text: 'Sprint Points',
            }
        }
    }
}

  return <div style={{height: '400px', width: '100%'}}><Bar data={data} options={options} /></div>;
};

export default BarChart;