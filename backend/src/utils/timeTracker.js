const UserStats = require("../models/UserStats");

/**
 * Tracks time for a specific module for a user.
 * @param {string} userId - The ID of the user.
 * @param {string} moduleName - "mockInterview", "codingPractice", "resumeAnalyzer", "studyPlan", "questionBank".
 * @param {number} durationSeconds - The time spent in seconds.
 */
const trackUserTime = async (userId, moduleName, durationSeconds) => {
  try {
    if (!durationSeconds || durationSeconds <= 0) return;
    
    const validModules = ["mockInterview", "codingPractice", "resumeAnalyzer", "studyPlan", "questionBank"];
    if (!validModules.includes(moduleName)) {
      throw new Error("Invalid module name");
    }

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // Find or create UserStats
    let userStats = await UserStats.findOne({ user: userId });
    
    if (!userStats) {
      userStats = new UserStats({
        user: userId,
        dailyLogs: [],
        cumulativeTime: {}
      });
    }

    // Find today's log
    let todayLog = userStats.dailyLogs.find(log => log.date === today);
    if (!todayLog) {
      todayLog = {
        date: today,
        mockInterview: 0,
        codingPractice: 0,
        resumeAnalyzer: 0,
        studyPlan: 0,
        questionBank: 0
      };
      userStats.dailyLogs.push(todayLog);
      todayLog = userStats.dailyLogs[userStats.dailyLogs.length - 1]; // Reference the pushed object
    }

    // Increment times
    todayLog[moduleName] += durationSeconds;
    userStats.cumulativeTime[moduleName] += durationSeconds;

    await userStats.save();
    return userStats;
  } catch (error) {
    console.error("Error tracking time:", error);
  }
};

module.exports = {
  trackUserTime
};
