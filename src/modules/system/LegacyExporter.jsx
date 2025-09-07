import React from "react";

export default function LegacyExporter({ data }) {
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Finmeect_Report_${data.date}.json`;
    link.click();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-blue-200">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Legacy Export</h3>
      <button
        onClick={handleExport}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Export as JSON
      </button>
    </div>
  );
}
