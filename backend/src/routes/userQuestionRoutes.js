const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getUserQuestions,
  updateUserQuestion,
} = require("../controllers/userQuestionController");

router.get("/", protect, getUserQuestions);

router.put("/:questionId", protect, updateUserQuestion);

module.exports = router;
