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

const lineChartData = ({ dataset1, dataset2 }) =>{
    let labels = [];

    if(!dataset1 || !dataset2){
        return <p className='text-white'>loading...</p>
    }
    
    if(dataset1.sampleSize > 0){
        for (let index = 0; index < dataset1.sampleSize; index++) {
            labels.push("Round " + (index + 1));
        }
    }else{
        for (let index = 0; index < dataset2.sampleSize; index++) {
            labels.push("Round " + (index + 1));
        }
    }
    

    const data ={
        labels,
        datasets: [{
            label: dataset1.TeamName,
            data: dataset1.fastestLapAverageSpeed,
            backgroundColor: dataset1.color + "55",
            borderColor: dataset1.color,
            pointBorderColor: dataset1.color,
            tension: 0.25,
            pointStyle: 'circle',
            pointRadius: 6,
            pointHoverRadius: 12,
            fill: true,
            },

            {
            label: dataset2.TeamName,
            data: dataset2.fastestLapAverageSpeed,
            backgroundColor: dataset2.color + "55",
            borderColor: dataset2.color,
            pointBorderColor: dataset2.color,
            fill: true,
            tension: 0.25,
            pointStyle: 'circle',
            pointRadius: 6,
            pointHoverRadius: 12
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
                    text: 'Speed in KPH',
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
                    text: 'Average  Speed  Achieved  In  Fastest  Lap',
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