const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const { getAnalytics, getUserStats } = require("../controllers/analyticsController");

router.get("/", protect, getAnalytics);
router.get("/stats", protect, getUserStats);

module.exports = router;
