const Question = require("../models/question");
const UserQuestion = require("../models/userQuestion");
const Interview = require("../models/interview");
const StudyPlan = require("../models/StudyPlan");
const Resume = require("../models/Resume");

const globalSearch = async (req, res) => {
  try {
    const { q } = req.query;
    
    // Default empty structure
    const defaultResponse = {
      questionBank: [],
      codingPractice: [],
      mockInterview: [],
      studyPlan: [],
      resumeAnalyzer: [],
    };

    if (!q || q.length < 2) {
      return res.status(200).json({ success: true, results: defaultResponse });
    }

    const regex = new RegExp(q, "i");
    const userId = req.user._id;

    // 1. Question Bank & Coding Practice
    // We will search the global Question model.
    const questions = await Question.find({
      $or: [
        { title: regex },
        { topic: regex },
        { difficulty: regex }
      ]
    }).limit(5);

    // 2. Mock Interview
    const interviews = await Interview.find({
      user: userId,
      $or: [
        { domain: regex },
        { difficulty: regex },
        { summary: regex }
      ]
    }).limit(5);

    // 3. Study Plan
    const studyPlans = await StudyPlan.find({
      user: userId,
      title: regex
    }).limit(5);

    // 4. Resume Analyzer
    // Match resumes if the query mentions "resume", "report", or if it's a number (score).
    let resumes = [];
    const isResumeQuery = "resume".match(regex) || "report".match(regex) || !isNaN(q);
    
    if (isResumeQuery) {
      const query = { user: userId };
      if (!isNaN(q) && q.trim() !== "") {
        query.score = Number(q);
      }
      resumes = await Resume.find(query).sort({ createdAt: -1 }).limit(5);
    }

    // Format results
    const results = {
      questionBank: questions.map(q => ({
        id: q._id.toString(),
        title: q.title,
        subtitle: `${q.topic} • ${q.difficulty}`,
      })),
      codingPractice: questions.map(q => ({
        id: q._id.toString(),
        title: q.title,
        subtitle: `${q.topic} • ${q.difficulty}`,
      })),
      mockInterview: interviews.map(i => ({
        id: i._id.toString(),
        title: `${i.domain} Interview`,
        subtitle: `Score: ${i.overallScore}/100 • ${i.difficulty}`,
      })),
      studyPlan: studyPlans.map(sp => ({
        id: sp._id.toString(),
        title: sp.title,
        subtitle: `${sp.progress}% Completed`,
      })),
      resumeAnalyzer: resumes.map(r => ({
        id: r._id.toString(),
        title: "Resume Report",
        subtitle: `Score: ${r.score}%`,
      })),
    };

    res.status(200).json({
      success: true,
      results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  globalSearch,
};
