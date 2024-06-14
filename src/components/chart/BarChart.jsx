import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  const labels = ["M", "T", "W", "T", "F", "S", "S"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: props.label,
        backgroundColor: "#f0f2f5",
        borderColor: "#f0f2f5",
        data: props.data,
        barPercentage: 0.1,
        borderRadius: 100,
        borderSkipped: false,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: true,
          color: "#c6c7c965",
        },
        ticks: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "#c6c7c965",
        },
        border: {
          display: false,
        },
        min: 0,
        max: 60,
        ticks: {
          stepSize: 20,
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    minHeight: "10rem",
    width: "100%",
    border: "1px solid #fff",
    borderRadius: "10px",
    padding: "1.8rem 0.5rem",
    background: props.bg,
  };
  return (
    <div className="chart" style={graphStyle}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
