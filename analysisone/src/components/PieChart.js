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
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#FB932F", "#C97526", "#7E4918"],
      },
    ],
  };

  return <Pie data={data} options={chartOptions} />;
};

export default PieChart;