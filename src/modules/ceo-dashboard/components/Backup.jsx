import React, { useState } from "react";
import { triggerBackup } from "../services/firebaseBackup";

export default function Backup() {
  const [status, setStatus] = useState("Idle");

  const handleBackup = async () => {
    setStatus("Running...");
    const result = await triggerBackup();
    setStatus(result ? "Backup Complete" : "Backup Failed");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">System Backup</h3>
      <button
        onClick={handleBackup}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Start Backup
      </button>
      <p className="mt-2 text-sm text-gray-500">Status: {status}</p>
    </div>
  );
}
