import React from "react";
// 1. Import Doughnut instead of Bar
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement, 
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

// Renamed component for clarity
const DoughnutChart = ({ apiData1, apiData2 }) => {
    console.log(apiData2);
    const team1_driver1_points = apiData1.DriverPoints.Driver1Points;
    const team1_driver2_points = apiData1.DriverPoints.Driver2Points;
    const team2_driver1_points = apiData2.DriverPoints.Driver1Points;
    const team2_driver2_points = apiData2.DriverPoints.Driver2Points;


  const data = {
    labels: [apiData1.driver1.driverName + " - " + apiData1.TeamName, apiData1.driver2.driverName + " - " + apiData1.TeamName, apiData2.driver1.driverName + " - " + apiData2.TeamName, apiData2.driver2.driverName + " - " + apiData2.TeamName],
    datasets: [
      {
        data: [team1_driver1_points, team1_driver2_points, team2_driver1_points, team2_driver2_points], 

        backgroundColor: [
            apiData1.color + "77", 
            apiData1.color + "BB",
            apiData2.color + "77",
            apiData2.color + "BB"
        ],
        borderColor: [
            apiData1.color,
            apiData1.color,
            apiData2.color,
            apiData2.color
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { 
        position: 'top', 
        labels: {
          font: {
            family: "Tomorrow",
          },
          color: "white"
        }
      },

        title:{
          font: {
            size: 26,
            weight: 'bold', 
            family: "tomorrow",
          },
          color: "white",
          display: true,
          text: 'Team Standings',
        }
    },
    maintainAspectRatio: false,
    responsive: true,

  }

  return <div style={{height: '100%', width: '100%'}}><Doughnut data={data} options={options} /></div>;
};

export default DoughnutChart;