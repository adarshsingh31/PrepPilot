const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { getAnalytics, getUserStats, getMilestones, trackTime, getTimeStats } = require("../controllers/analyticsController");

router.get("/", protect, getAnalytics);
router.get("/stats", protect, getUserStats);
router.get("/milestones", protect, getMilestones);
router.post("/track-time", protect, trackTime);
router.get("/time-stats", protect, getTimeStats);

module.exports = router;
