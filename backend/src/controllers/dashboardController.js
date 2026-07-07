const Interview = require("../models/interview");
const Resume = require("../models/Resume");
const UserQuestion = require("../models/userQuestion");
const User = require("../models/user");
const StudyPlan = require("../models/StudyPlan");

const getDashboard = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    // 1. Fetch Summary Data
    const interviews = await Interview.find({ user: userId, status: "Completed" }).sort({ createdAt: -1 });
    const interviewsCompleted = interviews.length;
    let interviewGrowth = 0;
    if (interviews.length >= 2) {
      const latestScore = interviews[0].overallScore;
      const prevScore = interviews[1].overallScore;
      if (prevScore > 0) {
        interviewGrowth = Math.round(((latestScore - prevScore) / prevScore) * 100);
      } else if (latestScore > 0) {
        interviewGrowth = 100;
      }
    }

    const resumes = await Resume.find({ user: userId }).sort({ createdAt: -1 });
    const resumeScore = resumes.length > 0 ? resumes[0].score : 0;
    let resumeGrowth = 0;
    if (resumes.length >= 2) {
      resumeGrowth = resumes[0].score - resumes[1].score;
    }

    const codingSolved = await UserQuestion.countDocuments({ user: userId, status: "Practiced" });
    const codingGrowth = Math.round(codingSolved * 0.1); 

    // 2. Fetch Recent Activities (max 5 combined)
    const recentActivities = [];

    interviews.slice(0, 5).forEach(i => {
      recentActivities.push({
        id: i._id.toString(),
        type: 'interview',
        title: 'Completed Mock Interview',
        description: `Scored ${i.overallScore}/100 in ${i.domain}`,
        timestamp: i.completedAt || i.updatedAt,
        icon: 'mic'
      });
    });

    resumes.slice(0, 5).forEach(r => {
      recentActivities.push({
        id: r._id.toString(),
        type: 'resume',
        title: 'Resume Analyzed',
        description: `ATS Score: ${r.score}%`,
        timestamp: r.createdAt,
        icon: 'description'
      });
    });

    const solvedQuestions = await UserQuestion.find({ user: userId, status: "Practiced" })
      .sort({ lastSolved: -1, updatedAt: -1 })
      .limit(5)
      .populate('question');
      
    solvedQuestions.forEach(q => {
      recentActivities.push({
        id: q._id.toString(),
        type: 'coding',
        title: 'Solved Coding Problem',
        description: q.question ? q.question.title : 'Problem solved',
        timestamp: q.lastSolved || q.updatedAt,
        icon: 'code'
      });
    });

    const studyPlans = await StudyPlan.find({ user: userId, status: "Completed" })
      .sort({ updatedAt: -1 })
      .limit(5);

    studyPlans.forEach(s => {
      recentActivities.push({
        id: s._id.toString(),
        type: 'study_plan',
        title: 'Completed Study Plan',
        description: s.title,
        timestamp: s.updatedAt,
        icon: 'assignment'
      });
    });

    recentActivities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const latestActivities = recentActivities.slice(0, 5);

    // 3. Get Streak
    let currentStreak = user.currentStreak || 0;
    let longestStreak = user.longestStreak || 0;
    let lastActivityDate = user.lastActivityDate || null;

    // 4. Generate Motivation Message
    let motivation = {
      title: "Let's Get Started! 🚀",
      description: "You haven't practiced recently. Let's get back on track."
    };

    if (currentStreak > 7) {
      motivation = { title: "On Fire! 🔥", description: "Fantastic consistency! Keep your momentum going." };
    } else if (currentStreak > 0) {
      motivation = { title: "Good Job! 👍", description: `You're on a ${currentStreak}-day streak. Keep practicing!` };
    } else if (interviewGrowth > 0) {
      motivation = { title: "Improving! 📈", description: "Your interview performance is improving. Keep practicing." };
    } else if (resumeGrowth > 0) {
      motivation = { title: "Getting Better! 🌟", description: "Your resume is looking stronger. Great work!" };
    }

    res.status(200).json({
      success: true,
      user: {
        name: req.user.name,
        email: req.user.email,
      },
      summary: {
        interviewsCompleted,
        resumeScore,
        codingSolved,
        currentStreak,
        interviewGrowth,
        resumeGrowth,
        codingGrowth,
        longestStreak,
        lastActivityDate
      },
      recentActivities: latestActivities,
      motivation
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
