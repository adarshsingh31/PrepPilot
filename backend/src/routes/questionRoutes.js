const express = require("express");
const router = express.Router();

const { getQuestions } = require("../controllers/questionController");
const protect = require("../middleware/authMiddleware");

// Protected Route to get questions
router.get("/", protect, getQuestions);

module.exports = router;
