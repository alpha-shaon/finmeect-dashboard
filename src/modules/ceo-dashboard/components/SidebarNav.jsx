import React from "react";

const navItems = [
  "Dashboard",
  "Financials",
  "AI Analysis",
  "Reports",
  "Settings",
  "Backup",
];

export default function SidebarNav() {
  return (
    <div className="w-64 bg-blue-900 text-white p-6">
      <h2 className="text-lg font-bold mb-6">Finmeect</h2>
      <ul className="space-y-4">
        {navItems.map(item => (
          <li key={item} className="hover:text-yellow-300 cursor-pointer">{item}</li>
        ))}
      </ul>
    </div>
  );
}
