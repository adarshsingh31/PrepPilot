const User = require("../models/user");
const Interview = require("../models/interview");
const UserQuestion = require("../models/userQuestion");
const Resume = require("../models/Resume");
const StudyPlan = require("../models/StudyPlan");

/**
 * Generate milestones dynamically based on user stats.
 * @param {string} userId
 */
const generateUserMilestones = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    // Fetch required data in parallel
    const [
      interviewsCount,
      solvedProblemsCount,
      resumes,
      studyPlans
    ] = await Promise.all([
      Interview.countDocuments({ user: userId, status: "Completed" }),
      UserQuestion.countDocuments({ user: userId, status: "Practiced" }),
      Resume.find({ user: userId }).sort({ createdAt: -1 }),
      StudyPlan.find({ user: userId })
    ]);

    const maxResumeScore = resumes.length > 0 ? Math.max(...resumes.map(r => r.score)) : 0;
    const completedStudyPlans = studyPlans.filter(sp => sp.status === "Completed" || sp.progress === 100).length;

    // Define all milestones
    const definitions = [
      // Mock Interview Milestones
      { id: "int_1", title: "First Mock Interview", desc: "Completed your first AI mock interview.", icon: "🎤", category: "interview", target: 1 },
      { id: "int_5", title: "Completed 5 Mock Interviews", desc: "Completed five AI mock interviews.", icon: "🎤", category: "interview", target: 5 },
      { id: "int_10", title: "Completed 10 Mock Interviews", desc: "Completed ten AI mock interviews.", icon: "🎤", category: "interview", target: 10 },
      { id: "int_25", title: "Completed 25 Mock Interviews", desc: "Completed 25 AI mock interviews.", icon: "🎤", category: "interview", target: 25 },
      { id: "int_50", title: "Completed 50 Mock Interviews", desc: "Completed 50 AI mock interviews.", icon: "🎤", category: "interview", target: 50 },
      { id: "int_100", title: "Completed 100 Mock Interviews", desc: "Completed 100 AI mock interviews.", icon: "🎤", category: "interview", target: 100 },

      // Coding Practice Milestones
      { id: "code_1", title: "First Coding Problem", desc: "Solved your first coding problem.", icon: "💻", category: "coding", target: 1 },
      { id: "code_25", title: "Solved 25 Problems", desc: "Solved 25 coding problems.", icon: "💻", category: "coding", target: 25 },
      { id: "code_50", title: "Solved 50 Problems", desc: "Solved 50 coding problems.", icon: "💻", category: "coding", target: 50 },
      { id: "code_100", title: "Solved 100 Problems", desc: "Solved 100 coding problems.", icon: "💻", category: "coding", target: 100 },
      { id: "code_250", title: "Solved 250 Problems", desc: "Solved 250 coding problems.", icon: "💻", category: "coding", target: 250 },
      { id: "code_500", title: "Solved 500 Problems", desc: "Solved 500 coding problems.", icon: "💻", category: "coding", target: 500 },
      { id: "code_1000", title: "Solved 1000 Problems", desc: "Solved 1000 coding problems.", icon: "💻", category: "coding", target: 1000 },

      // Streak Milestones
      { id: "streak_3", title: "3 Day Streak", desc: "Maintained a 3 day streak.", icon: "🔥", category: "streak", target: 3 },
      { id: "streak_7", title: "7 Day Streak", desc: "Maintained a 7 day streak.", icon: "🔥", category: "streak", target: 7 },
      { id: "streak_15", title: "15 Day Streak", desc: "Maintained a 15 day streak.", icon: "🔥", category: "streak", target: 15 },
      { id: "streak_30", title: "30 Day Streak", desc: "Maintained a 30 day streak.", icon: "🔥", category: "streak", target: 30 },
      { id: "streak_50", title: "50 Day Streak", desc: "Maintained a 50 day streak.", icon: "🔥", category: "streak", target: 50 },
      { id: "streak_100", title: "100 Day Streak", desc: "Maintained a 100 day streak.", icon: "🔥", category: "streak", target: 100 },

      // Resume Analyzer Milestones
      { id: "res_1", title: "First Resume Analysis", desc: "Analyzed your first resume.", icon: "📄", category: "resume", target: 1 },
      { id: "res_70", title: "Resume Score Above 70", desc: "Achieved a resume score above 70.", icon: "📄", category: "resume", target: 71 },
      { id: "res_80", title: "Resume Score Above 80", desc: "Achieved a resume score above 80.", icon: "📄", category: "resume", target: 81 },
      { id: "res_90", title: "Resume Score Above 90", desc: "Achieved a resume score above 90.", icon: "📄", category: "resume", target: 91 },

      // Study Plan Milestones
      { id: "sp_1", title: "First Study Plan Created", desc: "Created your first study plan.", icon: "📚", category: "studyplan", target: 1 },
      { id: "sp_5", title: "Completed 5 Tasks", desc: "Completed 5 study plan tasks.", icon: "📚", category: "studyplan_completed", target: 5 },
      { id: "sp_20", title: "Completed 20 Tasks", desc: "Completed 20 study plan tasks.", icon: "📚", category: "studyplan_completed", target: 20 },
      { id: "sp_all", title: "Completed Entire Study Plan", desc: "Completed an entire study plan.", icon: "📚", category: "studyplan_completed", target: 1 }, 

      // Profile Milestones
      { id: "prof_comp", title: "Profile Completed", desc: "Filled out all profile details.", icon: "👤", category: "profile_comp", target: 1 },
      { id: "prof_pic", title: "Added Profile Picture", desc: "Uploaded a profile picture.", icon: "👤", category: "profile_pic", target: 1 },
    ];

    // Current values
    const currentValues = {
      interview: interviewsCount,
      coding: solvedProblemsCount,
      streak: user.longestStreak || user.currentStreak || 0,
      resume: maxResumeScore, // For score milestones. First resume uses count.
      studyplan: studyPlans.length,
      studyplan_completed: completedStudyPlans,
      profile_pic: (user.avatar && user.avatar.trim() !== "") ? 1 : 0,
      profile_comp: (user.name && user.phone && user.college && user.branch && user.year && user.cgpa && user.location) ? 1 : 0
    };

    // Evaluate milestones
    const evaluated = definitions.map(def => {
      let currentValue = currentValues[def.category];
      
      // Special logic for first resume (count instead of score)
      if (def.id === "res_1") currentValue = resumes.length;

      const earned = currentValue >= def.target;
      return {
        id: def.id,
        title: def.title,
        description: def.desc,
        icon: def.icon,
        earned,
        earnedDate: earned ? new Date().toISOString() : null,
        progress: currentValue,
        target: def.target
      };
    });

    const earnedList = evaluated.filter(m => m.earned).sort((a, b) => {
      // If we had real earnedDate we'd sort by it. Assuming newest is higher up in array index logically? 
      // Actually we just sort them as defined for now, or just leave as is. User wanted newest first. 
      // Since we use Date.now() for all, they are all the same. We'll just reverse the order so higher targets are first.
      return b.target - a.target; 
    });
    
    const unearnedList = evaluated.filter(m => !m.earned);

    // Identify next milestone
    let nextMilestone = null;
    if (unearnedList.length > 0) {
      // Pick one that has the highest percentage completion
      const withPct = unearnedList.map(m => ({ ...m, pct: m.progress / m.target }));
      withPct.sort((a, b) => b.pct - a.pct);
      
      const best = withPct[0];
      
      // Determine dynamic display text based on category
      let nextTitle = best.title;
      if (best.category === "streak") nextTitle = `Reach ${best.target} Day Streak`;
      else if (best.category === "coding") nextTitle = `Solve ${best.target} Coding Problems`;
      else if (best.category === "interview") nextTitle = `Complete ${best.target} Mock Interviews`;

      nextMilestone = {
        title: nextTitle,
        progress: best.progress,
        target: best.target,
        icon: best.icon,
        titleOriginal: best.title
      };
    }

    return {
      milestones: [...earnedList, ...unearnedList],
      nextMilestone
    };
  } catch (error) {
    console.error("Error generating milestones:", error);
    throw error;
  }
};

module.exports = {
  generateUserMilestones
};
