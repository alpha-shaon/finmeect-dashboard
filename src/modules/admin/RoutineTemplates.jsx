import React from "react";

const templates = {
  Daily: ["Submit expense", "Upload voucher", "Review alerts"],
  Weekly: ["Generate KPI report", "Audit logs", "Backup system"],
  Monthly: ["Forecast revenue", "Review customer growth", "System health check"],
};

export default function RoutineTemplates() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Routine Templates</h3>
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(templates).map(([period, tasks]) => (
          <div key={period}>
            <h4 className="text-md font-bold text-blue-700 mb-2">{period}</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {tasks.map((task, i) => <li key={i}>• {task}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
