const Interview = require("../models/interview");
const {
  generateInterviewQuestions,
  evaluateAnswer,
} = require("../services/mockInterviewService");

const startInterview = async (req, res) => {
  try {
    const { domain, difficulty, duration, mode } = req.body;

    const userId = req.user._id;
    const aiResponse = await generateInterviewQuestions(
      domain,
      difficulty,
      duration,
    );
    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const parsedData = JSON.parse(cleanedResponse);
    const interview = await Interview.create({
      user: userId,
      domain,
      difficulty,
      duration,
      mode,
      questions: parsedData.questions.map((question) => ({
        question,
      })),
    });
    res.status(201).json({
      success: true,
      interviewId: interview._id,
      questions: interview.questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
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
module.exports = {
  startInterview,
  submitAnswer,
};
