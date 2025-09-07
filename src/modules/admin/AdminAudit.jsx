import React, { useEffect, useState } from "react";
import { getAuditLogs } from "./firebaseAudit";

export default function AdminAudit() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function fetchLogs() {
      const data = await getAuditLogs();
      setLogs(data);
    }
    fetchLogs();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Audit Trail</h3>
      <ul className="text-sm text-gray-600 space-y-2">
        {logs.map((log, index) => (
          <li key={index}>
            <strong>{log.action}</strong> by {log.user} at {new Date(log.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
