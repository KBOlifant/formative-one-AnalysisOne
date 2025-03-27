import React from "react";
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
  maintainAspectRatio: false, // Prevents automatic growth
  responsive: true, // Ensures chart resizes correctly
};

const PieChart = ( {dataSet} ) => {

  if(!dataSet){
    return <p>loading..</p>
  }

  console.log(dataSet);
  const data = {
    labels: dataSet.AllTeamNames,
    datasets: [
      {
        data: dataSet.TeamWins,
        backgroundColor: dataSet.TeamColors,
      },
    ],
  };

  return <Pie data={data} options={chartOptions} />;
};

export default PieChart;