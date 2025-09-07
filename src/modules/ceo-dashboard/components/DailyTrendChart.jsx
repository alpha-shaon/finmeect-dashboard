import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function DailyTrendChart({ dailyExpenses }) {
  const labels = Object.keys(dailyExpenses);
  const data = {
    labels,
    datasets: [
      {
        label: "Daily Expenses",
        data: Object.values(dailyExpenses),
        backgroundColor: "#2563eb",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: value => `$${value}K` },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Daily Expenses Trend</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
