import { MongoClient } from "mongodb";

const uri = "YOUR_MONGODB_ATLAS_URI";
const client = new MongoClient(uri);

export async function getFinancialData() {
  try {
    await client.connect();
    const db = client.db("finmeect");
    const dashboard = db.collection("ceo_dashboard");
    const data = await dashboard.findOne({ date: "2024-04-06" });
    return data;
  } catch (error) {
    console.error("MongoDB fetch error:", error);
    return null;
  } finally {
    await client.close();
  }
}
