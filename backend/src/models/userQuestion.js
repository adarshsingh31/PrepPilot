const mongoose = require("mongoose");

const userQuestionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },

    status: {
      type: String,
      enum: ["Not Started", "Saved", "Practiced"],
      default: "Not Started",
    },

    bookmarked: {
      type: Boolean,
      default: false,
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },

    attempts: {
      type: Number,
      default: 0,
      min: 0,
    },

    revisionCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    lastSolved: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// One progress document per user per question
userQuestionSchema.index({ user: 1, question: 1 }, { unique: true });

module.exports = mongoose.model("UserQuestion", userQuestionSchema);
