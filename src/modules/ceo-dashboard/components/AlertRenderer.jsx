import React from "react";

export default function AlertRenderer({ alerts }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Alerts</h3>
      <ul className="space-y-2">
        {alerts.map((alert, index) => (
          <li key={index} className="text-sm text-red-600 font-medium">
            • {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
