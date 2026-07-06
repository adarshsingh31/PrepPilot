import { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";

function MockInterview() {
  const [selectedDomain, setSelectedDomain] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Medium");
  const [duration, setDuration] = useState("30 min");
  const [mode, setMode] = useState("Chat");
  const [isStarting, setIsStarting] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

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

  const durationOptions = [
    { label: "15 min", q: 3 },
    { label: "30 min", q: 6 },
    { label: "45 min", q: 9 },
    { label: "60 min", q: 12 },
  ];

  const [interviews, setInterviews] = useState([
    { date: "May 30, 2024", domain: "DSA", duration: "30 min", score: 84, status: "Completed" },
    { date: "May 29, 2024", domain: "HR Interview", duration: "20 min", score: 90, status: "Completed" },
    { date: "May 28, 2024", domain: "Backend", duration: "30 min", score: 76, status: "In Progress" },
    { date: "May 26, 2024", domain: "Frontend", duration: "30 min", score: 82, status: "Cancelled" }
  ]);

  const getEstimatedQuestions = () => {
    const opt = durationOptions.find(d => d.label === duration);
    return opt ? opt.q : 6;
  };

  const handleStartInterview = () => {
    setIsStarting(true);
    setLoadingStep(0);
    
    // Simulate steps
    setTimeout(() => setLoadingStep(1), 1000);
    setTimeout(() => setLoadingStep(2), 2200);
    setTimeout(() => setLoadingStep(3), 3500);
    
    setTimeout(() => {
      setIsStarting(false);
    }, 4500);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "In Progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Cancelled": return "bg-error/10 text-error border-error/20";
      default: return "bg-surface-container-highest text-on-surface-variant";
    }
  };

  return (
    <AppLayout>
      {isStarting && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full mx-4 flex flex-col items-center text-center">
            <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6"></div>
            <h2 className="text-xl font-bold text-on-surface mb-8">Preparing your AI Interview...</h2>
            
            <div className="w-full space-y-4 text-left">
              <div className={`flex items-center gap-3 transition-opacity duration-300 ${loadingStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <span className={`material-symbols-outlined ${loadingStep >= 1 ? 'text-emerald-500' : 'text-on-surface-variant'}`}>check_circle</span>
                <span className="font-bold text-sm text-on-surface">Selecting Questions</span>
              </div>
              <div className={`flex items-center gap-3 transition-opacity duration-300 ${loadingStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                <span className={`material-symbols-outlined ${loadingStep >= 2 ? 'text-emerald-500' : 'text-on-surface-variant'}`}>check_circle</span>
                <span className="font-bold text-sm text-on-surface">Personalizing Difficulty</span>
              </div>
              <div className={`flex items-center gap-3 transition-opacity duration-300 ${loadingStep >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                <span className={`material-symbols-outlined ${loadingStep >= 3 ? 'text-emerald-500' : 'text-on-surface-variant'}`}>check_circle</span>
                <span className="font-bold text-sm text-on-surface">Initializing Gemini AI</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-outline-variant w-full">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Estimated Time</p>
              <p className="text-sm font-bold text-primary animate-pulse">3–5 Seconds</p>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-8 md:space-y-12">
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div className="text-left">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary shadow-sm border border-primary/10">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">AI Mock Interview</h2>
              </div>
              <p className="text-on-surface-variant text-base">Practice real interviews with AI and improve your confidence.</p>
            </div>
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 border border-outline-variant rounded-xl text-primary font-bold text-sm hover:bg-surface-container-low transition-all hover:shadow-sm active:scale-95 duration-200">
              <span className="material-symbols-outlined text-xl">lightbulb</span>
              View Interview Tips
            </button>
          </div>

          <div className="bg-white rounded-2xl custom-shadow border border-outline-variant p-6 md:p-10 space-y-10">
            <div className="text-left">
              <h3 className="text-lg font-extrabold mb-6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary text-white text-xs flex items-center justify-center shadow-sm">1</span>
                Choose Interview Domain
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4">
                {domains.map((dom) => {
                  const isSelected = selectedDomain === dom.id;
                  return (
                    <button key={dom.id} onClick={() => setSelectedDomain(dom.id)}
                      className={`relative flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? "border-primary bg-primary/5 shadow-[0_4px_20px_rgba(79,70,229,0.15)] scale-[1.02]" 
                          : "border-outline-variant hover:border-primary/50 hover:bg-surface-container-low hover:scale-[1.02] hover:shadow-sm group"
                      }`}>
                      <span className={`material-symbols-outlined mb-3 text-3xl transition-colors duration-300 ${isSelected ? "text-primary" : "text-secondary group-hover:text-primary"}`}>{dom.icon}</span>
                      <span className={`text-[12px] font-bold text-center transition-colors duration-300 ${isSelected ? "text-primary" : "text-on-surface-variant group-hover:text-on-surface"}`}>{dom.label}</span>
                      {isSelected && (
                        <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-md animate-scale-in">
                          <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 text-left">
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">2</span>Difficulty Level</h3>
                <div className="flex bg-surface-container-low p-1.5 rounded-xl gap-1 relative">
                  {["Easy", "Medium", "Hard"].map((lvl) => {
                    const isSelected = difficulty === lvl;
                    let textClass = "text-on-surface-variant";
                    if (lvl === "Easy") textClass = isSelected ? "text-tertiary" : "hover:text-tertiary";
                    if (lvl === "Medium") textClass = isSelected ? "text-primary" : "hover:text-primary";
                    if (lvl === "Hard") textClass = isSelected ? "text-error" : "hover:text-error";
                    
                    return (
                      <button key={lvl} onClick={() => setDifficulty(lvl)} className={`flex-1 py-2.5 text-xs font-extrabold rounded-lg transition-all duration-300 z-10 ${isSelected ? "bg-white shadow-sm border border-outline-variant/30 scale-[1.02]" : "hover:bg-white/40"} ${textClass}`}>
                        {lvl}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">3</span>Interview Duration</h3>
                <div className="flex bg-surface-container-low p-1.5 rounded-xl gap-1">
                  {durationOptions.map((dur) => {
                    const isSelected = duration === dur.label;
                    return (
                      <button key={dur.label} onClick={() => setDuration(dur.label)} className={`flex-1 py-1.5 flex flex-col items-center justify-center rounded-lg transition-all duration-300 ${isSelected ? "bg-white text-primary shadow-sm border border-outline-variant/30 scale-[1.02]" : "text-on-surface-variant hover:bg-white/40"}`}>
                        <span className="text-xs font-extrabold">{dur.label}</span>
                        <span className={`text-[9px] font-bold mt-0.5 ${isSelected ? "text-primary/70" : "opacity-60"}`}>≈{dur.q} Qs</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">4</span>Interview Mode</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => setMode("Chat")} className={`flex-1 py-2.5 px-3 border-2 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-all duration-300 ${mode === "Chat" ? "border-primary bg-primary/5 text-primary shadow-sm scale-[1.02]" : "border-outline-variant text-on-surface-variant hover:border-primary/50 hover:bg-surface-container-low"}`}>
                    <span className="material-symbols-outlined text-lg">chat_bubble</span>Chat
                  </button>
                  <div className="flex-1 relative group">
                    <button className="w-full py-2.5 px-3 border-2 border-outline-variant/50 rounded-xl flex items-center justify-center gap-2 text-on-surface-variant font-bold text-xs cursor-not-allowed opacity-50 bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-lg">mic</span>Voice
                    </button>
                    <span className="absolute -top-2.5 -right-2 bg-surface-container-highest text-on-surface text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-outline-variant shadow-sm z-10 group-hover:scale-105 transition-transform duration-200">Coming Soon</span>
                  </div>
                  <div className="flex-1 relative group">
                    <button className="w-full py-2.5 px-3 border-2 border-outline-variant/50 rounded-xl flex items-center justify-center gap-2 text-on-surface-variant font-bold text-xs cursor-not-allowed opacity-50 bg-surface-container-lowest">
                      <span className="material-symbols-outlined text-lg">videocam</span>Video
                    </button>
                    <span className="absolute -top-2.5 -right-2 bg-surface-container-highest text-on-surface text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-outline-variant shadow-sm z-10 group-hover:scale-105 transition-transform duration-200">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant flex flex-col items-center">
              <div className="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="material-symbols-outlined text-primary/70 text-lg">tune</span>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Summary</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-bold text-on-surface">
                  <span className="flex items-center gap-1"><span className="text-on-surface-variant font-medium">Domain:</span>{selectedDomain}</span>
                  <span className="text-outline-variant hidden sm:inline">|</span>
                  <span className="flex items-center gap-1"><span className="text-on-surface-variant font-medium">Level:</span><span className={difficulty==="Easy"?"text-tertiary":difficulty==="Medium"?"text-primary":"text-error"}>{difficulty}</span></span>
                  <span className="text-outline-variant hidden sm:inline">|</span>
                  <span className="flex items-center gap-1"><span className="text-on-surface-variant font-medium">Mode:</span>{mode}</span>
                  <span className="text-outline-variant hidden sm:inline">|</span>
                  <span className="flex items-center gap-1"><span className="text-on-surface-variant font-medium">Qs:</span>~{getEstimatedQuestions()}</span>
                </div>
              </div>

              <button 
                onClick={handleStartInterview}
                disabled={isStarting}
                className="w-full max-w-sm py-4 bg-gradient-to-r from-primary to-primary-fixed text-white rounded-xl font-extrabold text-lg hover:shadow-[0_8px_25px_rgba(79,70,229,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all flex items-center justify-center gap-3 duration-200"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                Start AI Interview
              </button>
              <p className="mt-4 text-[11.5px] font-medium text-on-surface-variant flex items-center gap-1.5 justify-center text-center">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                AI will personalize questions based on your selections.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 text-left">
            <div className="col-span-1 lg:col-span-7 bg-white rounded-2xl border border-outline-variant custom-shadow overflow-hidden flex flex-col transition-all duration-300">
              <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface/50">
                <h3 className="text-lg font-extrabold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  Previous Interviews
                </h3>
                {interviews.length > 0 && (
                  <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline active:scale-95 duration-100">
                    View All<span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                )}
              </div>
              
              <div className="overflow-x-auto flex-1 flex flex-col">
                {interviews.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-on-surface-variant mb-4">
                      <span className="material-symbols-outlined text-3xl">mic</span>
                    </div>
                    <h4 className="text-base font-bold text-on-surface mb-2">No interviews yet</h4>
                    <p className="text-sm text-on-surface-variant max-w-xs mx-auto">Start your first AI interview to build your progress and get detailed feedback.</p>
                  </div>
                ) : (
                  <table className="w-full">
                    <thead className="bg-surface-container-lowest">
                      <tr>
                        <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Domain</th>
                        <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Score</th>
                        <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-right text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                      {interviews.map((row, i) => (
                        <tr key={i} className="hover:bg-surface-container-lowest transition-colors duration-200 group">
                          <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-on-surface-variant">{row.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-extrabold text-on-surface">{row.domain}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
                            {row.score ? <><span className="text-primary">{row.score}</span><span className="text-xs text-on-surface-variant">/100</span></> : <span className="text-on-surface-variant/50">-</span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2.5 py-1 rounded-full border text-[10px] font-extrabold tracking-wide ${getStatusBadge(row.status)}`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            {row.status === "Completed" ? (
                              <button className="px-4 py-1.5 bg-white border border-outline-variant rounded-lg text-xs font-bold text-primary hover:bg-primary/5 hover:border-primary/30 transition-all active:scale-95 shadow-sm">
                                View Report
                              </button>
                            ) : (
                              <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant/50 cursor-not-allowed">
                                Unavailable
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 md:gap-8">
              <div className="bg-white rounded-2xl border border-outline-variant custom-shadow p-6 md:p-8 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-extrabold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">monitoring</span>
                    Performance
                  </h3>
                  <select className="bg-surface-container-low border border-outline-variant/50 rounded-lg text-xs font-bold py-1.5 px-3 focus:ring-2 focus:ring-primary outline-none cursor-pointer hover:bg-surface-container transition-colors">
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "mic", value: "12", label: "Completed", bg: "bg-primary/10", color: "text-primary" },
                    { icon: "stars", value: "82%", label: "Avg Score", bg: "bg-tertiary/10", color: "text-tertiary" },
                    { icon: "military_tech", value: "88", label: "Best Score", bg: "bg-emerald-500/10", color: "text-emerald-600" },
                    { icon: "local_fire_department", value: "7 Days", label: "Streak", bg: "bg-error/10", color: "text-error", fill: true },
                  ].map((s, i) => (
                    <div key={i} className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/50 text-left hover:border-primary/30 hover:shadow-sm transition-all duration-300 group cursor-default">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center ${s.color} group-hover:scale-110 transition-transform duration-300`}>
                          <span className="material-symbols-outlined text-xl" style={s.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>{s.icon}</span>
                        </div>
                        <span className="text-2xl font-extrabold text-on-surface">{s.value}</span>
                      </div>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 relative group flex-1">
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wide text-on-surface-variant mb-4 flex items-center gap-1.5">
                    Score Trend <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  </h4>
                  <div className="h-32 relative">
                    <svg className="w-full h-full drop-shadow-sm" viewBox="0 0 400 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="premium-gradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,100 C50,80 100,90 150,60 C200,30 250,70 300,40 C350,10 400,20 400,20 L400,120 L0,120 Z" fill="url(#premium-gradient)" className="transition-all duration-1000" />
                      <path d="M0,100 C50,80 100,90 150,60 C200,30 250,70 300,40 C350,10 400,20 400,20" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="4" className="transition-all duration-1000 shadow-xl" />
                      {[{cx:0,cy:100},{cx:150,cy:60},{cx:300,cy:40},{cx:400,cy:20}].map((p,i) => (
                        <circle key={i} cx={p.cx} cy={p.cy} fill="white" r="5" stroke="#4f46e5" strokeWidth="3" className="hover:r-7 transition-all duration-200 cursor-pointer" />
                      ))}
                    </svg>
                  </div>
                  <div className="flex justify-between mt-3 px-1">
                    {["May 24","May 26","May 28","May 30"].map(d => <span key={d} className="text-[10px] text-on-surface-variant font-bold">{d}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-surface-container-high to-surface rounded-3xl overflow-hidden shadow-sm border border-outline-variant flex flex-col md:flex-row relative text-left">
            <div className="flex-1 p-8 md:p-12 space-y-6 md:space-y-8 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-container text-primary flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">star_rate</span>
                </div>
                <h3 className="text-2xl font-extrabold text-on-surface">Tips to Perform Better</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Speak clearly and at a moderate pace to ensure the AI accurately transcribes and evaluates your communication skills.",
                  "Structure your answers using the STAR method (Situation, Task, Action, Result) for behavioral questions.",
                  "Think out loud during coding or technical rounds to explain your logic and problem-solving approach.",
                  "Don't hesitate to ask clarifying questions if the AI's prompt seems ambiguous, just like in a real interview."
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <span className="material-symbols-outlined text-[14px] font-bold">arrow_forward</span>
                    </div>
                    <p className="text-sm font-medium text-on-surface-variant leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[400px] relative bg-primary/5 flex items-center justify-center overflow-hidden shrink-0">
              <img alt="AI Interview Illustration" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/AP1WRLsVoEXl4Dm66kK0tBRJcqvx7TkZ45GizSchGPNRjdFI5-uNFQCSQli5TdlDu2qM-cFlWTo79JQOfFp0ok9Z1EXH3HpVG4oD1boTZhoXBvCoV-ujGT7ShXXgXJEzbyrdzK2F55DJ5eAGWgrSDZmMIwd0MJz7QYYp6q5hEfLUKcC7g2NeCz7K84rqC_RmI7WkUfISEnbUBiaIbw2ENYFMEEMhupydTV4id2B0X-1LGKdcIf4AM6jSKPuEAj8" />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-transparent to-transparent md:block hidden" />
            </div>
          </div>
          <div className="h-12" />
        </div>
      </div>
    </AppLayout>
  );
}

export default MockInterview;
