import { Link } from "react-router-dom";
import { useState } from "react";

function Progress() {
  const [searchQuery, setSearchQuery] = useState("");

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
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">code</span>
              <span className="font-label-md">Coding Practice</span>
            </Link>
            <Link
              to="/progress"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
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
          {/* TopNavBar */}
          <header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="Search anything..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-white border border-outline-variant rounded px-1.5 py-0.5 text-on-surface-variant font-mono">
              ⌘ K
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors relative cursor-pointer active:scale-95 duration-100">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors cursor-pointer active:scale-95 duration-100">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="h-8 w-px bg-outline-variant mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-bold text-sm leading-none">Adarsh Singh</p>
                <p className="text-xs text-on-surface-variant">NIT Raipur</p>
              </div>
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                alt="Adarsh Singh Headshot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEUgcxWySt18FA6WbDEkM28fbTjBb013VOhTCOyOt3MZ3GKzgj90rSQdEfuPKDnuqcanxQTHByU1JzPnaMd4kj7xL1QuGgBq0k0gl-1FbLLcfIaxV2Od1hRWjhGMN5rJ8IY3YNCMLLJHFxVeGcDPcegrMx89q3SC829HKAp4TgX-tJnjq6FyLacxK3BfGHge6vE1gVHBkhXbTZ0ku9uNthZG_HKOzzLqs5a4giOcJ1BYDlhLnp7AW7tK0lJ--cffQ13XoodgG-J_g"
              />
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>
        </header>

          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-end">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">analytics</span>
              </div>
              <div>
                <h2 className="text-headline-md font-headline-md">Progress</h2>
                <p className="text-on-surface-variant">Track your overall progress and improvement over time.</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-outline-variant rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-lg">calendar_today</span>
              This Month
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-outline-variant/30 metric-glow flex flex-col justify-between h-40 group hover:-translate-y-1 transition-transform text-left">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mic</span>
                </div>
                <div className="text-right text-tertiary font-bold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span> 20%
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xs text-on-surface-variant font-medium">Mock Interviews</p>
                <h3 className="text-headline-sm font-bold">24</h3>
                <p className="text-[10px] text-on-surface-variant mt-1">Completed</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant/30 metric-glow flex flex-col justify-between h-40 group hover:-translate-y-1 transition-transform text-left">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-tertiary-fixed-dim/10 rounded-lg flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div className="text-right text-tertiary font-bold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span> 12%
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xs text-on-surface-variant font-medium">Resume Score</p>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-headline-sm font-bold text-tertiary">82</h3>
                  <span className="text-sm font-medium text-on-surface-variant">/100</span>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-1">Average Score</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant/30 metric-glow flex flex-col justify-between h-40 group hover:-translate-y-1 transition-transform text-left">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="text-right text-tertiary font-bold text-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span> 28%
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xs text-on-surface-variant font-medium">Problems Solved</p>
                <h3 className="text-headline-sm font-bold">128</h3>
                <p className="text-[10px] text-on-surface-variant mt-1">Total Solved</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-outline-variant/30 metric-glow flex flex-col justify-between h-40 group hover:-translate-y-1 transition-transform text-left">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    local_fire_department
                  </span>
                </div>
                <div className="text-right text-tertiary font-bold text-xs flex items-center gap-1">
                  +2 days
                </div>
              </div>
              <div className="mt-2">
                <p className="text-xs text-on-surface-variant font-medium">Current Streak</p>
                <h3 className="text-headline-sm font-bold text-[#f59e0b]">7 Days</h3>
                <p className="text-[10px] text-on-surface-variant mt-1">Keep it up!</p>
              </div>
            </div>
          </div>

          {/* Performance & Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Area (Col Span 8) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Interview Performance Chart */}
              <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm text-left">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h4 className="font-bold text-lg">Interview Performance</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        <span className="text-xs text-on-surface-variant">Score</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full border-2 border-primary-container/40"></span>
                        <span className="text-xs text-on-surface-variant">Average Score</span>
                      </div>
                    </div>
                  </div>
                  <select className="bg-surface-container-low border-none rounded-lg text-xs font-semibold px-3 py-2 outline-none">
                    <option>This Month</option>
                    <option>Last Quarter</option>
                  </select>
                </div>
                {/* SVG Graph */}
                <div className="relative h-64 w-full mb-10 px-2">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-outline-variant/20"></div>
                  <div className="absolute bottom-0 left-0 h-full w-[1px] bg-outline-variant/20"></div>
                  <div className="absolute w-full h-full flex flex-col justify-between opacity-10 pointer-events-none">
                    <div className="w-full h-[1px] bg-on-surface-variant"></div>
                    <div className="w-full h-[1px] bg-on-surface-variant"></div>
                    <div className="w-full h-[1px] bg-on-surface-variant"></div>
                    <div className="w-full h-[1px] bg-on-surface-variant"></div>
                  </div>
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path className="text-primary/30" d="M0,80 L20,70 L40,75 L60,65 L80,68 L100,55" fill="none" stroke="currentColor" strokeDasharray="4" strokeWidth="2" />
                    <path className="text-primary" d="M0,85 L20,65 L35,55 L50,60 L65,40 L85,45 L100,30" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle className="fill-primary" cx="20" cy="65" r="3" />
                    <circle className="fill-primary" cx="35" cy="55" r="3" />
                    <circle className="fill-primary" cx="65" cy="40" r="3" />
                    <circle className="fill-primary" cx="100" cy="30" r="3" />
                  </svg>
                  <div className="absolute -bottom-8 w-full flex justify-between text-[10px] text-on-surface-variant font-medium px-1">
                    <span>May 1</span><span>May 6</span><span>May 11</span><span>May 16</span><span>May 21</span><span>May 26</span><span>May 31</span>
                  </div>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  <div className="bg-surface-container-low p-4 rounded-lg text-center">
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Best Score</p>
                    <h5 className="text-headline-sm font-bold">94<span className="text-sm font-medium">/100</span></h5>
                    <p className="text-[10px] text-on-surface-variant">May 28</p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg text-center border-l-4 border-primary">
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Average Score</p>
                    <h5 className="text-headline-sm font-bold">82<span className="text-sm font-medium">/100</span></h5>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg text-center">
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Total Interviews</p>
                    <h5 className="text-headline-sm font-bold">24</h5>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg text-center">
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold mb-1">Improvement</p>
                    <h5 className="text-headline-sm font-bold text-tertiary">
                      <span className="material-symbols-outlined text-sm align-middle">north</span> 16%
                    </h5>
                    <p className="text-[10px] text-on-surface-variant">vs last month</p>
                  </div>
                </div>
              </div>

              {/* Detailed Trends Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                {/* Resume Score Trend */}
                <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold">Resume Score Trend</h4>
                    <select className="text-xs bg-transparent font-semibold border-none outline-none">
                      <option>This Month</option>
                    </select>
                  </div>
                  <div className="h-48 w-full relative">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path className="text-tertiary" d="M0,80 L20,75 L40,65 L60,72 L80,60 L100,50" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle className="fill-white stroke-tertiary stroke-2" cx="80" cy="60" r="4" />
                    </svg>
                  </div>
                </div>
                {/* Time Spent */}
                <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold">Time Spent</h4>
                    <select className="text-xs bg-transparent font-semibold border-none outline-none">
                      <option>This Month</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle className="stroke-surface-container" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                        <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="60, 100" strokeLinecap="round" strokeWidth="3" />
                        <circle className="stroke-tertiary" cx="18" cy="18" fill="none" r="16" strokeDasharray="25, 100" strokeDashoffset="-60" strokeLinecap="round" strokeWidth="3" />
                      </svg>
                      <div className="absolute text-center">
                        <p className="text-lg font-bold leading-none">12.5</p>
                        <p className="text-[10px] text-on-surface-variant font-medium">hrs</p>
                      </div>
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          <span>Mock Interviews</span>
                        </div>
                        <span className="font-bold">6.2 hrs</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                          <span>Coding Practice</span>
                        </div>
                        <span className="font-bold">4.1 hrs</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                          <span>Others</span>
                        </div>
                        <span className="font-bold">2.2 hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Rail (Col Span 4) */}
            <div className="lg:col-span-4 space-y-8 text-left">
              {/* Coding Progress Donut */}
              <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold">Coding Progress</h4>
                  <select className="text-xs bg-transparent font-semibold border-none outline-none">
                    <option>This Month</option>
                  </select>
                </div>
                <div className="flex flex-col items-center mb-8">
                  <div className="w-32 h-32 relative flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle className="stroke-tertiary-fixed-dim" cx="18" cy="18" fill="none" r="16" strokeDasharray="50, 100" strokeLinecap="round" strokeWidth="4" />
                      <circle className="stroke-[#f59e0b]" cx="18" cy="18" fill="none" r="16" strokeDasharray="30, 100" strokeDashoffset="-50" strokeLinecap="round" strokeWidth="4" />
                      <circle className="stroke-error" cx="18" cy="18" fill="none" r="16" strokeDasharray="15, 100" strokeDashoffset="-80" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-2xl font-bold leading-tight">128</span>
                      <span className="block text-[8px] uppercase text-on-surface-variant font-bold tracking-widest">Solved</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6 w-full text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                        <span className="text-[10px] text-on-surface-variant">Easy</span>
                      </div>
                      <span className="font-bold text-sm">120</span>
                    </div>
                    <div className="border-x border-outline-variant/30">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                        <span className="text-[10px] text-on-surface-variant">Medium</span>
                      </div>
                      <span className="font-bold text-sm">86</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                        <span className="text-[10px] text-on-surface-variant">Hard</span>
                      </div>
                      <span className="font-bold text-sm">42</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Top Topics Solved</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between mb-1"><span>Arrays</span><span>32</span></div>
                      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>Dynamic Programming</span><span>28</span></div>
                      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>Graphs</span><span>24</span></div>
                      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full text-center text-xs font-bold text-primary mt-4 py-2 hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-center gap-2">
                    View All Topics <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Milestones Card */}
              <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold">Milestones</h4>
                  <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                </div>
                <div className="space-y-4 text-xs">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-tertiary-fixed-dim/10 rounded-lg flex-shrink-0 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        emoji_events
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Completed 20 Mock Interviews</p>
                      <p className="text-[10px] text-on-surface-variant">May 28 • Keep practicing!</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#f59e0b]/10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#f59e0b]">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        local_fire_department
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">7 Days Streak</p>
                      <p className="text-[10px] text-on-surface-variant">May 26 • You're on fire! 🔥</p>
                    </div>
                  </div>
                </div>
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

export default Progress;
