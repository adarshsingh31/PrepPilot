import { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import { getAnalytics } from "../../services/analyticsService";
import { getHistory as getInterviewHistory } from "../../services/mockInterviewApi";
import { getResumeHistory } from "../../services/resumeService";

function Progress() {
  const [filter, setFilter] = useState("This Month");
  const [loading, setLoading] = useState(true);
  const [showAllTopics, setShowAllTopics] = useState(false);

  // Raw data from backend
  const [codingAnalytics, setCodingAnalytics] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [codingRes, interviewRes, resumeRes] = await Promise.all([
          getAnalytics(),
          getInterviewHistory(),
          getResumeHistory(),
        ]);

        if (codingRes.success) {
          setCodingAnalytics(codingRes.analytics);
        }
        if (interviewRes.success) {
          setInterviews(interviewRes.interviews || []);
        }
        if (resumeRes.success) {
          setResumes(resumeRes.history || []);
        }
      } catch (err) {
        console.error("Failed to fetch progress metrics:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  // Filter Date Ranges
  const getPeriods = () => {
    const now = new Date();
    let currentStart, prevStart, prevEnd;

    if (filter === "This Week") {
      currentStart = new Date(now);
      currentStart.setDate(now.getDate() - now.getDay());
      currentStart.setHours(0, 0, 0, 0);

      prevStart = new Date(currentStart);
      prevStart.setDate(prevStart.getDate() - 7);

      prevEnd = new Date(currentStart);
    } else {
      currentStart = new Date(now.getFullYear(), now.getMonth(), 1);
      currentStart.setHours(0, 0, 0, 0);

      prevStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      prevStart.setHours(0, 0, 0, 0);

      prevEnd = new Date(currentStart);
    }

    return { currentStart, prevStart, prevEnd };
  };

  const { currentStart, prevStart, prevEnd } = getPeriods();

  // ----------------------------------------------------
  // SECTION 1 & 2: MOCK INTERVIEWS CALCULATIONS
  // ----------------------------------------------------
  const completedInterviews = interviews.filter((i) => i.status === "Completed");

  const currentInterviews = completedInterviews.filter(
    (i) => new Date(i.completedAt || i.createdAt) >= currentStart
  );
  const prevInterviews = completedInterviews.filter((i) => {
    const d = new Date(i.completedAt || i.createdAt);
    return d >= prevStart && d < prevEnd;
  });

  const getTrendText = (current, prev) => {
    if (prev === 0) return current > 0 ? "+100%" : "0%";
    const pct = Math.round(((current - prev) / prev) * 100);
    return pct >= 0 ? `+${pct}%` : `${pct}%`;
  };

  const interviewsTrend = getTrendText(currentInterviews.length, prevInterviews.length);

  // Statistics
  const bestScore = currentInterviews.length > 0
    ? Math.max(...currentInterviews.map((i) => i.overallScore || 0))
    : 0;

  const avgScore = currentInterviews.length > 0
    ? Math.round(
        currentInterviews.reduce((sum, i) => sum + (i.overallScore || 0), 0) /
          currentInterviews.length
      )
    : 0;

  const totalInterviews = currentInterviews.length;

  const avgScorePrev = prevInterviews.length > 0
    ? Math.round(
        prevInterviews.reduce((sum, i) => sum + (i.overallScore || 0), 0) /
          prevInterviews.length
      )
    : 0;

  const scoreImprovement = avgScore - avgScorePrev;
  const scoreImprovementText = scoreImprovement >= 0 ? `↑ ${scoreImprovement}%` : `↓ ${Math.abs(scoreImprovement)}%`;

  // Interview Performance Graph points mapping (viewBox="0 0 100 100")
  const getInterviewGraphPoints = (data) => {
    if (data.length === 0) return { pathD: "", points: [] };
    
    // Sort oldest to newest for graph
    const sorted = [...data].sort((a, b) => new Date(a.completedAt || a.createdAt) - new Date(b.completedAt || b.createdAt));
    
    if (sorted.length === 1) {
      const cy = 90 - ((sorted[0].overallScore || 0) / 100) * 80;
      return { pathD: `M 0 ${cy} L 100 ${cy}`, points: [[50, cy]] };
    }
    const points = sorted.map((item, index) => {
      const cx = (index / (sorted.length - 1)) * 100;
      const cy = 90 - ((item.overallScore || 0) / 100) * 80; // range 10-90 for padding
      return [cx, cy];
    });
    const pathD = points.reduce(
      (acc, [cx, cy], i) => (i === 0 ? `M ${cx} ${cy}` : `${acc} L ${cx} ${cy}`),
      ""
    );
    return { pathD, points };
  };

  const { pathD: interviewPathD, points: interviewPoints } = getInterviewGraphPoints(currentInterviews);

  const getInterviewLabels = (data) => {
    if (data.length === 0) return [];
    const sorted = [...data].sort((a, b) => new Date(a.completedAt || a.createdAt) - new Date(b.completedAt || b.createdAt));
    if (sorted.length <= 5) {
      return sorted.map((item) =>
        new Date(item.completedAt || item.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      );
    }
    const step = (sorted.length - 1) / 4;
    return [0, 1, 2, 3, 4].map((idx) => {
      const item = sorted[Math.round(idx * step)];
      return new Date(item.completedAt || item.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    });
  };

  const interviewLabels = getInterviewLabels(currentInterviews);
  const avgScoreCy = 90 - (avgScore / 100) * 80;

  // ----------------------------------------------------
  // SECTION 1 & 4: RESUME STATS CALCULATIONS
  // ----------------------------------------------------
  const currentResumes = resumes.filter((r) => new Date(r.createdAt) >= currentStart);
  const prevResumes = resumes.filter((r) => {
    const d = new Date(r.createdAt);
    return d >= prevStart && d < prevEnd;
  });

  const latestResumeScore = currentResumes.length > 0 ? currentResumes[currentResumes.length - 1].score : 0;
  const prevResumeScore = prevResumes.length > 0 ? prevResumes[prevResumes.length - 1].score : 0;
  
  const resumeImprovement = latestResumeScore - prevResumeScore;
  const resumeTrend = resumeImprovement >= 0 ? `+${resumeImprovement}%` : `${resumeImprovement}%`;

  // Resume Graph (viewBox="0 0 100 100")
  const getResumeGraphPoints = (data) => {
    if (data.length === 0) return { pathD: "", points: [] };
    const sorted = [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sorted.length === 1) {
      const cy = 90 - (sorted[0].score / 100) * 80;
      return { pathD: `M 0 ${cy} L 100 ${cy}`, points: [[50, cy]] };
    }
    const points = sorted.map((item, index) => {
      const cx = (index / (sorted.length - 1)) * 100;
      const cy = 90 - (item.score / 100) * 80;
      return [cx, cy];
    });
    const pathD = points.reduce(
      (acc, [cx, cy], i) => (i === 0 ? `M ${cx} ${cy}` : `${acc} L ${cx} ${cy}`),
      ""
    );
    return { pathD, points };
  };

  const { pathD: resumePathD, points: resumePoints } = getResumeGraphPoints(currentResumes);

  const getResumeLabels = (data) => {
    if (data.length === 0) return [];
    const sorted = [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sorted.length <= 5) {
      return sorted.map((item) =>
        new Date(item.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      );
    }
    const step = (sorted.length - 1) / 4;
    return [0, 1, 2, 3, 4].map((idx) => {
      const item = sorted[Math.round(idx * step)];
      return new Date(item.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    });
  };

  const resumeLabels = getResumeLabels(currentResumes);
  
  const avgResumeScore = currentResumes.length > 0
    ? Math.round(
        currentResumes.reduce((sum, r) => sum + (r.score || 0), 0) /
          currentResumes.length
      )
    : 0;

  const avgResumeScoreCy = 90 - (avgResumeScore / 100) * 80;

  // ----------------------------------------------------
  // SECTION 1 & 3: CODING PROGRESS CALCULATIONS
  // ----------------------------------------------------
  const practicedQuestionsList = codingAnalytics?.practicedQuestionsList || [];

  const currentSolvedList = practicedQuestionsList.filter(
    (q) => new Date(q.updatedAt || q.lastSolved || q.createdAt) >= currentStart
  );
  const prevSolvedList = practicedQuestionsList.filter((q) => {
    const d = new Date(q.updatedAt || q.lastSolved || q.createdAt);
    return d >= prevStart && d < prevEnd;
  });

  const totalSolved = currentSolvedList.length;
  const codingTrend = getTrendText(currentSolvedList.length, prevSolvedList.length);

  const easy = currentSolvedList.filter((q) => q.question?.difficulty === "Easy").length;
  const medium = currentSolvedList.filter((q) => q.question?.difficulty === "Medium").length;
  const hard = currentSolvedList.filter((q) => q.question?.difficulty === "Hard").length;

  const totalSolvedForDifficulty = easy + medium + hard || 1;
  const easyPct = Math.round((easy / totalSolvedForDifficulty) * 100);
  const mediumPct = Math.round((medium / totalSolvedForDifficulty) * 100);
  const hardPct = Math.round((hard / totalSolvedForDifficulty) * 100);

  // Group solved by topics
  const topicsMap = {};
  currentSolvedList.forEach((q) => {
    if (q.question?.topic) {
      topicsMap[q.question.topic] = (topicsMap[q.question.topic] || 0) + 1;
    }
  });

  const topTopics = Object.entries(topicsMap)
    .map(([topic, solved]) => ({ topic, solved }))
    .sort((a, b) => b.solved - a.solved)
    .slice(0, showAllTopics ? undefined : 3);

  // ----------------------------------------------------
  // SECTION 1: STREAK CALCULATION
  // ----------------------------------------------------
  const calculateStreak = () => {
    const dates = new Set();
    completedInterviews.forEach((i) =>
      dates.add(new Date(i.completedAt || i.createdAt).toLocaleDateString("en-CA"))
    );
    practicedQuestionsList.forEach((q) =>
      dates.add(new Date(q.updatedAt || q.lastSolved || q.createdAt).toLocaleDateString("en-CA"))
    );
    resumes.forEach((r) => dates.add(new Date(r.createdAt).toLocaleDateString("en-CA")));

    const sortedDates = Array.from(dates).sort((a, b) => new Date(b) - new Date(a));
    let streakCount = 0;
    if (sortedDates.length > 0) {
      const todayStr = new Date().toLocaleDateString("en-CA");
      const yesterdayStr = new Date(Date.now() - 86400000).toLocaleDateString("en-CA");

      if (sortedDates[0] === todayStr || sortedDates[0] === yesterdayStr) {
        streakCount = 1;
        let current = new Date(sortedDates[0]);
        for (let i = 1; i < sortedDates.length; i++) {
          const prev = new Date(sortedDates[i]);
          const diffTime = Math.abs(current - prev);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            streakCount++;
            current = prev;
          } else if (diffDays > 1) {
            break;
          }
        }
      }
    }
    return { streak: streakCount, sortedDates };
  };

  const { streak, sortedDates } = calculateStreak();
  const streakTrendText = streak > 0 ? "Active 🔥" : "No Streak";

  // Summary Card Config
  const summaryCards = [
    {
      icon: "mic",
      label: "Mock Interviews",
      value: loading ? "-" : `${currentInterviews.length}`,
      sub: "Completed",
      trend: interviewsTrend,
      color: "text-primary",
      bg: "bg-primary/5",
    },
    {
      icon: "description",
      label: "Resume Score",
      value: loading ? "-" : latestResumeScore > 0 ? `${latestResumeScore}` : "-",
      sub: "/100 Latest",
      trend: resumeTrend,
      color: "text-tertiary",
      bg: "bg-tertiary-fixed-dim/10",
    },
    {
      icon: "code",
      label: "Problems Solved",
      value: loading ? "-" : totalSolved,
      sub: "Total Solved",
      trend: codingTrend,
      color: "text-primary",
      bg: "bg-primary/5",
    },
    {
      icon: "local_fire_department",
      label: "Current Streak",
      value: loading ? "-" : `${streak} Day${streak === 1 ? "" : "s"}`,
      sub: "Keep it up!",
      trend: streakTrendText,
      color: "text-primary-container",
      bg: "bg-primary-container/10",
      fill: true,
    },
  ];

  // ----------------------------------------------------
  // SECTION 5: TIME SPENT CALCULATIONS
  // ----------------------------------------------------
  const mockInterviewsTime = currentInterviews.reduce((sum, i) => sum + (i.duration || 0), 0) / 60;
  const codingTime = (easy * 15 + medium * 30 + hard * 60) / 60;
  const resumesTime = (currentResumes.length * 5) / 60;
  const otherTime = (totalSolved + currentInterviews.length) * 2 / 60; // Mock derived other practice

  const interviewHrs = Number(mockInterviewsTime.toFixed(1));
  const codingHrs = Number(codingTime.toFixed(1));
  const otherHrs = Number((resumesTime + otherTime).toFixed(1));
  const totalHrs = Number((interviewHrs + codingHrs + otherHrs).toFixed(1)) || 0.1;

  const interviewPct = Math.round((interviewHrs / totalHrs) * 100) || 0;
  const codingPct = Math.round((codingHrs / totalHrs) * 100) || 0;
  const otherPct = Math.round((otherHrs / totalHrs) * 100) || 0;

  // ----------------------------------------------------
  // SECTION 6: MILESTONES GENERATION
  // ----------------------------------------------------
  const getMilestones = () => {
    const list = [];

    // Interviews milestones
    if (completedInterviews.length >= 1) {
      list.push({
        icon: "emoji_events",
        bg: "bg-tertiary-fixed-dim/10",
        color: "text-tertiary",
        title: "Completed First Mock Interview",
        sub: new Date(completedInterviews[0].completedAt || completedInterviews[0].createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • Keep practicing!",
        date: new Date(completedInterviews[0].completedAt || completedInterviews[0].createdAt),
      });
    }
    if (completedInterviews.length >= 10) {
      list.push({
        icon: "emoji_events",
        bg: "bg-tertiary-fixed-dim/10",
        color: "text-tertiary",
        title: "Completed 10 Mock Interviews",
        sub: new Date(completedInterviews[9].completedAt || completedInterviews[9].createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • Great milestone!",
        date: new Date(completedInterviews[9].completedAt || completedInterviews[9].createdAt),
      });
    }
    if (completedInterviews.length >= 20) {
      list.push({
        icon: "emoji_events",
        bg: "bg-tertiary-fixed-dim/10",
        color: "text-tertiary",
        title: "Completed 20 Mock Interviews",
        sub: new Date(completedInterviews[19].completedAt || completedInterviews[19].createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • You are an expert interviewer!",
        date: new Date(completedInterviews[19].completedAt || completedInterviews[19].createdAt),
      });
    }

    // Coding milestones
    const sortedCoding = [...practicedQuestionsList].sort(
      (a, b) => new Date(a.updatedAt || a.createdAt) - new Date(b.updatedAt || b.createdAt)
    );
    if (sortedCoding.length >= 1) {
      list.push({
        icon: "code",
        bg: "bg-primary/5",
        color: "text-primary",
        title: "Solved First Coding Problem",
        sub: new Date(sortedCoding[0].updatedAt || sortedCoding[0].createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • The journey begins!",
        date: new Date(sortedCoding[0].updatedAt || sortedCoding[0].createdAt),
      });
    }
    if (sortedCoding.length >= 10) {
      list.push({
        icon: "code",
        bg: "bg-primary/5",
        color: "text-primary",
        title: "Solved 10 Coding Problems",
        sub: new Date(sortedCoding[9].updatedAt || sortedCoding[9].createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • Nice job!",
        date: new Date(sortedCoding[9].updatedAt || sortedCoding[9].createdAt),
      });
    }
    if (sortedCoding.length >= 100) {
      list.push({
        icon: "code",
        bg: "bg-primary/5",
        color: "text-primary",
        title: "100 Coding Problems",
        sub: new Date(sortedCoding[99].updatedAt || sortedCoding[99].createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • Century club! 💯",
        date: new Date(sortedCoding[99].updatedAt || sortedCoding[99].createdAt),
      });
    }

    // Resume milestones
    const sortedResumes = [...resumes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const resumeAbove85 = sortedResumes.find((r) => r.score > 85);
    if (resumeAbove85) {
      list.push({
        icon: "description",
        bg: "bg-tertiary-fixed-dim/10",
        color: "text-tertiary",
        title: "Resume Score > 85",
        sub: new Date(resumeAbove85.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • Highly competitive resume! 📄",
        date: new Date(resumeAbove85.createdAt),
      });
    }
    const resumeAbove90 = sortedResumes.find((r) => r.score > 90);
    if (resumeAbove90) {
      list.push({
        icon: "description",
        bg: "bg-tertiary-fixed-dim/10",
        color: "text-tertiary",
        title: "Resume Score > 90",
        sub: new Date(resumeAbove90.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • Elite resume status! 🌟",
        date: new Date(resumeAbove90.createdAt),
      });
    }

    // Streaks milestones
    if (streak >= 7) {
      const streakDate = sortedDates[0] ? new Date(sortedDates[0]) : new Date();
      list.push({
        icon: "local_fire_department",
        bg: "bg-[#f59e0b]/10",
        color: "text-[#f59e0b]",
        title: "7 Days Streak",
        sub: streakDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • You're on fire! 🔥",
        date: streakDate,
      });
    }
    if (streak >= 30) {
      const streakDate = sortedDates[0] ? new Date(sortedDates[0]) : new Date();
      list.push({
        icon: "local_fire_department",
        bg: "bg-[#f59e0b]/10",
        color: "text-[#f59e0b]",
        title: "30 Days Streak",
        sub: streakDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " • Legendary status! 👑",
        date: streakDate,
      });
    }

    return list.sort((a, b) => b.date - a.date);
  };

  const milestones = getMilestones();

  // Section 10 - Loading Skeletons
  if (loading) {
    return (
      <AppLayout>
        <div className="p-4 md:p-8">
          <div className="max-w-container-max mx-auto space-y-6 md:space-y-8 animate-pulse text-left">
            <div className="h-12 w-64 bg-surface-container rounded-xl"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-40 bg-surface-container rounded-xl"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-8 space-y-6 md:space-y-8">
                <div className="h-96 bg-surface-container rounded-xl"></div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-48 bg-surface-container rounded-xl"></div>
                  <div className="h-48 bg-surface-container rounded-xl"></div>
                </div>
              </div>
              <div className="lg:col-span-4 h-[500px] bg-surface-container rounded-xl"></div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <div>
                <h2 className="text-headline-md font-headline-md">Progress</h2>
                <p className="text-on-surface-variant">Track your overall progress and improvement over time.</p>
              </div>
            </div>
            {/* Global Filter dropdown */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-outline-variant rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-all outline-none cursor-pointer"
            >
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {summaryCards.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-outline-variant/30 metric-glow flex flex-col justify-between h-40 group hover:-translate-y-1 transition-transform text-left">
                <div className="flex justify-between items-start">
                  <div className={`w-10 h-10 ${m.bg} rounded-lg flex items-center justify-center ${m.color}`}>
                    <span className="material-symbols-outlined" style={m.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>{m.icon}</span>
                  </div>
                  <div className="text-right text-tertiary font-bold text-xs flex items-center gap-1">
                    {!m.fill && <span className="material-symbols-outlined text-xs">trending_up</span>}{m.trend}
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-on-surface-variant font-medium">{m.label}</p>
                  <h3 className={`text-headline-sm font-bold ${i === 3 ? "text-[#f59e0b]" : ""}`}>{m.value}</h3>
                  <p className="text-[10px] text-on-surface-variant mt-1">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="lg:col-span-8 space-y-6 md:space-y-8">
              {/* SECTION 2: INTERVIEW PERFORMANCE */}
              <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl border border-outline-variant/30 shadow-sm text-left">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h4 className="font-bold text-lg">Interview Performance</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-primary" /><span className="text-xs text-on-surface-variant">Score</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2 border-primary-container/40" /><span className="text-xs text-on-surface-variant">Average Score</span></div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 w-full mb-10 px-2 flex items-center justify-center">
                  {interviewPoints.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center gap-2">
                      <span className="material-symbols-outlined text-3xl text-on-surface-variant/40">monitoring</span>
                      <p className="text-xs font-bold text-on-surface-variant/50">No interview data available for this period</p>
                    </div>
                  ) : (
                    <>
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-outline-variant/20" />
                      <div className="absolute bottom-0 left-0 h-full w-[1px] bg-outline-variant/20" />
                      <div className="absolute w-full h-full flex flex-col justify-between opacity-10 pointer-events-none">
                        {[...Array(4)].map((_, i) => <div key={i} className="w-full h-[1px] bg-on-surface-variant" />)}
                      </div>
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        {/* Average line */}
                        <path className="text-primary-container opacity-60" d={`M0,${avgScoreCy} L100,${avgScoreCy}`} fill="none" stroke="currentColor" strokeDasharray="4" strokeWidth="2" />
                        {/* Score line */}
                        <path className="text-primary" d={interviewPathD} fill="none" stroke="currentColor" strokeWidth="3" />
                        {interviewPoints.map(([cx, cy], i) => (
                          <circle key={i} className="fill-primary" cx={cx} cy={cy} r="3" />
                        ))}
                      </svg>
                      <div className="absolute -bottom-8 w-full flex justify-between text-[10px] text-on-surface-variant font-medium px-1">
                        {interviewLabels.map((d, idx) => <span key={idx}>{d}</span>)}
                      </div>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  {[
                    { label: "Best Score", value: `${bestScore}`, sub: currentInterviews.length > 0 ? "Highest result" : "No data" },
                    { label: "Average Score", value: `${avgScore}`, highlight: true },
                    { label: "Total Interviews", value: `${totalInterviews}` },
                    { label: "Improvement", value: scoreImprovementText, sub: "vs last period", green: scoreImprovement >= 0 },
                  ].map((s, i) => (
                    <div key={i} className={`bg-surface-container-low p-4 rounded-lg text-center ${s.highlight ? "border-l-4 border-primary" : ""}`}>
                      <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">{s.label}</p>
                      <h5 className={`text-headline-sm font-bold ${s.green ? "text-tertiary" : ""}`}>{s.value}<span className="text-sm font-medium">{s.label.includes("Score") ? "/100" : ""}</span></h5>
                      {s.sub && <p className="text-[10px] text-on-surface-variant">{s.sub}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
                {/* SECTION 4: RESUME SCORE TREND */}
                <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm relative flex flex-col justify-between mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-bold">Resume Score Trend</h4>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-tertiary" /><span className="text-xs text-on-surface-variant">Score</span></div>
                        <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2 border-tertiary-container/40" /><span className="text-xs text-on-surface-variant">Average Score</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="h-48 w-full relative flex items-center justify-center mb-4">
                    {resumePoints.length === 0 ? (
                      <div className="flex flex-col items-center justify-center text-center gap-2">
                        <span className="material-symbols-outlined text-3xl text-on-surface-variant/40">description</span>
                        <p className="text-xs font-bold text-on-surface-variant/50">No resume history available</p>
                      </div>
                    ) : (
                      <>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-outline-variant/20" />
                        <div className="absolute bottom-0 left-0 h-full w-[1px] bg-outline-variant/20" />
                        <div className="absolute w-full h-full flex flex-col justify-between opacity-10 pointer-events-none">
                          {[...Array(4)].map((_, i) => <div key={i} className="w-full h-[1px] bg-on-surface-variant" />)}
                        </div>
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                          {/* Average line */}
                          <path className="text-tertiary-container opacity-60" d={`M0,${avgResumeScoreCy} L100,${avgResumeScoreCy}`} fill="none" stroke="currentColor" strokeDasharray="4" strokeWidth="2" />
                          {/* Score line */}
                          <path className="text-tertiary" d={resumePathD} fill="none" stroke="currentColor" strokeWidth="3" />
                          {resumePoints.map(([cx, cy], idx) => (
                            <circle key={idx} className="fill-tertiary" cx={cx} cy={cy} r="3" />
                          ))}
                        </svg>
                        <div className="absolute -bottom-6 w-full flex justify-between text-[10px] text-on-surface-variant font-medium px-1">
                          {resumeLabels.map((d, idx) => <span key={idx}>{d}</span>)}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* SECTION 5: TIME SPENT */}
                <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold">Time Spent</h4>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle className="stroke-surface-container" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                        <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${interviewPct} 100`} strokeLinecap="round" strokeWidth="3" />
                        <circle className="stroke-tertiary" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${codingPct} 100`} strokeDashoffset={`-${interviewPct}`} strokeLinecap="round" strokeWidth="3" />
                        <circle className="stroke-secondary-container" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${otherPct} 100`} strokeDashoffset={`-${interviewPct + codingPct}`} strokeLinecap="round" strokeWidth="3" />
                      </svg>
                      <div className="absolute text-center"><p className="text-lg font-bold leading-none">{totalHrs}</p><p className="text-[10px] text-on-surface-variant font-medium">hrs</p></div>
                    </div>
                    <div className="flex-grow space-y-2">
                      {[
                        ["primary", "Mock Interviews", `${interviewHrs} hrs`],
                        ["tertiary", "Coding Practice", `${codingHrs} hrs`],
                        ["secondary-container", "Others", `${otherHrs} hrs`],
                      ].map(([c, l, v]) => (
                        <div key={l} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full bg-${c}`} /><span>{l}</span></div>
                          <span className="font-bold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6 md:space-y-8 text-left mt-4 lg:mt-0">
              {/* SECTION 3: CODING PROGRESS */}
              <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold">Coding Progress</h4>
                </div>
                <div className="flex flex-col items-center mb-8">
                  {totalSolved === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center h-32 gap-2 w-full">
                      <span className="material-symbols-outlined text-3xl text-on-surface-variant/40">code</span>
                      <p className="text-xs font-bold text-on-surface-variant/50">No coding progress data</p>
                    </div>
                  ) : (
                    <>
                      <div className="w-32 h-32 relative flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle className="stroke-tertiary-fixed-dim" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${easyPct}, 100`} strokeLinecap="round" strokeWidth="4" />
                          <circle className="stroke-[#f59e0b]" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${mediumPct}, 100`} strokeDashoffset={`-${easyPct}`} strokeLinecap="round" strokeWidth="4" />
                          <circle className="stroke-error" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${hardPct}, 100`} strokeDashoffset={`-${easyPct + mediumPct}`} strokeLinecap="round" strokeWidth="4" />
                        </svg>
                        <div className="absolute text-center"><span className="text-2xl font-bold leading-tight">{totalSolved}</span><span className="block text-[8px] uppercase text-on-surface-variant font-bold tracking-widest">Solved</span></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-6 w-full text-center">
                        {[
                          ["tertiary-fixed-dim", "Easy", easy],
                          ["[#f59e0b]", "Medium", medium],
                          ["error", "Hard", hard],
                        ].map(([c, l, v], i) => (
                          <div key={l} className={i === 1 ? "border-x border-outline-variant/30" : ""}>
                            <div className="flex items-center justify-center gap-1 mb-1"><span className={`w-1.5 h-1.5 rounded-full bg-${c}`} /><span className="text-[10px] text-on-surface-variant">{l}</span></div>
                            <span className="font-bold text-sm">{v}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Top Topics Solved</p>
                  {topTopics.length > 0 ? (
                    topTopics.map((item) => (
                      <div key={item.topic} className="space-y-2 text-xs">
                        <div className="flex justify-between mb-1"><span>{item.topic}</span><span>{item.solved}</span></div>
                        <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: `${Math.round((item.solved / totalSolved) * 100)}%` }} /></div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-on-surface-variant font-semibold">No topics solved in this period.</p>
                  )}
                  {codingAnalytics?.topicStats && codingAnalytics.topicStats.length > 3 && (
                    <button onClick={() => setShowAllTopics(!showAllTopics)} className="w-full text-center text-xs font-bold text-primary mt-4 py-2 hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      {showAllTopics ? "View Less" : "View All Topics"} <span className="material-symbols-outlined text-sm">{showAllTopics ? "arrow_upward" : "arrow_forward"}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* SECTION 6: MILESTONES */}
              <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold">Milestones</h4>
                  <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                </div>
                <div className="space-y-4 text-xs">
                  {milestones.length > 0 ? (
                    milestones.slice(0, 5).map((m, i) => (
                      <div key={i} className="flex gap-3 animate-fade-in">
                        <div className={`w-8 h-8 ${m.bg} rounded-lg flex-shrink-0 flex items-center justify-center ${m.color}`}>
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
                        </div>
                        <div><p className="font-bold text-on-surface">{m.title}</p><p className="text-[10px] text-on-surface-variant">{m.sub}</p></div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-on-surface-variant font-semibold">
                      Complete coding problems, upload resumes, or practice mock interviews to earn milestones!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Progress;
