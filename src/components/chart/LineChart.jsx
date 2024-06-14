import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const labels = [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: props.label,
        backgroundColor: "#f0f2f5",
        borderColor: "#f0f2f5",
        data: props.data,
        borderWidth: 4,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
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
        max: 600,
        ticks: {
          stepSize: 200,
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
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
