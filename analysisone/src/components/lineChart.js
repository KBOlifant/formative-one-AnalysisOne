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

const lineChartData = () =>{
    const labels = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Round 7', 'Round 8', 'Round 9', 'Round 10', 'Round 11', 'Round 12'];
    const dataset1 = labels.map(() => Math.floor(Math.random() * 100));
    const dataset2 = labels.map(() => Math.floor(Math.random() * 100));

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
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,   // Show the title
                    text: 'Points',  // Label text
                    font: {
                        size: 14,   // Font size for the label
                        weight: 'bold',  // Make it bold
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