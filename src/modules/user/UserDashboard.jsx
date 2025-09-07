import React from "react";
import ExpenseForm from "./ExpenseForm";
import VoucherUpload from "./VoucherUpload";

export default function UserDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">User Dashboard</h2>
      <ExpenseForm />
      <VoucherUpload />
    </div>
  );
}
