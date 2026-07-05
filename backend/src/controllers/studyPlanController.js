const StudyPlan = require("../models/studyPlan");

// Get all study plans for the logged-in user
const getStudyPlans = async (req, res) => {
  try {
    const studyPlans = await StudyPlan.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      studyPlans,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create a new study plan
const createStudyPlan = async (req, res) => {
  try {
    const { title, targetDate } = req.body;

    const studyPlan = await StudyPlan.create({
      user: req.user._id,
      title,
      targetDate,
    });

    res.status(201).json({
      success: true,
      message: "Study plan created successfully",
      studyPlan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a study plan
const updateStudyPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, targetDate, status, progress } = req.body;

    const studyPlan = await StudyPlan.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!studyPlan) {
      return res.status(404).json({
        success: false,
        message: "Study plan not found",
      });
    }

    studyPlan.title = title || studyPlan.title;
    studyPlan.targetDate = targetDate || studyPlan.targetDate;
    studyPlan.status = status || studyPlan.status;
    studyPlan.progress = progress ?? studyPlan.progress;

    await studyPlan.save();

    res.status(200).json({
      success: true,
      message: "Study plan updated successfully",
      studyPlan,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a study plan
const deleteStudyPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const studyPlan = await StudyPlan.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!studyPlan) {
      return res.status(404).json({
        success: false,
        message: "Study plan not found",
      });
    }

    await studyPlan.deleteOne();

    res.status(200).json({
      success: true,
      message: "Study plan deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getStudyPlans,
  createStudyPlan,
  updateStudyPlan,
  deleteStudyPlan,
};
