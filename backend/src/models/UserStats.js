const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema({
  date: {
    type: String, // format: "YYYY-MM-DD"
    required: true,
  },
  mockInterview: { type: Number, default: 0 }, // in seconds
  codingPractice: { type: Number, default: 0 },
  resumeAnalyzer: { type: Number, default: 0 },
  studyPlan: { type: Number, default: 0 },
  questionBank: { type: Number, default: 0 },
}, { _id: false });

const userStatsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  dailyLogs: [dailyLogSchema],
  cumulativeTime: {
    mockInterview: { type: Number, default: 0 },
    codingPractice: { type: Number, default: 0 },
    resumeAnalyzer: { type: Number, default: 0 },
    studyPlan: { type: Number, default: 0 },
    questionBank: { type: Number, default: 0 },
  }
}, { timestamps: true });

module.exports = mongoose.models.UserStats || mongoose.model("UserStats", userStatsSchema);
