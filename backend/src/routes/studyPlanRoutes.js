const express = require("express");
const router = express.Router();

const {
  getStudyPlans,
  createStudyPlan,
  updateStudyPlan,
} = require("../controllers/studyPlanController");
const protect = require("../middleware/authMiddleware");

// Protected Study Plan Routes
router.get("/", protect, getStudyPlans);
router.post("/", protect, createStudyPlan);
router.put("/:id", protect, updateStudyPlan);

module.exports = router;
