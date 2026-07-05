const express = require("express");
const router = express.Router();

const {
  getStudyPlans,
  createStudyPlan,
  updateStudyPlan,
  deleteStudyPlan,
} = require("../controllers/studyPlanController");
const protect = require("../middleware/authMiddleware");

// Protected Study Plan Routes
router.get("/", protect, getStudyPlans);
router.post("/", protect, createStudyPlan);
router.put("/:id", protect, updateStudyPlan);
router.delete("/:id", protect, deleteStudyPlan);

module.exports = router;
