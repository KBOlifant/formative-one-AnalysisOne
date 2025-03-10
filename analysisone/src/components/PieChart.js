import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  return <Pie data={data} />;
};

export default PieChart;