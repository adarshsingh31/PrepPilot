import AppLayout from "../../components/AppLayout";
import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useUserStats } from "../../context/UserStatsContext";

function timeAgo(dateInput) {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  const seconds = Math.floor((new Date() - date) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return "Just now";
}

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { stats, loading: statsLoading } = useUserStats();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading || statsLoading) {
    return (
      <AppLayout>
        <div className="p-4 md:p-8">
          <div className="max-w-container-max mx-auto space-y-6 md:space-y-8 animate-pulse">
            <div className="h-20 bg-surface-container-low rounded-2xl w-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="h-40 bg-surface-container-low rounded-2xl"></div>
              <div className="h-40 bg-surface-container-low rounded-2xl"></div>
              <div className="h-40 bg-surface-container-low rounded-2xl"></div>
              <div className="h-40 bg-surface-container-low rounded-2xl"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-5 h-96 bg-surface-container-low rounded-2xl"></div>
              <div className="lg:col-span-7 h-96 bg-surface-container-low rounded-2xl"></div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  const { user, summary, recentActivities, motivation } = dashboardData || {};

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          {/* Welcome Section */}
          <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-left">
              <h1 className="font-headline-lg text-headline-sm md:text-headline-lg text-on-surface">
                Welcome back, {user?.name || "User"} 👋
              </h1>
              <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant mt-2">
                Let's continue your journey to crack your dream job.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant flex items-center gap-4 w-full md:w-auto">
              <div className="bg-orange-100 p-3 rounded-xl">
                <span
                  className="material-symbols-outlined text-orange-600 text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_fire_department
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-baseline gap-2">
                  <span className="font-display-xl text-4xl text-on-surface">
                    {stats?.currentStreak || 0}
                  </span>
                  <span className="font-label-md text-on-surface-variant uppercase tracking-tighter">
                    Day Streak
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant">
                  {stats?.currentStreak > 0 ? "Keep it up! 🔥" : "Start a streak today!"}
                </p>
              </div>
            </div>
          </section>

          {/* Metrics Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Metric Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary-fixed rounded-xl">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                  </div>
                  {summary?.interviewGrowth > 0 && (
                    <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      {summary.interviewGrowth}%
                    </div>
                  )}
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Mock Interviews</p>
                <div className="flex items-baseline gap-2 mb-4">
                  {stats?.mockInterviews > 0 ? (
                    <>
                      <span className="font-headline-md text-headline-md">{stats.mockInterviews}</span>
                      <span className="text-xs text-on-surface-variant">Completed</span>
                    </>
                  ) : (
                    <Link to="/mock-interview" className="text-sm font-bold text-primary hover:underline">Start your first interview</Link>
                  )}
                </div>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-primary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,25 C10,20 20,28 30,15 C40,5 50,20 60,10 C70,0 80,15 90,5 L100,10" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-tertiary-fixed rounded-xl">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                  </div>
                  {summary?.resumeGrowth > 0 && (
                    <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      +{summary.resumeGrowth} pts
                    </div>
                  )}
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Resume Score</p>
                <div className="flex items-baseline gap-2 mb-4">
                  {stats?.resumeScore > 0 ? (
                    <>
                      <span className="font-headline-md text-headline-md text-tertiary">
                        {stats.resumeScore}
                        <span className="text-headline-sm text-on-surface-variant">/100</span>
                      </span>
                    </>
                  ) : (
                    <Link to="/resume-analyzer" className="text-sm font-bold text-tertiary hover:underline">Analyze your first resume</Link>
                  )}
                </div>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-tertiary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,20 C15,22 30,15 45,18 C60,20 75,10 90,5 L100,2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-secondary-fixed rounded-xl">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                  </div>
                  {summary?.codingGrowth > 0 && (
                    <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      +{summary.codingGrowth} pts
                    </div>
                  )}
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Coding Problems</p>
                <div className="flex items-baseline gap-2 mb-4">
                  {stats?.problemsSolved > 0 ? (
                    <>
                      <span className="font-headline-md text-headline-md">{stats.problemsSolved}</span>
                      <span className="text-xs text-on-surface-variant">Solved</span>
                    </>
                  ) : (
                    <Link to="/coding-practice" className="text-sm font-bold text-secondary hover:underline">Solve your first coding problem</Link>
                  )}
                </div>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-secondary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,28 C20,28 30,15 40,20 C50,25 60,10 80,12 L100,5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Metric Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <span className="material-symbols-outlined text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                  </div>
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Current Streak</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-headline-md text-headline-md text-orange-600">
                    {loading ? (
                      <div className="h-8 w-24 bg-surface-container-highest rounded-lg animate-pulse inline-block align-middle"></div>
                    ) : dashboardData?.summary?.currentStreak > 0 ? (
                      <>{dashboardData.summary.currentStreak} <span className="text-headline-sm text-orange-600">Days</span></>
                    ) : (
                      <span className="text-sm text-orange-600">No active streak yet</span>
                    )}
                  </span>
                  {!loading && dashboardData?.summary?.currentStreak > 0 && (
                     <span className="text-xs text-on-surface-variant">Active 🔥</span>
                  )}
                </div>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-orange-600 fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,25 Q15,5 30,25 T60,25 T90,10 L100,15" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </section>

          {/* Bento Style Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 text-left">
              <div className="flex justify-between items-center">
                <h2 className="font-headline-sm text-lg md:text-headline-sm text-on-surface">Quick Actions</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/mock-interview" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-primary group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-primary-fixed-dim/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">mic</span>
                  </div>
                  <p className="font-bold text-on-surface">Start Mock Interview</p>
                  <p className="text-xs text-on-surface-variant mt-1">Practice with AI</p>
                </Link>
                <Link to="/resume-analyzer" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-tertiary group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-tertiary-fixed-dim/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tertiary transition-colors">
                    <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">description</span>
                  </div>
                  <p className="font-bold text-on-surface">Analyze Resume</p>
                  <p className="text-xs text-on-surface-variant mt-1">Get AI feedback</p>
                </Link>
                <Link to="/coding-practice" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-secondary group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">code</span>
                  </div>
                  <p className="font-bold text-on-surface">Practice Coding</p>
                  <p className="text-xs text-on-surface-variant mt-1">Solve problems</p>
                </Link>
                <Link to="/progress" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-orange-500 group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                    <span className="material-symbols-outlined text-orange-600 group-hover:text-white transition-colors">insights</span>
                  </div>
                  <p className="font-bold text-on-surface">View Progress</p>
                  <p className="text-xs text-on-surface-variant mt-1">Track your growth</p>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6 text-left mt-4 lg:mt-0">
              <div className="flex justify-between items-center">
                <h2 className="font-headline-sm text-lg md:text-headline-sm text-on-surface">Recent Activity</h2>
                <Link to="/progress" className="text-primary font-bold text-sm bg-primary-fixed px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all">
                  View All
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex-1">
                <div className="divide-y divide-outline-variant">
                  {recentActivities?.length > 0 ? (
                    recentActivities.map((activity) => (
                      <div key={activity.id} className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                        <div className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-on-surface-variant text-xl">
                            {activity.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-on-surface">{activity.title}</p>
                          <p className="text-xs text-on-surface-variant">{activity.description}</p>
                        </div>
                        <span className="text-xs text-on-surface-variant font-medium text-right">
                          {timeAgo(activity.timestamp)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-4xl mb-2 opacity-50">history</span>
                      <p>No recent activity found. Start practicing!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Motivation Banner */}
          <section className="bg-surface-container rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed-dim/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-surface-tint/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 relative shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[120px] text-primary animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>
                    rocket_launch
                  </span>
                  <span className="material-symbols-outlined absolute top-4 right-4 text-tertiary-fixed-dim animate-pulse">spark</span>
                  <span className="material-symbols-outlined absolute bottom-4 left-4 text-orange-400 animate-pulse">auto_awesome</span>
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                  {motivation?.title || "You're doing great! 🚀"}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  {motivation?.description || "Consistency is the key to success. Keep practicing and you'll achieve your goals soon."}
                </p>
              </div>
              <div className="shrink-0">
                <Link to="/mock-interview" className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all text-lg">
                  Start Practice Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
