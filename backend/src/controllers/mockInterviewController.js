const Interview = require("../models/interview");
const {
  generateInterviewQuestions,
  evaluateAnswer,
  generateInterviewReport,
} = require("../services/mockInterviewService");
const startInterview = async (req, res) => {
  try {
    const { domain, difficulty, duration, mode } = req.body;

    // Validate request
    if (!domain || !difficulty || !duration || !mode) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    // Generate AI Questions
    const aiResponse = await generateInterviewQuestions(
      domain,
      difficulty,
      duration,
    );

    // Clean Gemini response
    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Parse AI response
    let parsedData;

    try {
      parsedData = JSON.parse(cleanedResponse);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to parse AI response.",
      });
    }

    // Validate AI response
    if (!parsedData.questions || !Array.isArray(parsedData.questions)) {
      return res.status(500).json({
        success: false,
        message: "Invalid AI response received.",
      });
    }

    // Save Interview
    const interview = await Interview.create({
      user: req.user._id,
      domain,
      difficulty,
      duration,
      mode,
      questions: parsedData.questions.map((question) => ({
        question,
      })),
    });

    return res.status(201).json({
      success: true,
      interviewId: interview._id,
      questions: interview.questions,
    });
  } catch (error) {
    console.error("Start Interview Error:", error);

    // Gemini quota exceeded
    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        message:
          "Gemini API quota exceeded. Please try again later or use a new API key.",
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
const submitAnswer = async (req, res) => {
  try {
    const { interviewId, questionIndex, answer } = req.body;
    const interview = await Interview.findById(interviewId);

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }
    const currentQuestion = interview.questions[questionIndex];

    if (!currentQuestion) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }
    const {
      generateInterviewQuestions,
      evaluateAnswer,
    } = require("../services/mockInterviewService");
    const aiResponse = await evaluateAnswer(currentQuestion.question, answer);
    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedData = JSON.parse(cleanedResponse);
    currentQuestion.answer = answer;
    currentQuestion.feedback = parsedData.feedback;
    currentQuestion.score = parsedData.score;

    await interview.save();
    res.status(200).json({
      success: true,
      feedback: parsedData.feedback,
      score: parsedData.score,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const finishInterview = async (req, res) => {
  try {
    const { interviewId } = req.body;

    const interview = await Interview.findOne({
      _id: interviewId,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    // Check if all questions are answered
    const unanswered = interview.questions.some(
      (question) => !question.answer.trim(),
    );

    if (unanswered) {
      return res.status(400).json({
        success: false,
        message: "Please answer all questions before finishing the interview.",
      });
    }

    // Calculate overall score
    const totalScore = interview.questions.reduce(
      (sum, question) => sum + question.score,
      0,
    );

    const overallScore =
      interview.questions.length === 0
        ? 0
        : Math.round(totalScore / interview.questions.length);

    // Generate AI Report
    const aiResponse = await generateInterviewReport(
      interview.questions,
      overallScore,
    );

    // Clean Gemini response
    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Parse JSON
    const parsedData = JSON.parse(cleanedResponse);

    // Update interview
    interview.overallScore = overallScore;
    interview.summary = parsedData.summary;
    interview.strengths = parsedData.strengths;
    interview.improvements = parsedData.improvements;
    interview.status = "Completed";
    interview.completedAt = new Date();

    await interview.save();

    res.status(200).json({
      success: true,
      result: {
        overallScore: interview.overallScore,
        summary: interview.summary,
        strengths: interview.strengths,
        improvements: interview.improvements,
        status: interview.status,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getInterviewHistory = async (req, res) => {
  try {
    const interviews = await Interview.find({
      user: req.user._id,
    })
      .select(
        "domain difficulty duration mode overallScore status createdAt completedAt",
      )
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: interviews.length,
      interviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  startInterview,
  submitAnswer,
  finishInterview,
  getInterviewHistory,
  getInterviewById,
};
