import React from "react";

export default function ProfitLossMeter({ profit }) {
  const isPositive = profit >= 0;
  const color = isPositive ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Profit / Loss Meter</h3>
      <div className={`text-4xl font-bold ${color}`}>
        {isPositive ? "+" : "-"}{Math.abs(profit)}%
      </div>
    </div>
  );
}
