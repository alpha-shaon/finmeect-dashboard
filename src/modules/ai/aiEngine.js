export async function generateWebhook(prompt) {
  // Simulated NLP logic
  if (prompt.toLowerCase().includes("new customer")) {
    return `POST /webhooks/customer-created → triggers welcome email and CRM sync`;
  }
  if (prompt.toLowerCase().includes("expense alert")) {
    return `POST /webhooks/expense-alert → notifies finance team and logs audit`;
  }
  return `POST /webhooks/custom → executes custom logic based on: "${prompt}"`;
}
