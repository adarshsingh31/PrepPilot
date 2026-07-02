import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function StudyPlan() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Arrays - Two Pointer", desc: "Revise important patterns", done: true },
    { id: 2, title: "LeetCode - 20 Problems", desc: "Easy - Medium difficulty level", done: true },
    { id: 3, title: "Dynamic Programming", desc: "Practice DP transition problems", done: false, tag: "3/5" },
    { id: 4, title: "System Design - Basics", desc: "Read and take notes from DDIA", done: false },
  ]);

  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <section className="text-left">
            <h2 className="text-2xl font-bold text-on-surface">Study Plan</h2>
            <p className="text-on-surface-variant text-sm mt-1">Plan your preparation, track progress and stay consistent.</p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-1 lg:col-span-8 space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-white p-4 md:p-5 rounded-xl border border-primary/10 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">rocket_launch</span>
                    <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full uppercase">Active</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Current Plan</p>
                  <h3 className="text-sm font-bold text-on-surface mt-1 mb-3">Placement Prep Plan</h3>
                  <div className="flex justify-between items-end mb-1"><span className="text-[11px] font-bold text-primary">45% Completed</span><span className="text-[10px] text-on-surface-variant">Target: 30 Dec, 2024</span></div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"><div className="bg-primary h-full rounded-full" style={{ width: "45%" }} /></div>
                </div>
                <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/30 shadow-sm">
                  <div className="mb-4"><span className="material-symbols-outlined text-orange-500 bg-orange-50 p-2 rounded-lg">track_changes</span></div>
                  <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Daily Goal</p>
                  <h3 className="text-sm font-bold text-on-surface mt-1 mb-3">5 Problems</h3>
                  <div className="flex justify-between items-end mb-1"><span className="text-[11px] font-bold text-orange-500">3/5 Completed</span></div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"><div className="bg-orange-500 h-full rounded-full" style={{ width: "60%" }} /></div>
                </div>
                <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/30 shadow-sm">
                  <div className="mb-4"><span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-lg">calendar_today</span></div>
                  <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">Weekly Goal</p>
                  <h3 className="text-sm font-bold text-on-surface mt-1 mb-3">35 Problems</h3>
                  <div className="flex justify-between items-end mb-1"><span className="text-[11px] font-bold text-tertiary">18/35 Completed</span></div>
                  <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"><div className="bg-tertiary h-full rounded-full" style={{ width: "52%" }} /></div>
                </div>
                <div className="bg-white p-4 md:p-5 rounded-xl border border-outline-variant/30 shadow-sm">
                  <div className="mb-2"><span className="material-symbols-outlined text-error bg-error/10 p-2 rounded-lg">local_fire_department</span></div>
                  <h3 className="text-3xl font-bold text-on-surface">7 Days</h3>
                  <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-tight mt-1">Current Streak</p>
                  <p className="text-[10px] text-on-surface-variant mt-4">Keep it up! 🔥</p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
                <div className="px-4 md:px-6 py-4 flex justify-between items-center border-b border-outline-variant/20">
                  <div><h3 className="font-bold text-on-surface">Today's Plan</h3><p className="text-[11px] text-on-surface-variant font-medium">Friday, 31 May 2024</p></div>
                  <button className="text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors border border-primary/20">View Calendar</button>
                </div>
                <div className="divide-y divide-outline-variant/20">
                  {tasks.map(task => (
                    <div key={task.id} className="px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-surface-container-low/30 transition-colors">
                      <button onClick={() => toggleTask(task.id)} className={`w-6 h-6 border-2 rounded flex items-center justify-center flex-shrink-0 transition-colors ${task.done ? "border-tertiary bg-tertiary/10" : "border-outline-variant"}`}>
                        {task.done && <span className="material-symbols-outlined text-tertiary text-lg">check</span>}
                      </button>
                      <div className="flex-1">
                        <h4 className={`text-sm font-bold ${task.done ? "text-on-surface-variant line-through" : "text-on-surface"}`}>{task.title}</h4>
                        <p className="text-xs text-on-surface-variant">{task.desc}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {task.done ? <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded">Done</span>
                          : task.tag ? <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">{task.tag}</span>
                          : <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">Pending</span>}
                        <button className="text-on-surface-variant/40 hover:text-on-surface-variant cursor-pointer"><span className="material-symbols-outlined">more_vert</span></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-4 md:p-6">
                <h3 className="font-bold text-on-surface mb-6">Plan Timeline</h3>
                <div className="relative space-y-0">
                  <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-outline-variant/30" />
                  {[
                    { dates: "May 27 - Jun 2", label: "Week 1: Fundamentals", score: "18/35", done: true },
                    { dates: "Jun 3 - Jun 9", label: "Week 2: Advanced Data Structures", score: "0/35", current: true },
                    { dates: "Jun 10 - Jun 16", label: "Week 3: Algorithms", score: "0/35" },
                    { dates: "Jun 17 - Jun 23", label: "Week 4: Dynamic Programming", score: "0/35" },
                    { dates: "Jun 24 - Jun 30", label: "Week 5: System Design", score: "0/35" },
                  ].map((item, i) => (
                    <div key={i} className={`relative flex items-center justify-between pb-8 last:pb-0 pl-10 ${!item.done && !item.current ? "opacity-60" : ""}`}>
                      <div className={`absolute left-2.5 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ${item.done ? "bg-tertiary ring-tertiary/20" : item.current ? "bg-primary ring-primary/20" : "bg-outline-variant ring-surface-container"}`} />
                      {item.current ? (
                        <div className="bg-primary/5 p-3 rounded-lg w-full mr-12 -ml-2">
                          <div className="flex items-center gap-2 mb-0.5"><h4 className="text-sm font-bold text-primary">{item.dates}</h4><span className="text-[9px] uppercase font-bold bg-primary text-white px-1.5 py-0.5 rounded">Current</span></div>
                          <p className="text-[11px] text-on-surface-variant font-medium">{item.label}</p>
                        </div>
                      ) : (
                        <div><h4 className={`text-sm font-bold ${item.done ? "text-on-surface" : "text-on-surface-variant"}`}>{item.dates}</h4><p className="text-[11px] text-on-surface-variant font-medium">{item.label}</p></div>
                      )}
                      <span className={`text-sm font-bold absolute right-0 top-1.5 ${item.done ? "text-tertiary" : item.current ? "text-primary" : "text-on-surface-variant"}`}>{item.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="col-span-1 lg:col-span-4 space-y-6">
              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
                  <h3 className="font-bold text-on-surface text-sm">Upcoming Milestones</h3>
                  <button className="text-on-surface-variant hover:text-on-surface cursor-pointer"><span className="material-symbols-outlined">more_horiz</span></button>
                </div>
                <div className="p-4 md:p-6 space-y-6">
                  {[
                    { icon: "emoji_events", label: "Complete 100 Problems", days: "In 5 days", pct: 80, color: "primary" },
                    { icon: "star", label: "Finish DP Module", days: "In 12 days", pct: 60, color: "tertiary" },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg bg-${m.color}/10 flex items-center justify-center`}><span className={`material-symbols-outlined text-${m.color} text-xl`}>{m.icon}</span></div>
                        <div className="flex-1"><h4 className="text-xs font-bold text-on-surface">{m.label}</h4><p className="text-[10px] text-on-surface-variant">{m.days}</p></div>
                        <span className={`text-[11px] font-bold text-${m.color}`}>{m.pct}%</span>
                      </div>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden"><div className={`bg-${m.color} h-full rounded-full`} style={{ width: `${m.pct}%` }} /></div>
                    </div>
                  ))}
                  <div className="opacity-70 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center"><span className="material-symbols-outlined text-on-surface-variant text-xl">record_voice_over</span></div>
                    <div className="flex-1"><h4 className="text-xs font-bold text-on-surface">Mock Interview</h4><p className="text-[10px] text-on-surface-variant">In 18 days</p></div>
                    <span className="text-[9px] font-bold text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">Not Started</span>
                  </div>
                  <button className="w-full py-2.5 text-xs font-bold text-primary hover:bg-primary/5 border border-primary/20 rounded-lg flex items-center justify-center gap-2 transition-colors">View All Milestones<span className="material-symbols-outlined text-sm">chevron_right</span></button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-4 md:p-6">
                <h3 className="font-bold text-on-surface text-sm mb-6">Study Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[["Total Time","28.5 hrs"],["Solved","128"],["Accuracy","78%"],["Mocks Taken","6"]].map(([l,v]) => (
                    <div key={l} className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20">
                      <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">{l}</p>
                      <p className="text-lg font-bold text-on-surface">{v}</p>
                      <p className="text-[10px] text-on-surface-variant mt-1">This Week</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2.5 text-xs font-bold text-primary hover:bg-primary/5 flex items-center justify-center gap-2 transition-colors rounded-lg">View Detailed Analytics<span className="material-symbols-outlined text-sm">chevron_right</span></button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default StudyPlan;
