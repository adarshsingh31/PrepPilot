const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const studyPlanRoutes = require("./routes/studyPlanRoutes");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/study-plans", studyPlanRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PrepPilot API is running",
  });
});

module.exports = app;
