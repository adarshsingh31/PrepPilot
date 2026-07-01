const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PrepPilot API is running",
  });
});

module.exports = app;
