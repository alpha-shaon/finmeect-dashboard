import React, { useState } from "react";
import { sendNotification } from "./firebaseMessaging";

export default function NotificationCenter() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Idle");

  const handleSend = async () => {
    setStatus("Sending...");
    const result = await sendNotification(message);
    setStatus(result ? "Sent" : "Failed");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Notification Center</h3>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Enter alert message"
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleSend}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Send Alert
      </button>
      <p className="mt-2 text-sm text-gray-500">Status: {status}</p>
    </div>
  );
}
