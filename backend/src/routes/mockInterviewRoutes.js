const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  startInterview,
  submitAnswer,
  finishInterview,
  getInterviewHistory,
  getInterviewById,
} = require("../controllers/mockInterviewController");
router.post("/start", protect, startInterview);
router.post("/answer", protect, submitAnswer);
router.post("/finish", protect, finishInterview);
router.get("/history", protect, getInterviewHistory);
router.get("/:id", protect, getInterviewById);
module.exports = router;
