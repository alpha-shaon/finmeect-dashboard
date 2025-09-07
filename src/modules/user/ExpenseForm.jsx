import React, { useState } from "react";

export default function ExpenseForm() {
  const [items, setItems] = useState([{ name: "", amount: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { name: "", amount: "" }]);
  };

  const total = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Daily Expense Form</h3>
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 mb-2">
          <input
            type="text"
            placeholder="Item"
            value={item.name}
            onChange={e => handleChange(index, "name", e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Amount"
            value={item.amount}
            onChange={e => handleChange(index, "amount", e.target.value)}
            className="w-32 p-2 border rounded"
          />
        </div>
      ))}
      <button onClick={addItem} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Item
      </button>
      <p className="mt-4 text-sm text-gray-600">Total: <strong>${total.toLocaleString()}</strong></p>
    </div>
  );
}
