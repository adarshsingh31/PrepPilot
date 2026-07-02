import AppLayout from "../../components/AppLayout";

function Progress() {
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
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-outline-variant rounded-lg text-sm font-semibold hover:bg-surface-container-low transition-all">
              <span className="material-symbols-outlined text-lg">calendar_today</span>This Month<span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "mic", label: "Mock Interviews", value: "24", sub: "Completed", trend: "+20%", color: "text-primary", bg: "bg-primary/5" },
              { icon: "description", label: "Resume Score", value: "82", sub: "/100 Average", trend: "+12%", color: "text-tertiary", bg: "bg-tertiary-fixed-dim/10" },
              { icon: "code", label: "Problems Solved", value: "128", sub: "Total Solved", trend: "+28%", color: "text-primary", bg: "bg-primary/5" },
              { icon: "local_fire_department", label: "Current Streak", value: "7 Days", sub: "Keep it up!", trend: "+2 days", color: "text-primary-container", bg: "bg-primary-container/10", fill: true },
            ].map((m, i) => (
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
              <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl border border-outline-variant/30 shadow-sm text-left">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h4 className="font-bold text-lg">Interview Performance</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-primary" /><span className="text-xs text-on-surface-variant">Score</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2 border-primary-container/40" /><span className="text-xs text-on-surface-variant">Average Score</span></div>
                    </div>
                  </div>
                  <select className="bg-surface-container-low border-none rounded-lg text-xs font-semibold px-3 py-2 outline-none"><option>This Month</option><option>Last Quarter</option></select>
                </div>
                <div className="relative h-64 w-full mb-10 px-2">
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-outline-variant/20" />
                  <div className="absolute bottom-0 left-0 h-full w-[1px] bg-outline-variant/20" />
                  <div className="absolute w-full h-full flex flex-col justify-between opacity-10 pointer-events-none">
                    {[...Array(4)].map((_, i) => <div key={i} className="w-full h-[1px] bg-on-surface-variant" />)}
                  </div>
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path className="text-primary/30" d="M0,80 L20,70 L40,75 L60,65 L80,68 L100,55" fill="none" stroke="currentColor" strokeDasharray="4" strokeWidth="2" />
                    <path className="text-primary" d="M0,85 L20,65 L35,55 L50,60 L65,40 L85,45 L100,30" fill="none" stroke="currentColor" strokeWidth="3" />
                    {[[20,65],[35,55],[65,40],[100,30]].map(([cx,cy],i) => <circle key={i} className="fill-primary" cx={cx} cy={cy} r="3" />)}
                  </svg>
                  <div className="absolute -bottom-8 w-full flex justify-between text-[10px] text-on-surface-variant font-medium px-1">
                    {["May 1","May 6","May 11","May 16","May 21","May 26","May 31"].map(d => <span key={d}>{d}</span>)}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  {[
                    { label: "Best Score", value: "94", sub: "May 28" },
                    { label: "Average Score", value: "82", highlight: true },
                    { label: "Total Interviews", value: "24" },
                    { label: "Improvement", value: "↑ 16%", sub: "vs last month", green: true },
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
                <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold">Resume Score Trend</h4>
                    <select className="text-xs bg-transparent font-semibold border-none outline-none"><option>This Month</option></select>
                  </div>
                  <div className="h-48 w-full relative">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path className="text-tertiary" d="M0,80 L20,75 L40,65 L60,72 L80,60 L100,50" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle className="fill-white stroke-tertiary stroke-2" cx="80" cy="60" r="4" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold">Time Spent</h4>
                    <select className="text-xs bg-transparent font-semibold border-none outline-none"><option>This Month</option></select>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 relative flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle className="stroke-surface-container" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                        <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="60, 100" strokeLinecap="round" strokeWidth="3" />
                        <circle className="stroke-tertiary" cx="18" cy="18" fill="none" r="16" strokeDasharray="25, 100" strokeDashoffset="-60" strokeLinecap="round" strokeWidth="3" />
                      </svg>
                      <div className="absolute text-center"><p className="text-lg font-bold leading-none">12.5</p><p className="text-[10px] text-on-surface-variant font-medium">hrs</p></div>
                    </div>
                    <div className="flex-grow space-y-2">
                      {[["primary","Mock Interviews","6.2 hrs"],["tertiary","Coding Practice","4.1 hrs"],["secondary-container","Others","2.2 hrs"]].map(([c,l,v]) => (
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
              <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold">Coding Progress</h4>
                  <select className="text-xs bg-transparent font-semibold border-none outline-none"><option>This Month</option></select>
                </div>
                <div className="flex flex-col items-center mb-8">
                  <div className="w-32 h-32 relative flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle className="stroke-tertiary-fixed-dim" cx="18" cy="18" fill="none" r="16" strokeDasharray="50, 100" strokeLinecap="round" strokeWidth="4" />
                      <circle className="stroke-[#f59e0b]" cx="18" cy="18" fill="none" r="16" strokeDasharray="30, 100" strokeDashoffset="-50" strokeLinecap="round" strokeWidth="4" />
                      <circle className="stroke-error" cx="18" cy="18" fill="none" r="16" strokeDasharray="15, 100" strokeDashoffset="-80" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                    <div className="absolute text-center"><span className="text-2xl font-bold leading-tight">128</span><span className="block text-[8px] uppercase text-on-surface-variant font-bold tracking-widest">Solved</span></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6 w-full text-center">
                    {[["tertiary-fixed-dim","Easy","120"],["[#f59e0b]","Medium","86"],["error","Hard","42"]].map(([c,l,v],i) => (
                      <div key={l} className={i===1?"border-x border-outline-variant/30":""}>
                        <div className="flex items-center justify-center gap-1 mb-1"><span className={`w-1.5 h-1.5 rounded-full bg-${c}`} /><span className="text-[10px] text-on-surface-variant">{l}</span></div>
                        <span className="font-bold text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Top Topics Solved</p>
                  {[["Arrays","32","80%"],["Dynamic Programming","28","70%"],["Graphs","24","60%"]].map(([topic,count,w]) => (
                    <div key={topic} className="space-y-2 text-xs">
                      <div className="flex justify-between mb-1"><span>{topic}</span><span>{count}</span></div>
                      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: w }} /></div>
                    </div>
                  ))}
                  <button className="w-full text-center text-xs font-bold text-primary mt-4 py-2 hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-center gap-2">
                    View All Topics <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold">Milestones</h4>
                  <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                </div>
                <div className="space-y-4 text-xs">
                  {[
                    { icon: "emoji_events", bg: "bg-tertiary-fixed-dim/10", color: "text-tertiary", title: "Completed 20 Mock Interviews", sub: "May 28 • Keep practicing!" },
                    { icon: "local_fire_department", bg: "bg-[#f59e0b]/10", color: "text-[#f59e0b]", title: "7 Days Streak", sub: "May 26 • You're on fire! 🔥" }
                  ].map((m, i) => (
                    <div key={i} className="flex gap-3">
                      <div className={`w-8 h-8 ${m.bg} rounded-lg flex-shrink-0 flex items-center justify-center ${m.color}`}>
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{m.icon}</span>
                      </div>
                      <div><p className="font-bold text-on-surface">{m.title}</p><p className="text-[10px] text-on-surface-variant">{m.sub}</p></div>
                    </div>
                  ))}
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
