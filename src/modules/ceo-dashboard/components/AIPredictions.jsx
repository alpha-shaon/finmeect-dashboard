import React from "react";

export default function AIPredictions({ ai }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">AI Predictions</h3>
      <p className="text-sm text-gray-500 mb-2">Prediction Accuracy: <span className="font-bold text-blue-600">{ai.accuracy}%</span></p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Q3 Revenue</p>
          <p className="text-xl font-bold text-green-600">${ai.q3Revenue.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Q3 Net Profit</p>
          <p className="text-xl font-bold text-purple-600">${ai.q3Profit.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Customer Growth</p>
          <p className="text-xl font-bold text-blue-600">+{ai.customerGrowth}%</p>
        </div>
        <div>
          <p className="text-gray-600">Gross Costs</p>
          <p className="text-xl font-bold text-red-600">${ai.grossCosts.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
