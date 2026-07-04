const mongoose = require("mongoose");

const studyPlanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    targetDate: {
      type: Date,
      required: [true, "Target date is required"],
    },

    status: {
      type: String,
      enum: ["Active", "Completed"],
      default: "Active",
    },

    progress: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const StudyPlan = mongoose.model("StudyPlan", studyPlanSchema);

module.exports = StudyPlan;
