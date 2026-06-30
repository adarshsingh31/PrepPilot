import { Link } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
                {/* SideNavBar */}
                {/* SideNavBar */}
        <aside className="h-screen w-72 fixed left-0 top-0 bg-surface-container-lowest dark:bg-inverse-surface border-r border-outline-variant dark:border-outline shadow-sm flex flex-col py-6 px-4 space-y-2 z-50 overflow-y-auto">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
            </div>
            <div className="text-left">
              <h1 className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed-dim">PrepPilot</h1>
              <p className="text-[10px] font-label-md text-secondary-fixed-dim uppercase tracking-widest">AI Career Coach</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1.5 overflow-y-auto custom-scrollbar">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              <span className="font-label-md">Dashboard</span>
            </Link>
            <Link
              to="/mock-interview"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">video_chat</span>
              <span className="font-label-md">AI Mock Interview</span>
            </Link>
            <Link
              to="/resume-analyzer"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">description</span>
              <span className="font-label-md">Resume Analyzer</span>
            </Link>
            <Link
              to="/coding-practice"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">code</span>
              <span className="font-label-md">Coding Practice</span>
            </Link>
            <Link
              to="/progress"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">trending_up</span>
              <span className="font-label-md">Progress</span>
            </Link>
            <Link
              to="/question-bank"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">inventory_2</span>
              <span className="font-label-md">Question Bank</span>
            </Link>
            <Link
              to="/study-plan"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_note</span>
              <span className="font-label-md">Study Plan</span>
            </Link>
            <div className="pt-4 mt-4 border-t border-outline-variant">
            <Link
              to="/profile"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">person</span>
              <span className="font-label-md">Profile</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-md">Settings</span>
            </Link>
            <Link
              to="/help-support"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md">Help Center</span>
            </Link>
            </div>
          </nav>
          <div className="mt-auto">
            <Link
              to="/"
              className="text-error hover:bg-error-container/20 transition-colors duration-200 px-4 py-3 rounded-lg flex items-center gap-3 w-full"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md">Log Out</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          {/* Top Navigation Bar */}
          <header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className={`relative w-full transition-transform duration-200 ${isSearchFocused ? "scale-[1.02]" : ""}`}>
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-body-md focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                  placeholder="Search anything..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-4 h-4 bg-error text-white text-[10px] rounded-full flex items-center justify-center font-bold border-2 border-surface-bright">
                  3
                </span>
              </button>
              <div className="flex items-center gap-3 pl-6 border-l border-outline-variant">
                <div className="text-right">
                  <p className="font-bold text-on-surface text-sm">Adarsh Singh</p>
                  <p className="text-[11px] text-on-surface-variant">NIT Raipur</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="A professional headshot of Adarsh Singh"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLrPT_yqX5LpLoVMY5D1-zozMZZgmOejC34ZHdh2niVx2vPlu7hcOY13GNvlFQOYpZ6QwgCzYAtedNIOWLXndwYMD-AMVj5SKcbV8Vm4s2ZUA1bQrXn7RZakbk1D-XMlgEqv_Un0IVpCHol-J33_TrsZFXB-_Dw8IB_Lr_BFCbrZPKcWuSo44OjfbQxniN8wX1Q8OtYahGxmGCkvfb5c16X2EAgzAvQXOQGKR6qxRtGYAUvZ7wnLy-lqeORv5nGabvBbUwroMHuFU"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">
            {/* Welcome Section */}
            <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="text-left">
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Welcome back, Adarsh! 👋</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  Let's continue your journey to crack your dream job.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-orange-600 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    local_fire_department
                  </span>
                </div>
                <div className="text-left">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-xl text-4xl text-on-surface">7</span>
                    <span className="font-label-md text-on-surface-variant uppercase tracking-tighter">Day Streak</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">Keep it up! 🔥</p>
                </div>
              </div>
            </section>

            {/* Metrics Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Metric Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary-fixed rounded-xl">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      mic
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                    20%
                  </div>
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Mock Interviews</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-headline-md text-headline-md">12</span>
                  <span className="text-xs text-on-surface-variant">Completed</span>
                </div>
                <div className="h-12 w-full opacity-30">
                  <svg className="w-full h-full text-primary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                    <path d="M0,25 C10,20 20,28 30,15 C40,5 50,20 60,10 C70,0 80,15 90,5 L100,10" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-tertiary-fixed rounded-xl">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      description
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                    10%
                  </div>
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Resume Score</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-headline-md text-headline-md text-tertiary">
                    85<span className="text-headline-sm text-on-surface-variant">/100</span>
                  </span>
                  <span className="text-xs text-tertiary font-bold">Excellent</span>
                </div>
                <div className="h-12 w-full opacity-30">
                  <svg className="w-full h-full text-tertiary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                    <path d="M0,20 C15,22 30,15 45,18 C60,20 75,10 90,5 L100,2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Metric Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-secondary-fixed rounded-xl">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      code
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                    15%
                  </div>
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Coding Problems</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-headline-md text-headline-md">128</span>
                  <span className="text-xs text-on-surface-variant">Solved</span>
                </div>
                <div className="h-12 w-full opacity-30">
                  <svg className="w-full h-full text-secondary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                    <path d="M0,28 C20,28 30,15 40,20 C50,25 60,10 80,12 L100,5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Metric Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <span className="material-symbols-outlined text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-on-surface-variant font-bold text-xs">
                    2 days left
                  </div>
                </div>
                <p className="font-label-md text-on-surface-variant mb-1">Current Streak</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-headline-md text-headline-md text-orange-600">
                    7 <span className="text-headline-sm">Days</span>
                  </span>
                  <span className="text-xs text-on-surface-variant">Keep it up!</span>
                </div>
                <div className="h-12 w-full opacity-30">
                  <svg className="w-full h-full text-orange-600 fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                    <path d="M0,25 Q15,5 30,25 T60,25 T90,10 L100,15" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </section>

            {/* Bento Style Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Quick Actions (Bento Left) */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Quick Actions</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/mock-interview" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-primary group transition-all text-left shadow-sm">
                    <div className="w-12 h-12 bg-primary-fixed-dim/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                        mic
                      </span>
                    </div>
                    <p className="font-bold text-on-surface">Start Mock Interview</p>
                    <p className="text-xs text-on-surface-variant mt-1">Practice with AI</p>
                  </Link>
                  <Link to="/resume-analyzer" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-tertiary group transition-all text-left shadow-sm">
                    <div className="w-12 h-12 bg-tertiary-fixed-dim/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tertiary transition-colors">
                      <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">
                        description
                      </span>
                    </div>
                    <p className="font-bold text-on-surface">Analyze Resume</p>
                    <p className="text-xs text-on-surface-variant mt-1">Get AI feedback</p>
                  </Link>
                  <Link to="/coding-practice" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-secondary group transition-all text-left shadow-sm">
                    <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                      <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">
                        code
                      </span>
                    </div>
                    <p className="font-bold text-on-surface">Practice Coding</p>
                    <p className="text-xs text-on-surface-variant mt-1">Solve problems</p>
                  </Link>
                  <button className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-orange-500 group transition-all text-left shadow-sm">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                      <span className="material-symbols-outlined text-orange-600 group-hover:text-white transition-colors">
                        insights
                      </span>
                    </div>
                    <p className="font-bold text-on-surface">View Progress</p>
                    <p className="text-xs text-on-surface-variant mt-1">Track your growth</p>
                  </button>
                </div>
                <button className="w-full py-4 border-t border-outline-variant flex items-center justify-center gap-2 text-primary font-bold hover:bg-primary-fixed/30 transition-colors rounded-b-2xl bg-white/50">
                  View All Features <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>

              {/* Recent Activity (Bento Right) */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h2>
                  <button className="text-primary font-bold text-sm bg-primary-fixed px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all">
                    View All
                  </button>
                </div>
                <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex-1">
                  <div className="divide-y divide-outline-variant">
                    {/* Activity Item 1 */}
                    <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                      <div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">mic</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-on-surface">Completed Java Backend Interview</p>
                        <p className="text-xs text-on-surface-variant">
                          Score: <span className="text-primary font-bold">85/100</span>
                        </p>
                      </div>
                      <span className="text-xs text-on-surface-variant font-medium">2 hours ago</span>
                    </div>
                    {/* Activity Item 2 */}
                    <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                      <div className="w-10 h-10 bg-tertiary-fixed rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-tertiary text-xl">description</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-on-surface">Resume analyzed</p>
                        <p className="text-xs text-on-surface-variant">
                          Score improved to <span className="text-tertiary font-bold">85/100</span>
                        </p>
                      </div>
                      <span className="text-xs text-on-surface-variant font-medium">1 day ago</span>
                    </div>
                    {/* Activity Item 3 */}
                    <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                      <div className="w-10 h-10 bg-secondary-fixed rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-xl">code</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-on-surface">Solved 5 problems in Arrays</p>
                        <p className="text-xs text-on-surface-variant">Great job! Keep practicing.</p>
                      </div>
                      <span className="text-xs text-on-surface-variant font-medium">2 days ago</span>
                    </div>
                    {/* Activity Item 4 */}
                    <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-orange-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          local_fire_department
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-on-surface">7 day streak achieved! 🔥</p>
                        <p className="text-xs text-on-surface-variant">You're on a roll!</p>
                      </div>
                      <span className="text-xs text-on-surface-variant font-medium">2 days ago</span>
                    </div>
                    {/* Activity Item 5 */}
                    <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors border-b-0">
                      <div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">mic</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-on-surface">Completed DSA Mock Interview</p>
                        <p className="text-xs text-on-surface-variant">
                          Score: <span className="text-primary font-bold">78/100</span>
                        </p>
                      </div>
                      <span className="text-xs text-on-surface-variant font-medium">3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivation Banner */}
            <section className="bg-surface-container rounded-3xl p-8 relative overflow-hidden group">
              {/* Subtle background decoration */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed-dim/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-surface-tint/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="w-48 h-48 relative shrink-0">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[120px] text-primary animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>
                      rocket_launch
                    </span>
                    <span className="material-symbols-outlined absolute top-4 right-4 text-tertiary-fixed-dim animate-pulse">
                      spark
                    </span>
                    <span className="material-symbols-outlined absolute bottom-4 left-4 text-orange-400 animate-pulse">
                      auto_awesome
                    </span>
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">You're doing great! 🚀</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                    Consistency is the key to success. Keep practicing and you'll achieve your goals soon. Your dream
                    career is just one interview away!
                  </p>
                </div>
                <div className="shrink-0">
                  <button className="bg-primary text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all text-lg">
                    Start Practice Now
                  </button>
                </div>
              </div>
            </section>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
