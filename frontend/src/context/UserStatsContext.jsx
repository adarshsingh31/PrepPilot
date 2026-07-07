import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getUserStats } from "../services/analyticsService";
import { useAuth } from "./AuthContext";

const UserStatsContext = createContext();

export const UserStatsProvider = ({ children }) => {
  const { user } = useAuth(); // Only fetch stats if logged in
  const [stats, setStats] = useState({
    currentStreak: 0,
    longestStreak: 0,
    mockInterviews: 0,
    resumeScore: 0,
    problemsSolved: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    try {
      const res = await getUserStats();
      if (res.success) {
        setStats(res.stats);
      }
    } catch (error) {
      console.error("Failed to fetch user stats", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <UserStatsContext.Provider value={{ stats, refreshStats: fetchStats, loading }}>
      {children}
    </UserStatsContext.Provider>
  );
};

export const useUserStats = () => useContext(UserStatsContext);
