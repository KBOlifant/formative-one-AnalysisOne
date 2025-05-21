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
import { data } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ dataset1, dataset2 }) => {
  let labels = [];

  if(!dataset1){
    return <p>loading..</p>
  }

  for (let index = 0; index < dataset1.sampleSize; index++) {
    labels.push("Round " + (index + 1));
  }

  const data = {
    labels,
    datasets: [
      {
        label: dataset1.TeamName,
        data: dataset1.points,
        backgroundColor: dataset1.color + "55",
        borderColor: dataset1.color,
        borderRadius: "3",
        borderWidth: "2",
      },
      {
        label: dataset2.TeamName,
        data: dataset2.points,
        backgroundColor: dataset2.color + "55",
        borderColor: dataset2.color,
        borderRadius: "3",
        borderWidth: "2",
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
            labels: {
                font: {
                    size: 16,
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
                    family: "Tomorrow",
                },
                color: "white"
            },
            ticks: {
                color: "white"
            },
            beginAtZero: true
        },
        x: {
            ticks: {
                font: {
                    family: "Tomorrow"
                },
                color: "white"
            },
            title: {
                font: {
                    size: 26,
                    weight: 'bold', 
                    family: "Tomorrow",
                },
                color: "white",
                display: true,
                text: 'Points  Awarded  Per  Round',
            },
            grid: {
                display: false // Optional: Hide grid lines for better readability
            }
        }
    },
};


  return (
    <div>
      <Bar data={data} options={options} style={{height: "400px"}} />
    </div>
  );
};

export default BarChart;