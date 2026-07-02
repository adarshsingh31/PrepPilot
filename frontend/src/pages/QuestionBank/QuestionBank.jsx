import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function QuestionBank() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const topics = ["All", "Arrays", "Strings", "Linked List", "Trees", "Graphs", "DP", "System Design", "DBMS"];
  const questions = [
    { id: 1, title: "Two Sum", topic: "Arrays", difficulty: "Easy", status: "Practiced", companies: [
      { name: "Google", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK1mLeMouAgooyVzFDB4zv_SNiEaiEd_G30Ewkqv2UkOC5ImoL2XuWRSCwxis_cEIyAFS5Amz7Q_m9LF-qnTSaLaf32olNoXKEs99xesS70hwmBmJnh45Uqy_ada03Ia30RvCQKzgLq9x1kLDF-8Taid108Ud0Z1D1EM9NJTptsgqr-8jBmwh-GgGEOETRKK50snTd-HNPu7r8fbZsHQCJBNaiHrjR3aAXJBS08I-5jqyDOzb5AhCt5fgWe-gP0iF7kYkZDlO1sDA" },
      { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmXMwVcN4mAzbd29d71bhqJHs5qT48rMGMg_58BBp7aV5FgIUUSou5YnMz20uhc7Llww9-4EywlTxGKxI6XkTaSCf-54x6pgU9odwzCMhCL9uT97C3ol9S4QXW7QgRX8zdh1W3cykmZD20XgBUd8n-31z6iM1oAO6VeZLIHD6YmNbm_HM6uGgrqWBOOubI9SOBbV-vEs2D6cM5O6EFx4Y8kMpsRT2cpbJmjC5-75moXdfPJq8sa3LN98XpzWcXk3f0lPsr71ggqy0" },
    ], extraCompanies: 2 },
    { id: 2, title: "Add Two Numbers", topic: "Linked List", difficulty: "Medium", status: "Saved", companies: [
      { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCybm620CVgWS5IwAGvWTyFS-BE8rdtTrVK1FPJKjQC3Lqc1yWsGf7gndJ2Xf2oGBJRwC0DTpx2fDnoyv5Fnu8mtgEDt-1qO9tWiVAHXkSNimWlEjOK79pcYpBoNGeoPf5bIRoXH8xqNLgj-5rvVmca_WGz-dxi_2Vz2mNOUavCpdjqoLyFF7eUyHunC67BA_EWjdOjl3ROCqd2d4rStS9VvZMBQEpSVwJ5Pf5kmoMG2VMlVTjJZmfgVeYy8FSQLYtialg0RLTk3eM" },
    ], extraCompanies: 1 },
    { id: 3, title: "Longest Substring Without Repeating Characters", topic: "Strings", difficulty: "Medium", status: "Not Practiced", companies: [
      { name: "Google", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOcMlJMjv1MDDo4hTassFzZajQ8PEF5xQhsWzICwCtTk0sPbspj2IxblwpzqiQkD4JZNIZXc5VwfTGfdkDyA5cYh0SksdyFtRSPaLrJ6XtyLjq8ZM0m8yZjOz7rUa0PGSe3JPkFCJt4EIkEhcnNRozmr1KDR5HtfRPv26t99aMdTX55U0vv9ezrn7dkgT62A95TX2XfdsGh8WWnZ34Fd5ozd0tmc567fSKPiMDUlynip7Wso1-VOoMFeu1U6u1Uv7K2q4qRe9-RaQ" },
    ], extraCompanies: 2 },
    { id: 4, title: "Container With Most Water", topic: "Arrays", difficulty: "Hard", status: "Not Practiced", companies: [
      { name: "Google", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9qBM1hKicCWLdVzqVxOCxZGdAkbk7sps9gTg3m7oQdCFHqU35c2hLmZEuo-KKT9wxaklL9Ug9EnMErDaS9tcPM8i_X9POU8plFhz0WRoNPQuIQ4HkzmbeoRtmoEWMXndvfNXZc-g762EUUMwJbrbeReZZ8k7h30LfCOx2AmrKVDnf3DoIeByg9a8kOGHIZ-Gs0I9zuD3cGw4sZyesElclvg7wRSNr0bFibMn8Moqp8x37rXUOspYtBCjywCt8P9EFA2ZI795aLhE" },
    ], extraCompanies: 0 },
    { id: 5, title: "Binary Tree Inorder Traversal", topic: "Trees", difficulty: "Easy", status: "Practiced", companies: [
      { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9B3-zpksaDyH-DTGUD-CKG49InUhV2urGmANatSn0Bl7Pvbclsib9e3gxSkVPWDUJ85snR3ZvPM-6vJyZV13pTX776G6LpiQ2GbtrvM1d84Klfh3N8_rX00FSqVZaTc17KCRxikOsfIokoQSrNIJKaYoJy0dkStEM8PRls27dXxXMpn0y2fqPOJrEXRguZphj6OflxwpR2NezIMtFHbeULAoqlycB_oYtbmYjFWg2UiiaeI4wyO5Om6ehoqvja-26zBGAaGvKDYk" },
    ], extraCompanies: 1 },
  ];

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 md:mb-8">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary bg-primary-container/10 p-2 rounded-lg">inventory_2</span>
                <h2 className="font-headline-sm text-headline-sm font-bold">Question Bank</h2>
              </div>
              <p className="text-on-surface-variant">Browse questions by topic, difficulty, and company tags. Save and practice anytime.</p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all duration-100">
              <span className="material-symbols-outlined">add</span>Add Question
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 space-y-6">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-outline-variant/30 space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    { options: ["All Topics","Arrays","Linked List","Dynamic Programming"] },
                    { options: ["All Difficulties","Easy","Medium","Hard"] },
                    { options: ["All Companies","Google","Amazon","Microsoft"] },
                    { options: ["All Status","Practiced","Not Practiced","Saved"] },
                  ].map((sel, i) => (
                    <div key={i} className="relative">
                      <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                        {sel.options.map(o => <option key={o}>{o}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <button className="flex-grow bg-primary/5 text-primary font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors active:scale-95 duration-100">
                      <span className="material-symbols-outlined text-sm">filter_alt</span>Filter
                    </button>
                    <button className="p-2.5 text-on-surface-variant hover:text-primary transition-colors duration-100">Reset</button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {topics.map(topic => (
                    <button key={topic} onClick={() => setSelectedTopic(topic)}
                      className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all ${selectedTopic === topic ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-surface-container-low text-on-surface-variant hover:bg-outline-variant/30"}`}>
                      {topic}
                    </button>
                  ))}
                  <button className="flex items-center gap-1 text-primary hover:underline font-bold text-sm">More <span className="material-symbols-outlined align-middle text-sm">expand_more</span></button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden text-left">
                <div className="p-4 md:p-6 border-b border-outline-variant/30 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <h3 className="font-bold text-lg">Questions <span className="text-on-surface-variant font-normal text-sm sm:ml-2">(1,248)</span></h3>
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">Sort by: <button className="font-bold text-on-surface flex items-center gap-1">Latest <span className="material-symbols-outlined text-sm">expand_more</span></button></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low/50">
                      <tr className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                        <th className="px-6 py-4 w-12 text-center">#</th>
                        <th className="px-6 py-4 min-w-[280px]">Question</th>
                        <th className="px-6 py-4">Topic</th>
                        <th className="px-6 py-4">Difficulty</th>
                        <th className="px-6 py-4">Company Tags</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      {questions.map(q => (
                        <tr key={q.id} className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
                          <td className="px-6 py-4 text-center text-on-surface-variant">{q.id}</td>
                          <td className="px-6 py-4"><div className="flex items-center gap-3"><span className="font-bold text-on-surface group-hover:text-primary transition-colors">{q.title}</span><span className="material-symbols-outlined text-outline text-sm hover:text-primary transition-colors">bookmark</span></div></td>
                          <td className="px-6 py-4 text-on-surface-variant">{q.topic}</td>
                          <td className="px-6 py-4"><span className={`px-3 py-1 font-bold rounded-full text-xs ${q.difficulty === "Easy" ? "bg-tertiary-fixed-dim/20 text-tertiary" : "bg-secondary-container text-on-secondary-container"}`}>{q.difficulty}</span></td>
                          <td className="px-6 py-4"><div className="flex -space-x-2">{q.companies.map((c,i) => <div key={i} className="w-6 h-6 rounded-full bg-white border border-outline-variant flex items-center justify-center p-1" title={c.name}><img className="w-3 h-3 object-contain" alt={c.name} src={c.logo} /></div>)}{q.extraCompanies > 0 && <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-[8px] font-bold">+{q.extraCompanies}</div>}</div></td>
                          <td className="px-6 py-4"><span className={`font-bold text-xs flex items-center gap-1 ${q.status === "Practiced" ? "text-tertiary" : q.status === "Saved" ? "text-primary" : "text-on-surface-variant"}`}><span className={`w-1.5 h-1.5 rounded-full ${q.status === "Practiced" ? "bg-tertiary" : q.status === "Saved" ? "bg-primary" : "bg-outline"}`} />{q.status}</span></td>
                          <td className="px-6 py-4"><div className="flex justify-center items-center gap-4 text-on-surface-variant"><span className="material-symbols-outlined text-lg hover:text-primary">visibility</span><span className="material-symbols-outlined text-lg hover:text-primary">bookmark</span><span className="material-symbols-outlined text-lg hover:text-primary">more_vert</span></div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-4 md:px-6 py-4 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-container-low/20">
                  <span className="text-sm text-on-surface-variant text-center sm:text-left">Showing 1 to 5 of 1,248 questions</span>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
                    {[1,2,3].map(n => <button key={n} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${n===1?"bg-primary text-white":"text-on-surface-variant hover:bg-outline-variant/20 transition-colors"}`}>{n}</button>)}
                    <span className="px-2 text-on-surface-variant">...</span>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors text-sm font-bold">250</button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-80 space-y-6 text-left">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-outline-variant/30">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">bolt</span>Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { icon: "analytics", bg: "bg-primary-container/10", color: "text-primary", val: "1,248", label: "Total Questions" },
                    { icon: "task_alt", bg: "bg-tertiary/10", color: "text-tertiary", val: "312", label: "Practiced" },
                    { icon: "bookmark", bg: "bg-secondary-container", color: "text-on-secondary-container", val: "186", label: "Saved" },
                    { icon: "edit_note", bg: "bg-surface-container-high", color: "text-on-surface-variant", val: "94", label: "Notes Added" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className={`w-10 h-10 ${s.bg} ${s.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}><span className="material-symbols-outlined">{s.icon}</span></div>
                      <div><p className="text-xl font-bold leading-none">{s.val}</p><p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mt-1">{s.label}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-outline-variant/30">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">pie_chart</span>Top Topics</h3>
                <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-surface-container-low" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="12" />
                    <circle className="text-primary" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="62.8" strokeWidth="12" />
                    <circle className="text-tertiary-fixed-dim" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="150" strokeWidth="12" />
                    <circle className="text-secondary-container" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="210" strokeWidth="12" />
                  </svg>
                  <div className="absolute text-center"><p className="text-2xl font-bold text-on-surface leading-none">75%</p><p className="text-[10px] text-on-surface-variant uppercase font-bold">Mastery</p></div>
                </div>
                <div className="space-y-3">
                  {[["primary","Arrays","28%"],["tertiary-fixed-dim","Strings","21%"],["secondary-container","Trees","18%"],["surface-container-high","Others","33%"]].map(([c,l,v]) => (
                    <div key={l} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full bg-${c} animate-pulse`} /><span className="text-on-surface-variant font-bold">{l}</span></div>
                      <span className="font-bold">{v}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 text-primary text-sm font-bold flex items-center justify-center gap-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all">
                  View All Topics <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default QuestionBank;
