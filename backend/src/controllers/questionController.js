const Question = require("../models/question");

// Get questions with filters
const getQuestions = async (req, res) => {
  try {
    // Step 2: Read query parameters
    const { topic, difficulty, importance, search } = req.query;

    // Step 3: Create an empty filter object
    const filter = {};

    // Step 4: Add topic if provided
    if (topic) {
      filter.topic = topic;
    }

    // Step 5: Add difficulty if provided
    if (difficulty) {
      filter.difficulty = difficulty;
    }

    // Step 6: Add importance if provided
    if (importance) {
      filter.importance = importance;
    }

    // Add search query if provided (case-insensitive regex match on title)
    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    // Step 7: Query MongoDB
    const questions = await Question.find(filter);

    // Step 8: Return the response
    res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getQuestions,
};
