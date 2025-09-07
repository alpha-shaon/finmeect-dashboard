import React from "react";

export default function SentimentAnalyzer({ feedback }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Sentiment Analyzer</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {feedback.map((entry, i) => (
          <li key={i} className={`font-medium ${entry.sentiment === "positive" ? "text-green-600" : entry.sentiment === "neutral" ? "text-yellow-600" : "text-red-600"}`}>
            • {entry.comment} — {entry.sentiment.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
