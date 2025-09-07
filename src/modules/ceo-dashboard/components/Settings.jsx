import React from "react";

export default function Settings({ onBackup }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">System Settings</h3>
      <div className="flex gap-4">
        <button
          onClick={onBackup}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Trigger Backup
        </button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
          Switch Theme
        </button>
      </div>
    </div>
  );
}
