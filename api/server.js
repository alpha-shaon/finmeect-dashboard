const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

const MetricSchema = new mongoose.Schema({}, { strict: false });
const Metric = mongoose.model("dashboard_metrics", MetricSchema);

app.get("/api/financials", async (req, res) => {
  try {
    const data = await Metric.findOne({});
    res.json(data);
  } catch (err) {
    console.error("Error fetching financials:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(5000, () => console.log("Finmeect API running on port 5000"));
