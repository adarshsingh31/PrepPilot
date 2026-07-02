import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function MockInterview() {
  const [selectedDomain, setSelectedDomain] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Medium");
  const [duration, setDuration] = useState("30 min");
  const [mode, setMode] = useState("Voice");

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
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
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

          <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant p-4 md:p-8 space-y-8 md:space-y-10">
            <div className="text-left">
              <h3 className="text-body-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-[12px] flex items-center justify-center">1</span>
                Choose Interview Domain
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4">
                {domains.map((dom) => {
                  const isSelected = selectedDomain === dom.id;
                  return (
                    <button key={dom.id} onClick={() => setSelectedDomain(dom.id)}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer ${isSelected ? "border-primary bg-primary/5 ring-4 ring-primary/10" : "border-outline-variant hover:border-primary hover:bg-primary/5 group"}`}>
                      <span className={`material-symbols-outlined mb-2 text-3xl ${isSelected ? "text-primary" : "text-secondary group-hover:text-primary"}`}>{dom.icon}</span>
                      <span className={`text-[12px] font-bold text-center ${isSelected ? "text-primary" : "text-secondary group-hover:text-primary"}`}>{dom.label}</span>
                      {isSelected && <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center"><span className="material-symbols-outlined text-white text-[12px] font-bold">check</span></div>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 text-left">
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">2</span>Difficulty Level</h3>
                <div className="flex flex-wrap sm:flex-nowrap bg-surface-container-low p-1 rounded-xl gap-1">
                  {["Easy", "Medium", "Hard"].map((lvl) => {
                    const isSelected = difficulty === lvl;
                    let textClass = "text-on-surface-variant";
                    if (lvl === "Easy") textClass = isSelected ? "text-tertiary font-bold" : "text-tertiary-container hover:bg-tertiary-container/5";
                    if (lvl === "Medium") textClass = isSelected ? "text-primary font-bold" : "text-on-surface-variant hover:bg-white/50";
                    if (lvl === "Hard") textClass = isSelected ? "text-error font-bold" : "text-error hover:bg-error/5";
                    return <button key={lvl} onClick={() => setDifficulty(lvl)} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${isSelected ? "bg-white shadow-sm border border-outline-variant/20" : ""} ${textClass}`}>{lvl}</button>;
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">3</span>Interview Duration</h3>
                <div className="flex flex-wrap sm:flex-nowrap bg-surface-container-low p-1 rounded-xl gap-1">
                  {["15 min", "30 min", "45 min", "60 min"].map((dur) => {
                    const isSelected = duration === dur;
                    return <button key={dur} onClick={() => setDuration(dur)} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${isSelected ? "bg-white text-primary shadow-sm border border-outline-variant/20" : "text-on-surface-variant hover:bg-white/50"}`}>{dur}</button>;
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">4</span>Interview Mode</h3>
                <div className="flex flex-wrap sm:flex-nowrap gap-2">
                  <button onClick={() => setMode("Voice")} className={`flex-1 py-2 px-3 border-2 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-all ${mode === "Voice" ? "border-primary bg-primary/5 text-primary" : "border-outline-variant text-on-surface-variant hover:bg-surface-container-low"}`}>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>Voice
                  </button>
                  <button onClick={() => setMode("Chat")} className={`flex-1 py-2 px-3 border-2 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-all ${mode === "Chat" ? "border-primary bg-primary/5 text-primary" : "border-outline-variant text-on-surface-variant hover:bg-surface-container-low"}`}>
                    <span className="material-symbols-outlined text-lg">chat_bubble</span>Chat
                  </button>
                  <div className="flex-1 relative">
                    <button className="w-full py-2 px-3 border border-outline-variant rounded-xl flex items-center justify-center gap-2 text-on-surface-variant/50 font-bold text-xs cursor-not-allowed opacity-60" disabled>
                      <span className="material-symbols-outlined text-lg">videocam</span>Video
                    </button>
                    <span className="absolute -top-2 -right-1 bg-surface-container-highest text-primary text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-primary/20 scale-90">Soon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center gap-3">
              <button className="w-full max-w-sm py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 duration-100">
                <span className="material-symbols-outlined">bolt</span>Start Interview
              </button>
              <p className="text-[11px] text-on-surface-variant flex items-center gap-1.5 justify-center">
                <span className="material-symbols-outlined text-[14px]">info</span>
                AI will personalize questions based on your level and chosen domain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 text-left">
            <div className="col-span-1 lg:col-span-7 bg-surface rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                <h3 className="text-body-lg font-bold">Previous Interviews</h3>
                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline active:scale-95 duration-100">View All Interviews<span className="material-symbols-outlined text-sm">arrow_forward</span></button>
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
                        <td className="px-6 py-4 whitespace-nowrap text-xs font-bold"><span className="text-primary">{row.score}</span>/100</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold">{row.status}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap text-right"><button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-lg active:scale-90 duration-100">visibility</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 md:gap-8">
              <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm p-4 md:p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-body-lg font-bold">Performance Overview</h3>
                  <select className="bg-surface-container-low border-none rounded-lg text-xs font-bold py-1 px-3 focus:ring-1 focus:ring-primary outline-none"><option>This Week</option><option>This Month</option></select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "mic", value: "12", label: "Interviews Completed", bg: "bg-primary/10", color: "text-primary" },
                    { icon: "stars", value: "82%", label: "Average Score", bg: "bg-tertiary-fixed", color: "text-on-tertiary-fixed-variant" },
                    { icon: "military_tech", value: "88", label: "Best Score", bg: "bg-primary-fixed", color: "text-on-primary-fixed" },
                    { icon: "local_fire_department", value: "7 Days", label: "Current Streak", bg: "bg-error/10", color: "text-error", fill: true },
                  ].map((s, i) => (
                    <div key={i} className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/30 text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center ${s.color}`}>
                          <span className="material-symbols-outlined text-xl" style={s.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>{s.icon}</span>
                        </div>
                        <span className="text-[20px] font-bold">{s.value}</span>
                      </div>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-on-surface-variant mb-4">Score Trend</h4>
                  <div className="line-chart-container relative">
                    <svg className="w-full h-full" viewBox="0 0 400 120">
                      <defs><linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" /><stop offset="100%" stopColor="#4f46e5" stopOpacity="0" /></linearGradient></defs>
                      <path d="M0,100 Q50,90 80,60 T160,50 T240,70 T320,40 T400,30 V120 H0 Z" fill="url(#gradient)" />
                      <path d="M0,100 Q50,90 80,60 T160,50 T240,70 T320,40 T400,30" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="3" />
                      {[{cx:80,cy:60},{cx:160,cy:50},{cx:240,cy:70},{cx:320,cy:40}].map((p,i) => <circle key={i} cx={p.cx} cy={p.cy} fill="#4f46e5" r="4" />)}
                    </svg>
                    <div className="flex justify-between mt-2">
                      {["May 24","May 26","May 28","May 30"].map(d => <span key={d} className="text-[10px] text-on-surface-variant font-bold">{d}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-high rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row relative text-left">
            <div className="flex-1 p-6 md:p-10 space-y-6 md:space-y-8 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">star_rate</span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">Tips to Perform Better</h3>
              </div>
              <ul className="space-y-4">
                {["Speak clearly and at a moderate pace to ensure the AI accurately transcribes and evaluates your communication skills.","Structure your answers using the STAR method (Situation, Task, Action, Result) for behavioral questions.","Think out loud during coding or technical rounds to explain your logic and problem-solving approach.","Don't hesitate to ask clarifying questions if the AI's prompt seems ambiguous, just like in a real interview."].map((tip, i) => (
                  <li key={i} className="flex items-start gap-4"><span className="material-symbols-outlined text-primary mt-1">arrow_forward</span><p className="text-body-md text-on-surface-variant leading-relaxed">{tip}</p></li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[450px] relative bg-primary/5 flex items-center justify-center overflow-hidden">
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
