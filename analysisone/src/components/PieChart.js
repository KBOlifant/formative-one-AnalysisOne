import React from "react";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
  maintainAspectRatio: false, // Prevents automatic growth
  responsive: true, // Ensures chart resizes correctly
};

const PieChart = () => {
  const data = {
    labels: ["Mclaren", "mercedes", "Redbull", "Alpine", "Ferrari", "Haas"],
    datasets: [
      {
        data: [7, 10, 12, 15, 20, 36],
        backgroundColor: ["#FB932F", "#2e7ad1", "#1330a8", "#27d992", "#c90a0a", "#961868"],
      },
    ],
  };

  return <Pie data={data} options={chartOptions} />;
};

export default PieChart;