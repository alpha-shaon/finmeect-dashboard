import React from "react";

export default function Header({ date }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow">
      <div>
        <h1 className="text-xl font-bold text-blue-800">CEO DASHBOARD</h1>
        <p className="text-sm text-gray-500">Date: {date}</p>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Press B - Backup</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">ESC - Quit</button>
      </div>
    </div>
  );
}
