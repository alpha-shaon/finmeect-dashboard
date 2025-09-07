import React from "react";

export default function KPIDashboard({ kpi }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">KPI Dashboard</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600">Revenue</p>
          <p className="text-xl font-bold text-green-600">${kpi.revenue.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Net Profit</p>
          <p className="text-xl font-bold text-purple-600">{kpi.netProfit}%</p>
        </div>
        <div>
          <p className="text-gray-600">Customer Growth</p>
          <p className="text-xl font-bold text-blue-600">+{kpi.customerGrowth}%</p>
        </div>
        <div>
          <p className="text-gray-600">Conversion Rate</p>
          <p className="text-xl font-bold text-yellow-600">{kpi.conversion}%</p>
        </div>
      </div>
    </div>
  );
}
