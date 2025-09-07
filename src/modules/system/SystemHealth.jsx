import React from "react";

export default function SystemHealth({ status }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-green-200">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">System Health</h3>
      <ul className="text-sm text-gray-600 space-y-2">
        <li>Uptime: <strong>{status.uptime} hrs</strong></li>
        <li>Last Backup: <strong>{status.lastBackup}</strong></li>
        <li>MongoDB Status: <span className="text-green-600 font-bold">Connected</span></li>
        <li>Firebase Functions: <span className="text-green-600 font-bold">Operational</span></li>
      </ul>
    </div>
  );
}
