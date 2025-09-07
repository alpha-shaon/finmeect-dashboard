import React, { useState } from "react";

export default function FormBuilder() {
  const [fields, setFields] = useState([{ label: "", type: "text" }]);

  const addField = () => {
    setFields([...fields, { label: "", type: "text" }]);
  };

  const handleChange = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Form Builder</h3>
      {fields.map((field, index) => (
        <div key={index} className="flex gap-4 mb-2">
          <input
            type="text"
            placeholder="Label"
            value={field.label}
            onChange={e => handleChange(index, "label", e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <select
            value={field.type}
            onChange={e => handleChange(index, "type", e.target.value)}
            className="w-32 p-2 border rounded"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
          </select>
        </div>
      ))}
      <button onClick={addField} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Field
      </button>
    </div>
  );
}
