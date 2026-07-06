const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    domain: {
      type: String,
      required: true,
      enum: [
        "DSA",
        "Frontend",
        "Backend",
        "Full Stack",
        "System Design",
        "HR",
        "DBMS",
        "Operating Systems",
        "OOPs",
      ],
    },

    difficulty: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"],
    },

    duration: {
      type: Number,
      required: true,
    },

    mode: {
      type: String,
      enum: ["Chat"],
      default: "Chat",
    },

    questions: [
      {
        question: String,
        answer: {
          type: String,
          default: "",
        },
        feedback: {
          type: String,
          default: "",
        },
        score: {
          type: Number,
          default: 0,
        },
      },
    ],

    overallScore: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["In Progress", "Completed"],
      default: "In Progress",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Interview", interviewSchema);
