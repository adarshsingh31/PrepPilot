const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  startInterview,
  submitAnswer,
} = require("../controllers/mockInterviewController");

router.post("/start", protect, startInterview);
router.post("/answer", protect, submitAnswer);
module.exports = router;
