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

const lineChartData = ({ dataset1 }) =>{
    let labels = [];

    if(!dataset1){
        return <p className='text-white'>loading...</p>
    }

    const last10Years = Array.from({ length: 11 }, (_, i) => 2024 - i);
    
    for (let index = 2015; index < 2025; index++) {
        labels.push(index);
    }


    const data ={
        labels,
        datasets: [{
            label: dataset1.TeamName,
            data: dataset1.last10Years,
            backgroundColor: dataset1.color + "55",
            borderColor: dataset1.color,
            pointBorderColor: dataset1.color,
            tension: 0.25,
            pointStyle: 'circle',
            pointRadius: 6,
            pointHoverRadius: 12,
            fill: true,
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
                    text: 'Position',
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
                    text: 'Position over the last 10 years',
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