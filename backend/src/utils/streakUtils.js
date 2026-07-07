const User = require("../models/user");

/**
 * Updates the user's daily activity streak.
 * @param {String} userId - The ID of the user.
 */
const updateUserStreak = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (!user.lastActivityDate) {
      // First ever activity
      user.currentStreak = 1;
      user.longestStreak = Math.max(1, user.longestStreak || 0);
      user.lastActivityDate = new Date(); // Save exact time of activity
    } else {
      const lastActivity = new Date(user.lastActivityDate);
      lastActivity.setHours(0, 0, 0, 0);

      const lastActivityTime = lastActivity.getTime();
      const todayTime = today.getTime();
      const yesterdayTime = yesterday.getTime();

      if (lastActivityTime === todayTime) {
        // Activity already completed today. Do nothing.
        return;
      } else if (lastActivityTime === yesterdayTime) {
        // Activity completed yesterday. Continue streak.
        user.currentStreak = (user.currentStreak || 0) + 1;
        user.longestStreak = Math.max(user.currentStreak, user.longestStreak || 0);
        user.lastActivityDate = new Date();
      } else if (lastActivityTime < yesterdayTime) {
        // Streak broken. Reset.
        user.currentStreak = 1;
        user.longestStreak = Math.max(1, user.longestStreak || 0);
        user.lastActivityDate = new Date();
      }
    }

    await user.save();
  } catch (error) {
    console.error("Error updating streak:", error);
  }
};

module.exports = { updateUserStreak };
