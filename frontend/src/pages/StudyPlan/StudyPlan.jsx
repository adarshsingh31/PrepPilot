import { Link } from "react-router-dom";
import { useState } from "react";

function StudyPlan() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Arrays - Two Pointer", desc: "Revise important patterns", done: true },
    { id: 2, title: "LeetCode - 20 Problems", desc: "Easy - Medium difficulty level", done: true },
    { id: 3, title: "Dynamic Programming", desc: "Practice DP transition problems", done: false, tag: "3/5" },
    { id: 4, title: "System Design - Basics", desc: "Read and take notes from DDIA", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
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
            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md">Dashboard</span>
            </Link>
            <Link to="/mock-interview" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
              <span className="material-symbols-outlined">video_chat</span>
              <span className="font-label-md">AI Mock Interview</span>
            </Link>
            <Link to="/resume-analyzer" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
              <span className="material-symbols-outlined">description</span>
              <span className="font-label-md">Resume Analyzer</span>
            </Link>
            <Link to="/coding-practice" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
              <span className="material-symbols-outlined">code</span>
              <span className="font-label-md">Coding Practice</span>
            </Link>
            <Link to="/progress" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
              <span className="material-symbols-outlined">trending_up</span>
              <span className="font-label-md">Progress</span>
            </Link>
            <Link to="/question-bank" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
              <span className="material-symbols-outlined">inventory_2</span>
              <span className="font-label-md">Question Bank</span>
            </Link>
            <Link to="/study-plan" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_note</span>
              <span className="font-label-md">Study Plan</span>
            </Link>
            <div className="pt-4 mt-4 border-t border-outline-variant">
              <Link to="/profile" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
                <span className="material-symbols-outlined">person</span>
                <span className="font-label-md">Profile</span>
              </Link>
              <Link to="/settings" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
                <span className="material-symbols-outlined">settings</span>
                <span className="font-label-md">Settings</span>
              </Link>
              <Link to="/help-support" className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all">
                <span className="material-symbols-outlined">help</span>
                <span className="font-label-md">Help Center</span>
              </Link>
            </div>
          </nav>
          <div className="mt-auto">
            <Link to="/" className="text-error hover:bg-error-container/20 transition-colors duration-200 px-4 py-3 rounded-lg flex items-center gap-3 w-full">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md">Log Out</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          {/* TopNavBar */}
          <header className="sticky top-0 z-40 flex items-center justify-between h-16 px-8 bg-surface border-b border-outline-variant">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full bg-surface-container-low border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Search anything...   ⌘ K"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 border-r border-outline-variant pr-6">
                <button className="relative text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-error text-white text-[10px] flex items-center justify-center rounded-full border-2 border-surface">3</span>
                </button>
                <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">help</span>
                </button>
              </div>
              <div className="flex items-center gap-3 cursor-pointer group">
                <img
                  alt="Adarsh Singh"
                  className="w-10 h-10 rounded-full border-2 border-primary/10 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3aeXXq564bzdGuCqcbWNF-dOfIFpIYMbP8XkHixVQqKCbbNB9VzndXnNw_nmhHL1N_HUkbQpAzF8I8pGAWNEABqBUoW-c-qNDulmV0FGnSx1YxlHlTg3D-VmmOZRkIYtXm4Zfu7GoWhbowV-1rJOfokqJMXOjupUAo-ceJm1b_YVGu9qRLCilyet5ZnLEW1FbZ00f2qltZoGT0Ji3iwHyfHUwcphU5RHx6ORoNLtgbHA164iWvIb_Vvq-h8XrZ5tozdBDkqU_Hwk"
                />
                <div className="text-left">
                  <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Adarsh Singh</p>
                  <p className="text-[11px] text-on-surface-variant">NIT Raipur</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">

              {/* Page Header */}
              <section>
                <h2 className="text-2xl font-bold text-on-surface">Study Plan</h2>
                <p className="text-on-surface-variant text-sm mt-1">Plan your preparation, track progress and stay consistent.</p>
              </section>

              <div className="grid grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="col-span-12 lg:col-span-8 space-y-8">

                  {/* Goal Summary Cards */}
                  <div className="grid grid-cols-4 gap-4">
                    {/* Active Plan */}
                    <div className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">rocket_launch</span>
                        <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full uppercase">Active</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Current Plan</p>
                      <h3 className="text-sm font-bold text-on-surface mt-1 mb-3">Placement Prep Plan</h3>
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-[11px] font-bold text-primary">45% Completed</span>
                        <span className="text-[10px] text-on-surface-variant">Target: 30 Dec, 2024</span>
                      </div>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>

                    {/* Daily Goal */}
                    <div className="bg-white p-5 rounded-xl border border-outline-variant/30 shadow-sm">
                      <div className="mb-4">
                        <span className="material-symbols-outlined text-orange-500 bg-orange-50 p-2 rounded-lg">track_changes</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Daily Goal</p>
                      <h3 className="text-sm font-bold text-on-surface mt-1 mb-3">5 Problems</h3>
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-[11px] font-bold text-orange-500">3/5 Completed</span>
                      </div>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>

                    {/* Weekly Goal */}
                    <div className="bg-white p-5 rounded-xl border border-outline-variant/30 shadow-sm">
                      <div className="mb-4">
                        <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-lg">calendar_today</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Weekly Goal</p>
                      <h3 className="text-sm font-bold text-on-surface mt-1 mb-3">35 Problems</h3>
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-[11px] font-bold text-tertiary">18/35 Completed</span>
                      </div>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-tertiary h-full rounded-full" style={{ width: "52%" }}></div>
                      </div>
                    </div>

                    {/* Streak */}
                    <div className="bg-white p-5 rounded-xl border border-outline-variant/30 shadow-sm">
                      <div className="mb-2">
                        <span className="material-symbols-outlined text-error bg-error/10 p-2 rounded-lg">local_fire_department</span>
                      </div>
                      <h3 className="text-3xl font-bold text-on-surface">7 Days</h3>
                      <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-tight mt-1">Current Streak</p>
                      <p className="text-[10px] text-on-surface-variant mt-4">Keep it up! 🔥</p>
                    </div>
                  </div>

                  {/* Today's Plan */}
                  <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 flex justify-between items-center border-b border-outline-variant/20">
                      <div>
                        <h3 className="font-bold text-on-surface">Today's Plan</h3>
                        <p className="text-[11px] text-on-surface-variant font-medium">Friday, 31 May 2024</p>
                      </div>
                      <button className="text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors border border-primary/20">View Calendar</button>
                    </div>
                    <div className="divide-y divide-outline-variant/20">
                      {tasks.map((task) => (
                        <div key={task.id} className="px-6 py-4 flex items-center gap-4 hover:bg-surface-container-low/30 transition-colors">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className={`w-6 h-6 border-2 rounded flex items-center justify-center flex-shrink-0 transition-colors ${task.done ? "border-tertiary bg-tertiary/10" : "border-outline-variant"}`}
                          >
                            {task.done && <span className="material-symbols-outlined text-tertiary text-lg">check</span>}
                          </button>
                          <div className="flex-1">
                            <h4 className={`text-sm font-bold ${task.done ? "text-on-surface-variant line-through" : "text-on-surface"}`}>{task.title}</h4>
                            <p className="text-xs text-on-surface-variant">{task.desc}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            {task.done ? (
                              <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded">Done</span>
                            ) : task.tag ? (
                              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">{task.tag}</span>
                            ) : (
                              <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">Pending</span>
                            )}
                            <button className="text-on-surface-variant/40 hover:text-on-surface-variant cursor-pointer">
                              <span className="material-symbols-outlined">more_vert</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan Timeline */}
                  <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-6">
                    <h3 className="font-bold text-on-surface mb-6">Plan Timeline</h3>
                    <div className="relative space-y-0">
                      <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-outline-variant/30"></div>

                      {[
                        { dates: "May 27 - Jun 2", label: "Week 1: Fundamentals", score: "18/35", done: true },
                        { dates: "Jun 3 - Jun 9", label: "Week 2: Advanced Data Structures", score: "0/35", current: true },
                        { dates: "Jun 10 - Jun 16", label: "Week 3: Algorithms", score: "0/35" },
                        { dates: "Jun 17 - Jun 23", label: "Week 4: Dynamic Programming", score: "0/35" },
                        { dates: "Jun 24 - Jun 30", label: "Week 5: System Design", score: "0/35" },
                      ].map((item, i) => (
                        <div key={i} className={`relative flex items-center justify-between pb-8 last:pb-0 pl-10 ${!item.done && !item.current ? "opacity-60" : ""}`}>
                          <div className={`absolute left-2.5 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ${item.done ? "bg-tertiary ring-tertiary/20" : item.current ? "bg-primary ring-primary/20" : "bg-outline-variant ring-surface-container"}`}></div>
                          {item.current ? (
                            <div className="bg-primary/5 p-3 rounded-lg w-full mr-12 -ml-2">
                              <div className="flex items-center gap-2 mb-0.5">
                                <h4 className="text-sm font-bold text-primary">{item.dates}</h4>
                                <span className="text-[9px] uppercase font-bold bg-primary text-white px-1.5 py-0.5 rounded">Current</span>
                              </div>
                              <p className="text-[11px] text-on-surface-variant font-medium">{item.label}</p>
                            </div>
                          ) : (
                            <div>
                              <h4 className={`text-sm font-bold ${item.done ? "text-on-surface" : "text-on-surface-variant"}`}>{item.dates}</h4>
                              <p className="text-[11px] text-on-surface-variant font-medium">{item.label}</p>
                            </div>
                          )}
                          <span className={`text-sm font-bold absolute right-0 top-1.5 ${item.done ? "text-tertiary" : item.current ? "text-primary" : "text-on-surface-variant"}`}>{item.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar Stats */}
                <aside className="col-span-12 lg:col-span-4 space-y-6">

                  {/* Upcoming Milestones */}
                  <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
                      <h3 className="font-bold text-on-surface text-sm">Upcoming Milestones</h3>
                      <button className="text-on-surface-variant hover:text-on-surface cursor-pointer"><span className="material-symbols-outlined">more_horiz</span></button>
                    </div>
                    <div className="p-6 space-y-6">
                      {[
                        { icon: "emoji_events", label: "Complete 100 Problems", days: "In 5 days", pct: 80, color: "primary", bg: "primary/10" },
                        { icon: "star", label: "Finish DP Module", days: "In 12 days", pct: 60, color: "tertiary", bg: "tertiary/10" },
                      ].map((m, i) => (
                        <div key={i}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-lg bg-${m.bg} flex items-center justify-center`}>
                              <span className={`material-symbols-outlined text-${m.color} text-xl`}>{m.icon}</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xs font-bold text-on-surface">{m.label}</h4>
                              <p className="text-[10px] text-on-surface-variant">{m.days}</p>
                            </div>
                            <span className={`text-[11px] font-bold text-${m.color}`}>{m.pct}%</span>
                          </div>
                          <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                            <div className={`bg-${m.color} h-full rounded-full`} style={{ width: `${m.pct}%` }}></div>
                          </div>
                        </div>
                      ))}
                      <div className="opacity-70 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface-variant text-xl">record_voice_over</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-bold text-on-surface">Mock Interview</h4>
                          <p className="text-[10px] text-on-surface-variant">In 18 days</p>
                        </div>
                        <span className="text-[9px] font-bold text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">Not Started</span>
                      </div>
                      <button className="w-full py-2.5 text-xs font-bold text-primary hover:bg-primary/5 border border-primary/20 rounded-lg flex items-center justify-center gap-2 transition-colors">
                        View All Milestones
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>

                  {/* Study Stats */}
                  <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-6">
                    <h3 className="font-bold text-on-surface text-sm mb-6">Study Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Total Time", val: "28.5 hrs", sub: "This Week" },
                        { label: "Solved", val: "128", sub: "This Week" },
                        { label: "Accuracy", val: "78%", sub: "This Week" },
                        { label: "Mocks Taken", val: "6", sub: "This Week" },
                      ].map((s, i) => (
                        <div key={i} className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20">
                          <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">{s.label}</p>
                          <p className="text-lg font-bold text-on-surface">{s.val}</p>
                          <p className="text-[10px] text-on-surface-variant mt-1">{s.sub}</p>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-6 py-2.5 text-xs font-bold text-primary hover:bg-primary/5 flex items-center justify-center gap-2 transition-colors rounded-lg">
                      View Detailed Analytics
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </aside>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudyPlan;
