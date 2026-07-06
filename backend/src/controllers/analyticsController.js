const UserQuestion = require("../models/userQuestion");
const Question = require("../models/question");

const getAnalytics = async (req, res) => {
  try {
    // Logged-in user
    const userId = req.user._id;

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

module.exports = {
  getAnalytics,
};
