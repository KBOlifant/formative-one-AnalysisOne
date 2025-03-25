import { Line } from 'react-chartjs-2';
import React from "react";
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const getGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(75,192,192,0.6)");
    gradient.addColorStop(1, "rgba(75,192,192,0)");
    return gradient;
  };

const lineChartData = ({ dataset1, dataset2, dataLength }) =>{
    let labels = [];

    for (let index = 0; index < dataLength; index++) {
        labels.push("Round " + (index + 1));
    }

    const data ={
        labels,
        datasets: [{
            label: "Mclaren",
            data: dataset1,
            backgroundColor: '#FFFFFF55',
            borderColor: 'white',
            pointBorderColor: 'white',
            tension: 0.2,
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
            fill: true,
            },

            {
            label: "Mercedes",
            data: dataset2,
            backgroundColor: '#DC5D0455',
            borderColor: 'orange',
            pointBorderColor: 'orange',
            fill: true,
            tension: 0.2,
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
            }
        ]
    }
    
    const option = {
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
                }
            }
        }
    }
    
    return (
        <div style={{ height: "400px", width: "100%" }}>
            <Line
            data={data}
            options={option}
            ></Line>
        </div>
    );
};

export default lineChartData;