import { Link } from "react-router-dom";
import { useState } from "react";

function MockInterview() {
  const [selectedDomain, setSelectedDomain] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Medium");
  const [duration, setDuration] = useState("30 min");
  const [mode, setMode] = useState("Voice");
  const [searchQuery, setSearchQuery] = useState("");

  const domains = [
    { id: "DSA", label: "DSA", icon: "code" },
    { id: "Frontend", label: "Frontend", icon: "laptop_mac" },
    { id: "Backend", label: "Backend", icon: "storage" },
    { id: "Full Stack", label: "Full Stack", icon: "layers" },
    { id: "System Design", label: "System Design", icon: "hub" },
    { id: "HR", label: "HR Interview", icon: "groups" },
    { id: "DBMS", label: "DBMS", icon: "database" },
    { id: "OS", label: "OS", icon: "settings_input_component" },
    { id: "OOPs", label: "OOPs", icon: "view_in_ar" }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* SideNavBar */}
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
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>video_chat</span>
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

        {/* Main Content */}
        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          {/* TopNavBar */}
          <header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-full max-w-lg">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                  search
                </span>
                <input
                  className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-12 py-2 text-body-md focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Search anything..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-surface-container-high px-1.5 py-0.5 rounded text-[10px] font-bold text-on-surface-variant border border-outline-variant">
                  ⌘ K
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 pl-4">
              <div className="flex gap-4">
                <button
                  className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors cursor-pointer relative"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  notifications
                  <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
                </button>
                <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors cursor-pointer">
                  help
                </button>
              </div>
              <div className="flex items-center gap-3 pl-6 border-l border-outline-variant cursor-pointer group">
                <div className="text-right">
                  <p className="text-sm font-bold text-on-surface leading-none">Adarsh Singh</p>
                  <p className="text-[10px] text-on-surface-variant">NIT Raipur</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Adarsh Singh Profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLTBaXqU50OHalo3npkirAOkgagQQuw5HzRzVypuxWU6hQ8a_h1F92hjnNyAT0j0tF3br0q7-EcGaMyDFyYOBTMedCCgLwhLGcJ9dMjQhAOcOExZRqBY84Wd_h1BI-c378Kx9HidUrEl-vwxNX-Mmc5hdlG7o_KVWBOTBivy5dNyRQR5pD__b8gtyOxDBRUd-OANNfyEFglhDPT8ZQDpqBrrTcROAAWiCFTVTejG-CfIW5qrqvg43GEvLID18TvUloGRJCiFn4jTY"
                  />
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-y-0.5 transition-transform">
                  expand_more
                </span>
              </div>
            </div>
          </header>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">
              {/* Header Section */}
              <div className="flex justify-between items-end">
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        auto_awesome
                      </span>
                    </div>
                    <h2 className="text-headline-md font-headline-md text-on-surface">AI Mock Interview</h2>
                  </div>
                  <p className="text-on-surface-variant text-body-md">Practice real interviews with AI and improve your confidence.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-primary font-semibold text-sm hover:bg-surface-container-high transition-all active:scale-95 duration-100">
                  <span className="material-symbols-outlined text-xl">lightbulb</span>
                  View Interview Tips
                </button>
              </div>

              {/* Configuration Main Card */}
              <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant p-8 space-y-10">
                {/* Step 1: Choose Domain */}
                <div className="text-left">
                  <h3 className="text-body-lg font-bold mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-[12px] flex items-center justify-center">1</span>
                    Choose Interview Domain
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-4">
                    {domains.map((dom) => {
                      const isSelected = selectedDomain === dom.id;
                      return (
                        <button
                          key={dom.id}
                          onClick={() => setSelectedDomain(dom.id)}
                          className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            isSelected
                              ? "border-primary bg-primary/5 ring-4 ring-primary/10"
                              : "border-outline-variant hover:border-primary hover:bg-primary/5 group"
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined mb-2 text-3xl ${
                              isSelected ? "text-primary" : "text-secondary group-hover:text-primary"
                            }`}
                          >
                            {dom.icon}
                          </span>
                          <span
                            className={`text-[12px] font-bold text-center ${
                              isSelected ? "text-primary" : "text-secondary group-hover:text-primary"
                            }`}
                          >
                            {dom.label}
                          </span>
                          {isSelected && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Secondary Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                  {/* Step 2: Difficulty */}
                  <div>
                    <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">
                        2
                      </span>
                      Difficulty Level
                    </h3>
                    <div className="flex bg-surface-container-low p-1 rounded-xl gap-1">
                      {["Easy", "Medium", "Hard"].map((lvl) => {
                        const isSelected = difficulty === lvl;
                        let textClass = "text-on-surface-variant";
                        if (lvl === "Easy") textClass = isSelected ? "text-tertiary font-bold" : "text-tertiary-container hover:bg-tertiary-container/5";
                        if (lvl === "Medium") textClass = isSelected ? "text-primary font-bold" : "text-on-surface-variant hover:bg-white/50";
                        if (lvl === "Hard") textClass = isSelected ? "text-error font-bold" : "text-error hover:bg-error/5";

                        return (
                          <button
                            key={lvl}
                            onClick={() => setDifficulty(lvl)}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              isSelected ? "bg-white shadow-sm border border-outline-variant/20" : ""
                            } ${textClass}`}
                          >
                            {lvl}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Duration */}
                  <div>
                    <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">
                        3
                      </span>
                      Interview Duration
                    </h3>
                    <div className="flex bg-surface-container-low p-1 rounded-xl gap-1">
                      {["15 min", "30 min", "45 min", "60 min"].map((dur) => {
                        const isSelected = duration === dur;
                        return (
                          <button
                            key={dur}
                            onClick={() => setDuration(dur)}
                            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                              isSelected
                                ? "bg-white text-primary shadow-sm border border-outline-variant/20"
                                : "text-on-surface-variant hover:bg-white/50"
                            }`}
                          >
                            {dur}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 4: Mode */}
                  <div>
                    <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">
                        4
                      </span>
                      Interview Mode
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setMode("Voice")}
                        className={`flex-1 py-2 px-3 border-2 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                          mode === "Voice"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                          mic
                        </span>
                        Voice
                      </button>
                      <button
                        onClick={() => setMode("Chat")}
                        className={`flex-1 py-2 px-3 border-2 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                          mode === "Chat"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">chat_bubble</span>
                        Chat
                      </button>
                      <div className="flex-1 relative">
                        <button
                          className="w-full py-2 px-3 border border-outline-variant rounded-xl flex items-center justify-center gap-2 text-on-surface-variant/50 font-bold text-xs cursor-not-allowed opacity-60"
                          disabled
                        >
                          <span className="material-symbols-outlined text-lg">videocam</span>
                          Video
                        </button>
                        <span className="absolute -top-2 -right-1 bg-surface-container-highest text-primary text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-primary/20 scale-90">
                          Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 flex flex-col items-center gap-3">
                  <button className="w-full max-w-sm py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 duration-100">
                    <span className="material-symbols-outlined">bolt</span>
                    Start Interview
                  </button>
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1.5 justify-center">
                    <span className="material-symbols-outlined text-[14px]">info</span>
                    AI will personalize questions based on your level and chosen domain.
                  </p>
                </div>
              </div>

              {/* Bottom Grid */}
              <div className="grid grid-cols-12 gap-8 text-left">
                {/* Previous Interviews Table */}
                <div className="col-span-12 lg:col-span-7 bg-surface rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
                  <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                    <h3 className="text-body-lg font-bold">Previous Interviews</h3>
                    <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline active:scale-95 duration-100">
                      View All Interviews
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-surface-container-low">
                        <tr>
                          <th className="px-6 py-4 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                          <th className="px-6 py-4 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Domain</th>
                          <th className="px-6 py-4 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Duration</th>
                          <th className="px-6 py-4 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Score</th>
                          <th className="px-6 py-4 text-left text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-right text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        {[
                          { date: "May 30, 2024", domain: "DSA", duration: "30 min", score: 84, status: "Completed" },
                          { date: "May 29, 2024", domain: "HR Interview", duration: "20 min", score: 90, status: "Completed" },
                          { date: "May 28, 2024", domain: "Backend", duration: "30 min", score: 76, status: "Completed" },
                          { date: "May 26, 2024", domain: "Frontend", duration: "30 min", score: 82, status: "Completed" }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-surface-container-low transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">{row.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-on-surface">{row.domain}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-on-surface-variant">{row.duration}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-bold">
                              <span className="text-primary">{row.score}</span>/100
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold">
                                {row.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-lg active:scale-90 duration-100">
                                visibility
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Performance Overview & Trend */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
                  <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-body-lg font-bold">Performance Overview</h3>
                      <select className="bg-surface-container-low border-none rounded-lg text-xs font-bold py-1 px-3 focus:ring-1 focus:ring-primary outline-none">
                        <option>This Week</option>
                        <option>This Month</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Stats Card 1 */}
                      <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/30 text-left">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-xl">mic</span>
                          </div>
                          <span className="text-[20px] font-bold">12</span>
                        </div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">Interviews Completed</p>
                        <p className="text-[10px] text-tertiary-container font-bold mt-1 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">trending_up</span> 20%{" "}
                          <span className="font-normal opacity-70">from last week</span>
                        </p>
                      </div>
                      {/* Stats Card 2 */}
                      <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/30 text-left">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                            <span className="material-symbols-outlined text-xl">stars</span>
                          </div>
                          <span className="text-[20px] font-bold">82%</span>
                        </div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">Average Score</p>
                        <p className="text-[10px] text-tertiary-container font-bold mt-1 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">trending_up</span> 8%{" "}
                          <span className="font-normal opacity-70">from last week</span>
                        </p>
                      </div>
                      {/* Stats Card 3 */}
                      <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/30 text-left">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                            <span className="material-symbols-outlined text-xl">military_tech</span>
                          </div>
                          <span className="text-[20px] font-bold">
                            88<span className="text-xs text-on-surface-variant font-normal">/100</span>
                          </span>
                        </div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">Best Score</p>
                        <p className="text-[10px] text-on-surface-variant font-normal mt-1 italic">DSA Interview</p>
                      </div>
                      {/* Stats Card 4 */}
                      <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/30 text-left">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center text-error">
                            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                              local_fire_department
                            </span>
                          </div>
                          <span className="text-[20px] font-bold">7 Days</span>
                        </div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">Current Streak</p>
                        <p className="text-[10px] text-on-surface-variant font-normal mt-1">Keep it up! 🔥</p>
                      </div>
                    </div>
                    {/* Trend Chart Area */}
                    <div className="mt-8">
                      <div className="flex items-center justify-between mb-4">
                        <h4 class="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Score Trend</h4>
                      </div>
                      <div className="line-chart-container relative">
                        <svg className="w-full h-full" viewBox="0 0 400 120">
                          <defs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,100 Q50,90 80,60 T160,50 T240,70 T320,40 T400,30 V120 H0 Z" fill="url(#gradient)" />
                          <path d="M0,100 Q50,90 80,60 T160,50 T240,70 T320,40 T400,30" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="3" />
                          <circle cx="80" cy="60" fill="#4f46e5" r="4" />
                          <circle cx="160" cy="50" fill="#4f46e5" r="4" />
                          <circle cx="240" cy="70" fill="#4f46e5" r="4" />
                          <circle cx="320" cy="40" fill="#4f46e5" r="4" />
                        </svg>
                        <div className="flex justify-between mt-2">
                          <span className="text-[10px] text-on-surface-variant font-bold">May 24</span>
                          <span className="text-[10px] text-on-surface-variant font-bold">May 26</span>
                          <span className="text-[10px] text-on-surface-variant font-bold">May 28</span>
                          <span className="text-[10px] text-on-surface-variant font-bold">May 30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Panel / Tips Section */}
              <div className="bg-surface-container-high rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row relative text-left">
                <div className="flex-1 p-10 space-y-8 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">star_rate</span>
                    </div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface">Tips to Perform Better</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Speak clearly and at a moderate pace to ensure the AI accurately transcribes and evaluates your communication skills.",
                      "Structure your answers using the STAR method (Situation, Task, Action, Result) for behavioral questions.",
                      "Think out loud during coding or technical rounds to explain your logic and problem-solving approach.",
                      "Don't hesitate to ask clarifying questions if the AI's prompt seems ambiguous, just like in a real interview."
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                        <p className="text-body-md text-on-surface-variant leading-relaxed">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-[450px] relative bg-primary/5 flex items-center justify-center overflow-hidden">
                  <img
                    alt="AI Interview Illustration"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLsVoEXl4Dm66kK0tBRJcqvx7TkZ45GizSchGPNRjdFI5-uNFQCSQli5TdlDu2qM-cFlWTo79JQOfFp0ok9Z1EXH3HpVG4oD1boTZhoXBvCoV-ujGT7ShXXgXJEzbyrdzK2F55DJ5eAGWgrSDZmMIwd0MJz7QYYp6q5hEfLUKcC7g2NeCz7K84rqC_RmI7WkUfISEnbUBiaIbw2ENYFMEEMhupydTV4id2B0X-1LGKdcIf4AM6jSKPuEAj8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-transparent to-transparent md:block hidden"></div>
                </div>
              </div>
            </div>
            <div className="h-12"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MockInterview;
