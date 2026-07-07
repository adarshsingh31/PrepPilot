const UserQuestion = require("../models/userQuestion");
const Question = require("../models/question");
const User = require("../models/user");
const Interview = require("../models/interview");
const Resume = require("../models/Resume");

const getAnalytics = async (req, res) => {
  try {
    // Logged-in user
    const userId = req.user._id;
    const user = await User.findById(userId);

    // Total questions in Question Bank
    const totalQuestions = await Question.countDocuments();

    // Total practiced questions
    const practicedQuestions = await UserQuestion.countDocuments({
      user: userId,
      status: "Practiced",
    });

    // Total bookmarked questions
    const savedQuestions = await UserQuestion.countDocuments({
      user: userId,
      bookmarked: true,
    });

    // Total notes added
    const notesAdded = await UserQuestion.countDocuments({
      user: userId,
      notes: { $ne: "" },
    });

    // Completion percentage
    const completionPercentage =
      totalQuestions === 0
        ? 0
        : Math.round((practicedQuestions / totalQuestions) * 100);

    const practicedQuestionsList = await UserQuestion.find({
      user: userId,
      status: "Practiced",
    }).populate("question");
    let easySolved = 0;
    let mediumSolved = 0;
    let hardSolved = 0;
    practicedQuestionsList.forEach((item) => {
      if (item.question) {
        if (item.question.difficulty === "Easy") {
          easySolved++;
        } else if (item.question.difficulty === "Medium") {
          mediumSolved++;
        } else if (item.question.difficulty === "Hard") {
          hardSolved++;
        }
      }
    });
    const topicStats = {};

    practicedQuestionsList.forEach((item) => {
      if (item.question) {
        const topic = item.question.topic;

        if (topicStats[topic]) {
          topicStats[topic]++;
        } else {
          topicStats[topic] = 1;
        }
      }
    });
    const topicAnalytics = Object.entries(topicStats).map(
      ([topic, solved]) => ({
        topic,
        solved,
      }),
    );

    res.status(200).json({
      success: true,
      analytics: {
        totalQuestions,
        practicedQuestions,
        savedQuestions,
        notesAdded,
        completionPercentage,
        currentStreak: user?.currentStreak || 0,
        longestStreak: user?.longestStreak || 0,
        lastActivityDate: user?.lastActivityDate || null,

        difficultyStats: {
          easy: easySolved,
          medium: mediumSolved,
          hard: hardSolved,
        },

        topicStats: topicAnalytics,
        practicedQuestionsList,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUserStats = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    // Get interviews completed
    const mockInterviews = await Interview.countDocuments({ user: userId, status: "Completed" });

    // Get latest resume score
    const resumes = await Resume.find({ user: userId }).sort({ createdAt: -1 }).limit(1);
    const resumeScore = resumes.length > 0 ? resumes[0].score : 0;

    // Get total problems solved
    const problemsSolved = await UserQuestion.countDocuments({ user: userId, status: "Practiced" });

    res.status(200).json({
      success: true,
      stats: {
        currentStreak: user?.currentStreak || 0,
        longestStreak: user?.longestStreak || 0,
        mockInterviews,
        resumeScore,
        problemsSolved
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAnalytics,
  getUserStats,
};
