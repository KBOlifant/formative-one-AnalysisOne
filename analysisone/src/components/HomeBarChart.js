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

const BarChart = ({ dataset }) => {
  let labels = [];

  if(!dataset){
    return <p>loading..</p>
  }

  for (let index = 0; index < dataset.DriverData.Driver1.length; index++) {
    labels.push("Round " + (index + 1));
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Driver1: " + dataset.DriverData.Driver1Name,
        data: dataset.DriverData.Driver1,
        backgroundColor: "#A10702EE",
        borderColor: 'red',
        borderRadius: "3",
        borderWidth: "2",
      },
      {
        label: "Driver2: " + dataset.DriverData.Driver2Name,
        data: dataset.DriverData.Driver2,
        backgroundColor: "#DC6D04AA",
        borderColor: 'orange',
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
            },
            grid: {
                display: false // Optional: Hide grid lines for better readability
            }
        }
    },
};


  return <Bar data={data} options={options} style={{height: "400px"}} />;
};

export default BarChart;