import { Link } from "react-router-dom";
import { useState } from "react";

function CodingPractice() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Arrays");
  const [difficultyFilter, setDifficultyFilter] = useState("All Difficulties");
  const [sortBy, setSortBy] = useState("Newest");

  const topics = ["Arrays", "Strings", "Linked List", "Stacks", "Queues", "Trees", "Graphs", "DP"];

  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", acceptance: "53.21%", tags: ["Array", "Hash Table"] },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", acceptance: "42.11%", tags: ["Linked List", "Math"] },
    { id: 3, title: "Median of Two Sorted Arrays", difficulty: "Hard", acceptance: "29.73%", tags: ["Binary Search"], isHard: true }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* SideNavBar Shell Mapping */}
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
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">dashboard</span>
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
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
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

        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          <header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
          <div className="flex items-center flex-1 max-w-2xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full pl-12 pr-12 py-2.5 bg-surface rounded-full border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md outline-none"
                placeholder="Search problems, topics, or companies..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 px-1.5 py-0.5 border border-outline-variant rounded-md text-[10px] font-bold text-outline">
                <span>⌘</span>
                <span>K</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 ml-12">
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-surface-container-lowest"></span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-label-md text-label-md text-on-surface">Adarsh Singh</p>
                <p className="text-[10px] text-on-surface-variant">NIT Raipur</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="Adarsh Singh Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTxQZPZT_DY702nQli85WRZD3FdHx-tDM4iihHHlehtw-3I4aiZmPpyekpvwwT5ZxZTbSgs6ryPTTcdRGKC8kqppGKXMCq_0YEkklxOdd9DeqBuxssxG-ATnkgSwg5oOtkJfjRppAAbDh80HWgC9z1HHpQLKVUjq4_cg6isKr0z-ijypDYHEZbR0yf-zgCWu0Tf7N0CfnyX_9oxadelmAd8wma_dsZZuWRxmpBOopwMSoVCT8Kgd952rsIo0qA78ltf7yfS4GzFtc"
                />
              </div>
              <span className="material-symbols-outlined text-outline">expand_more</span>
            </div>
          </div>
        </header>

          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto flex gap-8">
          <div className="flex-grow max-w-5xl text-left">
            <div className="flex items-start gap-5 mb-10">
              <div className="w-14 h-14 bg-primary-container/10 text-primary rounded-2xl flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Coding Practice</h2>
                <p className="text-on-surface-variant font-body-md text-body-md">
                  Practice problems, improve your skills and track your progress.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl p-6 premium-shadow mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex-grow min-w-[200px] relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="Search problems..."
                    type="text"
                  />
                </div>
                <select className="px-4 py-2 bg-white border border-outline-variant rounded-xl text-label-md font-label-md focus:outline-none cursor-pointer">
                  <option>All Topics</option>
                  <option>Arrays</option>
                  <option>Strings</option>
                </select>
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="px-4 py-2 bg-white border border-outline-variant rounded-xl text-label-md font-label-md focus:outline-none cursor-pointer"
                >
                  <option>All Difficulties</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
                <button className="bg-primary hover:bg-primary-fixed-dim text-white px-6 py-2 rounded-xl flex items-center gap-2 font-bold transition-all active:scale-95 duration-100">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  Filter
                </button>
              </div>
              <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
                      selectedTopic === topic
                        ? "bg-primary text-white"
                        : "bg-surface text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary"
                    }`}
                  >
                    {topic}
                  </span>
                ))}
                <button className="flex items-center gap-1 text-xs font-bold text-primary ml-2">
                  More <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Problems</h3>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                Sort by:{" "}
                <span className="font-bold text-on-surface cursor-pointer flex items-center gap-1">
                  {sortBy} <span className="material-symbols-outlined text-sm">expand_more</span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {problems.map((prob) => (
                <div
                  key={prob.id}
                  className={`bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 card-lift premium-shadow ${
                    prob.isHard ? "border-l-4 border-error" : ""
                  }`}
                >
                  <div className="w-10 h-10 flex items-center justify-center font-bold text-outline bg-surface rounded-lg">
                    {prob.id}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-bold text-on-surface text-lg hover:text-primary cursor-pointer transition-colors">
                      {prob.title}
                    </h4>
                    <div className="flex gap-2 mt-2">
                      {prob.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase font-black px-2 py-0.5 bg-surface-container rounded-md text-on-surface-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`font-bold text-sm px-4 ${
                      prob.difficulty === "Easy"
                        ? "text-tertiary-container"
                        : prob.difficulty === "Medium"
                        ? "text-orange-500"
                        : "text-error"
                    }`}
                  >
                    {prob.difficulty}
                  </div>
                  <div className="text-right px-8">
                    <p className="text-[10px] text-outline font-bold uppercase">Acceptance</p>
                    <p className="font-bold text-on-surface">{prob.acceptance}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="p-2 text-outline hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined">bookmark</span>
                    </button>
                    <button className="px-8 py-2.5 bg-primary text-white rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
                      Solve
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-10 py-4 border-2 border-dashed border-outline-variant rounded-2xl text-on-surface-variant font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
              View More Problems <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </button>

            <div className="mt-16 bg-gradient-to-r from-surface-container-lowest to-primary-container/5 rounded-3xl p-8 flex items-center gap-8 premium-shadow relative overflow-hidden text-left">
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">emoji_events</span>
              </div>
              <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center relative shadow-inner shrink-0">
                <span className="material-symbols-outlined text-5xl text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emoji_events
                </span>
              </div>
              <div className="flex-grow">
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Consistency is the key!</h4>
                <p className="text-on-surface-variant max-w-sm mt-1">
                  You're doing great. Keep solving problems daily and improve your problem solving skills.
                </p>
              </div>
              <div className="flex items-center gap-12 text-center shrink-0">
                <div>
                  <p className="text-[10px] font-black uppercase text-outline mb-1">Current Streak</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-black text-on-surface">7 Days</span>
                    <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                  </div>
                </div>
                <div className="w-[1px] h-12 bg-outline-variant"></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-outline mb-1">Best Streak</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-black text-on-surface">15 Days</span>
                    <span className="material-symbols-outlined text-yellow-500">military_tech</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-96 space-y-8 shrink-0 text-left">
            <div className="bg-surface-container-lowest p-8 rounded-3xl premium-shadow">
              <div className="flex justify-between items-center mb-8">
                <h5 className="font-bold text-on-surface">Your Progress</h5>
                <select className="text-xs font-bold text-on-surface-variant bg-surface px-2 py-1 rounded-md border-none focus:ring-0 outline-none">
                  <option>This Week</option>
                </select>
              </div>
              <div className="flex items-center gap-8">
                <div className="relative w-28 h-28 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeWidth="8" />
                    <circle
                      className="text-primary"
                      cx="56"
                      cy="56"
                      fill="transparent"
                      r="48"
                      stroke="currentColor"
                      strokeDasharray="301.6"
                      strokeDashoffset="84"
                      strokeLinecap="round"
                      strokeWidth="8"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-on-surface">72%</span>
                    <span className="text-[10px] text-outline font-bold uppercase">Solved</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-tertiary-fixed rounded-lg flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-black text-on-surface leading-none">84</p>
                      <p className="text-[10px] text-outline font-bold uppercase">Solved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                    </div>
                    <div>
                      <p className="text-lg font-black text-on-surface leading-none">12.5 hrs</p>
                      <p className="text-[10px] text-outline font-bold uppercase">Time Spent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-3xl premium-shadow">
              <h5 className="font-bold text-on-surface mb-8">Practice by Difficulty</h5>
              <div className="flex items-end justify-between px-4 h-32 relative">
                <div className="absolute inset-0 flex flex-col justify-between border-b border-outline-variant/30 py-1 pointer-events-none opacity-20">
                  <div className="w-full border-t border-outline-variant"></div>
                  <div className="w-full border-t border-outline-variant"></div>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <span className="text-[10px] font-bold text-outline opacity-0 group-hover:opacity-100 transition-opacity">120</span>
                  <div className="w-10 bg-tertiary-fixed rounded-t-lg transition-all h-28 group-hover:bg-tertiary"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant">Easy</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <span className="text-[10px] font-bold text-outline opacity-0 group-hover:opacity-100 transition-opacity">86</span>
                  <div className="w-10 bg-orange-100 rounded-t-lg transition-all h-20 group-hover:bg-orange-500"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant">Medium</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <span className="text-[10px] font-bold text-outline opacity-0 group-hover:opacity-100 transition-opacity">42</span>
                  <div className="w-10 bg-error-container rounded-t-lg transition-all h-10 group-hover:bg-error"></div>
                  <span className="text-[10px] font-bold text-on-surface-variant">Hard</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-3xl premium-shadow">
              <div className="flex justify-between items-center mb-6">
                <h5 className="font-bold text-on-surface">Daily Challenges</h5>
                <button className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline cursor-pointer">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Two Sum", difficulty: "Easy", xp: 10, icon: "calendar_today", color: "blue" },
                  { title: "Valid Parentheses", difficulty: "Easy", xp: 10, icon: "fact_check", color: "primary" }
                ].map((challenge, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        challenge.color === "blue"
                          ? "bg-blue-50 text-blue-600 border-blue-100"
                          : "bg-primary-container/10 text-primary border-primary/10"
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">{challenge.icon}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                        {challenge.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] font-black uppercase text-tertiary-container">{challenge.difficulty}</span>
                        <span className="text-[9px] text-outline font-bold">+{challenge.xp} XP</span>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 border border-outline-variant rounded-lg text-xs font-bold hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95">
                      Start
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-900 rounded-3xl p-8 relative overflow-hidden text-white card-lift">
              <div className="relative z-10">
                <h5 className="text-xl font-headline-sm text-headline-sm mb-2">Stuck on a problem?</h5>
                <p className="text-primary-fixed text-sm mb-6 max-w-[180px]">Get hints, solutions and editorials to level up.</p>
                <button className="bg-white text-indigo-900 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:shadow-xl transition-all">
                  Explore Solutions
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-40 h-40">
                <img
                  className="w-full h-full object-contain"
                  alt="Stuck Help Illustration"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAInqq_slMvPqIV5dzx7TUFuJptV0V28SJ5UTYdgfi8G_1VCw816rO7O7jkpMLicb8NPNLaQAhIf33c9zufqK8TZMk_qF8KXArUzkLaQr01HjKKlNRtm5oVhkjLl6kid2O9VfwJDEw6CSSoAUH-aiQ2hGdzm5fyCf_C_xuwoiCcFJ7EgfSCWcalKtercQtZ5YaHLAkg5b1Z-DypGkO5CM9lIhI4pHJRCSx-DPnbzAX_IU_JVu9jfXVe6rDeNBszkEX3iLxdZlESS7k"
                />
              </div>
            </div>
          </div>
        </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CodingPractice;
