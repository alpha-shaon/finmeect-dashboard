import React from "react";

const checks = [
  { label: "GDPR Compliance", status: true },
  { label: "ISO 27001 Alignment", status: true },
  { label: "Internal Policy Match", status: false },
];

export default function ComplianceChecker() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Compliance Checker</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {checks.map((check, i) => (
          <li key={i} className={`font-medium ${check.status ? "text-green-600" : "text-red-600"}`}>
            • {check.label}: {check.status ? "Pass" : "Fail"}
          </li>
        ))}
      </ul>
    </div>
  );
}
