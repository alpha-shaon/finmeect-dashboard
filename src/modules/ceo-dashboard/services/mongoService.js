export async function getFinancialData() {
  const res = await fetch("/api/financials");
  if (!res.ok) throw new Error("Failed to fetch financial data");
  return await res.json();
}
