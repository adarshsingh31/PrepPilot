const mongoose = require("mongoose");
const UserQuestion = require("../models/userQuestion");
const Question = require("../models/question");
const { updateUserStreak } = require("../utils/streakUtils");

const getUserQuestions = async (req, res) => {
  try {
    const userQuestions = await UserQuestion.find({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      userQuestions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUserQuestion = async (req, res) => {
  try {
    // Get question id from URL
    const { questionId } = req.params;

    // 1. Validate questionId
    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Question ID",
      });
    }

    // 2. Check whether the Question exists
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    // Logged-in user's id (added by protect middleware)
    const userId = req.user._id;

    // 6. Restrict allowed fields
    const allowedUpdates = [
      "status",
      "bookmarked",
      "notes",
      "attempts",
      "revisionCount",
      "lastSolved",
    ];

    const updates = {};
    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
      });
    }

    // 3. Automatically update lastSolved
    if (updates.status === "Practiced") {
      updates.lastSolved = new Date();
    }

    // Create or update the user's progress
    const userQuestion = await UserQuestion.findOneAndUpdate(
      {
        user: userId,
        question: questionId,
      },
      {
        $set: updates,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      },
    );

    if (updates.status === "Practiced") {
      await updateUserStreak(userId);
    }

    res.status(200).json({
      success: true,
      message: "Question progress updated successfully",
      userQuestion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUserQuestions,
  updateUserQuestion,
};
