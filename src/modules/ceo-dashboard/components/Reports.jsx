import React from "react";

export default function Reports({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">KPI Summary Report</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Revenue: <strong>${data.revenue.toLocaleString()}</strong></li>
        <li>Net Profit: <strong>{data.profitPercentage}%</strong></li>
        <li>Customer Growth: <strong>{data.aiPredictions.customerGrowth}%</strong></li>
        <li>Conversion Rate: <strong>{data.conversion}%</strong></li>
        <li>Gross Costs: <strong>${data.aiPredictions.grossCosts.toLocaleString()}</strong></li>
      </ul>
    </div>
  );
}
