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
    
    for (let index = 0; index < dataset1.sampleSize; index++) {
        labels.push("Round " + (index + 1));
    }

    const data ={
        labels,
        datasets: [{
            label: dataset1.TeamName,
            data: dataset1.points,
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
                    text: 'Points  Awarded  Per  Round',
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