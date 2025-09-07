import React, { useState } from "react";
import { generateWebhook } from "./aiEngine";

export default function WebhookBuilder() {
  const [prompt, setPrompt] = useState("");
  const [webhook, setWebhook] = useState("");

  const handleGenerate = async () => {
    const result = await generateWebhook(prompt);
    setWebhook(result);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Webhook Builder</h3>
      <input
        type="text"
        placeholder="Describe your webhook..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Webhook
      </button>
      {webhook && (
        <div className="mt-4 text-sm text-gray-700">
          <strong>Generated Webhook:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-2">{webhook}</pre>
        </div>
      )}
    </div>
  );
}
