const getDashboard = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: {
        name: req.user.name,
        email: req.user.email,
      },
      stats: {
        questionsSolved: 0,
        studyPlans: 0,
        mockInterviews: 0,
        resumeScore: 0,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};
