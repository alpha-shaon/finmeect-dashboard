import React from "react";

export default function FinancialOverview({ revenue, customers, conversion }) {
  return (
    <div className="grid grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md mt-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
        <p className="text-3xl text-green-600 font-bold">${revenue.toLocaleString()}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Customers</h3>
        <p className="text-3xl text-blue-600 font-bold">{customers.toLocaleString()}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Conversion</h3>
        <p className="text-3xl text-purple-600 font-bold">{conversion}%</p>
      </div>
    </div>
  );
}
