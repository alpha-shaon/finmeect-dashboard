import React from "react";

export default function ExpensesByCategory({ expenses }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Expenses by Category</h3>
      <ul className="space-y-2">
        {Object.entries(expenses).map(([category, amount]) => (
          <li key={category} className="flex justify-between text-gray-600">
            <span className="font-medium">{category}</span>
            <span>${amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
