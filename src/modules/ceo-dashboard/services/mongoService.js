export async function getFinancialData() {
  try {
    const response = await fetch("https://finmeect-api.onrender.com/api/financials");

    if (!response.ok) {
      throw new Error(`Failed to fetch financial data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getFinancialData:", error);
    return null;
  }
}
