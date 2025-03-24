import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import '../App.css';

// Static data
const teamA = [90.031, 89.374, 89.179];
const teamB = [92.031, 88.374, 87.179];

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const IAS = () => {
  // Static data
  const data = {
    labels: ['Q1', 'Q2', 'Q3'],
    datasets: [
      {
        label: 'Mercedes',
        data: teamA, // Example ability scores
        borderColor: 'rgba(8, 202, 206, 1)', // Border color
        borderWidth: 3, // Border width
        pointBackgroundColor: 'rgb(8, 202, 206)', // Point fill color
        pointBorderColor: '#333', // Point border color
        pointHoverBackgroundColor: '#fff', // Point hover fill color
        pointHoverBorderColor: 'rgba(8, 202, 206, 1)', // Point hover border color
        fill: true, // Enable fill between points
        backgroundColor: 'rgba(8, 202, 206, 0.5)', // Fill color
      },
      {
        label: 'MClaren',
        data: teamB, // Example ability scores
        borderColor: 'rgba(8, 202, 206, 1)', // Border color
        borderWidth: 3, // Border width
        pointBackgroundColor: 'rgb(8, 202, 206)', // Point fill color
        pointBorderColor: '#333', // Point border color
        pointHoverBackgroundColor: '#fff', // Point hover fill color
        pointHoverBorderColor: 'rgba(8, 202, 206, 1)', // Point hover border color
        fill: true, // Enable fill between points
        backgroundColor: 'rgba(8, 202, 206, 0.5)', // Fill color
      },
    ],
  };

  // Options for the radar chart
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'white', 
        },
        grid: {
          color: 'white', 
        },
        suggestedMin: 85, // Minimum value for the radial axis
        suggestedMax: 95, // Maximum value for the radial axis
        pointLabels: {
          color: 'white', // Change label text color
          font: {
            size: 18, 
          },
        },
      },
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to stretch
    plugins: {
      legend: {
        position: 'top', // Position of the legend
        labels: {
          color: 'white', // Change legend text color to white
          font: {
            size: 16, 
          },
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value} Seconds`; // Add "ft" to the tooltip
          },
        },
      },
    },
  };

  return (
    <div className="IAS-container">
      <Radar data={data} options={options} />
    </div>
  );
};

export default IAS;