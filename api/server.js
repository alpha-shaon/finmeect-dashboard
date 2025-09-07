const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define flexible schema for dashboard metrics
const MetricSchema = new mongoose.Schema({}, { strict: false });
const Metric = mongoose.model("dashboard_metrics", MetricSchema);

// API route to serve financial data
app.get("/api/financials", async (req, res) => {
  try {
    const data = await Metric.findOne({});
    if (!data) {
      return res.status(404).json({ error: "No financial data found" });
    }
    res.json(data);
  } catch (err) {
    console.error("Error fetching financials:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Finmeect API running on port ${PORT}`);
});
