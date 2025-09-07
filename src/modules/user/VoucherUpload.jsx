import React, { useState } from "react";
import { uploadVoucher } from "./firebaseStorage";

export default function VoucherUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("Idle");

  const handleUpload = async () => {
    if (!file) return;
    setStatus("Uploading...");
    const result = await uploadVoucher(file);
    setStatus(result ? "Upload Complete" : "Upload Failed");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Voucher Upload</h3>
      <input
        type="file"
        onChange={e => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Upload Voucher
      </button>
      <p className="mt-2 text-sm text-gray-500">Status: {status}</p>
    </div>
  );
}
