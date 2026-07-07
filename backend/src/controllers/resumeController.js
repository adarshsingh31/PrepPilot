const pdfParse = require("pdf-parse");
const { analyzeResumeWithAI } = require("../services/resumeAnalyzerService");
const { updateUserStreak } = require("../utils/streakUtils");
const { trackUserTime } = require("../utils/timeTracker");
const analyzeResume = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF file",
      });
    }

    const analysisStart = Date.now();

    // Extract text from PDF
    const pdfData = await pdfParse(req.file.buffer);
    const aiResponse = await analyzeResumeWithAI(pdfData.text);

    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleanedResponse);

    // Save to Database
    const Resume = require("../models/Resume");
    await Resume.create({
      user: req.user._id,
      score: analysis.score || 0,
      contentScore: analysis.contentScore || 0,
      structureScore: analysis.structureScore || 0,
      skillsScore: analysis.skillsScore || 0,
      atsScore: analysis.atsScore || 0
    });

    // Update Streak
    await updateUserStreak(req.user._id);

    // Track time spent in resume analyzer (upload to result)
    const analysisSeconds = Math.round((Date.now() - analysisStart) / 1000);
    await trackUserTime(req.user._id, "resumeAnalyzer", analysisSeconds);

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getResumeHistory = async (req, res) => {
  try {
    const Resume = require("../models/Resume");
    const history = await Resume.find({ user: req.user._id }).sort({ createdAt: 1 });
    res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeResume,
  getResumeHistory,
};
