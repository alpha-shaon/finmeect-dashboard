// src/modules/ceo-dashboard/services/mongoService.js
export async function getFinancialData() {
  try {
    const res = await fetch("https://finmeect-api.onrender.com/api/financials");
    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error("Error in getFinancialData:", err);
    return null;
  }
}
