import { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import { getAnalytics } from "../../services/analyticsService";
import { getQuestions } from "../../services/questionService";

function CodingPractice() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [difficultyFilter, setDifficultyFilter] = useState("All Difficulties");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [showAllTopicsPills, setShowAllTopicsPills] = useState(false);

  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await getAnalytics();
        if (response.success) {
          setAnalytics(response.analytics);
        }
      } catch (err) {
        console.error("Failed to fetch analytics:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  useEffect(() => {
    const fetchQuestionsData = async () => {
      setLoadingQuestions(true);
      try {
        const params = {};
        let backendTopic = selectedTopic;
        if (selectedTopic === "DP") backendTopic = "Dynamic Programming";
        if (selectedTopic === "Stacks" || selectedTopic === "Queues") backendTopic = "Stacks & Queues";
        
        if (selectedTopic !== "All Topics") params.topic = backendTopic;
        if (difficultyFilter !== "All Difficulties") params.difficulty = difficultyFilter;
        if (searchQuery.trim()) params.search = searchQuery.trim();

        const response = await getQuestions(params);
        if (response.success) {
          setQuestions(response.questions);
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      } finally {
        setLoadingQuestions(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchQuestionsData();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [selectedTopic, difficultyFilter, searchQuery]);

  const allTopics = ["Arrays", "Strings", "Linked List", "Stacks", "Queues", "Trees", "Graphs", "DP", "Binary Search", "Greedy", "Backtracking"];
  const displayedTopics = showAllTopicsPills ? allTopics : allTopics.slice(0, 8);

  const completionPct = analytics?.completionPercentage || 0;
  const practiced = analytics?.practicedQuestions || 0;
  const easy = analytics?.difficultyStats?.easy || 0;
  const medium = analytics?.difficultyStats?.medium || 0;
  const hard = analytics?.difficultyStats?.hard || 0;
  
  // Calculate relative heights for difficulty bars (max 28, meaning h-28 = 112px, so map 0-100% of max value to tailwind h- classes)
  const maxDifficulty = Math.max(easy, medium, hard, 1);
  const getHClass = (val) => {
    const p = val / maxDifficulty;
    if (p === 0) return "h-2";
    if (p < 0.3) return "h-10";
    if (p < 0.7) return "h-20";
    return "h-28";
  };

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-grow w-full lg:max-w-5xl text-left">
            <div className="flex items-start gap-5 mb-10">
              <div className="w-14 h-14 bg-primary-container/10 text-primary rounded-2xl flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Coding Practice</h2>
                <p className="text-on-surface-variant font-body-md text-body-md">Practice problems, improve your skills and track your progress.</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl p-4 md:p-6 premium-shadow mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mb-6">
                <div className="flex-grow min-w-[200px] relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                  <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Search problems..." type="text" />
                </div>
                <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} className="px-4 py-2 bg-white border border-outline-variant rounded-xl text-label-md font-label-md focus:outline-none cursor-pointer">
                  <option value="All Topics">All Topics</option>
                  {allTopics.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)} className="px-4 py-2 bg-white border border-outline-variant rounded-xl text-label-md font-label-md focus:outline-none cursor-pointer">
                  <option>All Difficulties</option><option>Easy</option><option>Medium</option><option>Hard</option>
                </select>
                <button className="bg-primary hover:bg-primary-fixed-dim text-white px-6 py-2 rounded-xl flex items-center gap-2 font-bold transition-all active:scale-95 duration-100">
                  <span className="material-symbols-outlined text-sm">filter_list</span>Filter
                </button>
              </div>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {displayedTopics.map((topic) => (
                  <span key={topic} onClick={() => setSelectedTopic(topic)}
                    className={`px-5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${selectedTopic === topic ? "bg-primary text-white" : "bg-surface text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary"}`}>
                    {topic}
                  </span>
                ))}
                <button onClick={() => setShowAllTopicsPills(!showAllTopicsPills)} className="flex items-center gap-1 text-xs font-bold text-primary ml-2 cursor-pointer">{showAllTopicsPills ? "Less" : "More"} <span className="material-symbols-outlined text-sm">{showAllTopicsPills ? "expand_less" : "expand_more"}</span></button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Problems</h3>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">Sort by: <span className="font-bold text-on-surface cursor-pointer flex items-center gap-1">{sortBy} <span className="material-symbols-outlined text-sm">expand_more</span></span></div>
            </div>

            <div className="space-y-4">
              {loadingQuestions ? (
                <div className="text-center py-8 text-on-surface-variant font-bold">Loading questions...</div>
              ) : questions.length === 0 ? (
                <div className="text-center py-8 text-on-surface-variant font-bold">No problems found.</div>
              ) : (
                questions.map((prob, index) => (
                  <div key={prob._id} className={`bg-surface-container-lowest p-4 md:p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 md:gap-6 card-lift premium-shadow ${prob.difficulty === "Hard" ? "border-l-4 border-error" : ""}`}>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="w-10 h-10 flex items-center justify-center font-bold text-outline bg-surface rounded-lg shrink-0">{index + 1}</div>
                      <div className="flex-1 text-left">
                        <a href={prob.link} target="_blank" rel="noopener noreferrer" className="font-bold text-on-surface text-base md:text-lg hover:text-primary cursor-pointer transition-colors leading-tight block">{prob.title}</a>
                        <div className="flex flex-wrap gap-2 mt-1.5">
                          <span className="text-[10px] uppercase font-black px-2 py-0.5 bg-surface-container rounded-md text-on-surface-variant whitespace-nowrap">{prob.topic}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 w-full md:w-auto md:flex-1 md:ml-auto">
                      <div className={`font-bold text-sm w-1/3 md:w-auto md:px-4 ${prob.difficulty === "Easy" ? "text-tertiary-container" : prob.difficulty === "Medium" ? "text-orange-500" : "text-error"}`}>{prob.difficulty}</div>
                      <div className="text-left md:text-right w-1/3 md:w-auto md:px-4"><p className="text-[10px] text-outline font-bold uppercase">Importance</p><p className="font-bold text-on-surface">{prob.importance}</p></div>
                      <div className="flex items-center justify-end gap-2 md:gap-4 w-full sm:w-auto mt-2 sm:mt-0 ml-auto md:ml-0">
                        <button className="p-2 text-outline hover:text-primary transition-colors cursor-pointer shrink-0"><span className="material-symbols-outlined">bookmark</span></button>
                        <a href={prob.link} target="_blank" rel="noopener noreferrer" className="px-6 md:px-8 py-2 md:py-2.5 bg-primary text-white rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 shrink-0 block text-center">Solve</a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button className="w-full mt-10 py-4 border-2 border-dashed border-outline-variant rounded-2xl text-on-surface-variant font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
              View More Problems <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </button>

            <div className="mt-16 bg-gradient-to-r from-surface-container-lowest to-primary-container/5 rounded-3xl p-8 flex items-center gap-8 premium-shadow relative overflow-hidden text-left">
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none"><span className="material-symbols-outlined text-9xl">emoji_events</span></div>
              <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center relative shadow-inner shrink-0">
                <span className="material-symbols-outlined text-5xl text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Consistency is the key!</h4>
                <p className="text-on-surface-variant max-w-sm mt-1">You're doing great. Keep solving problems daily and improve your problem solving skills.</p>
              </div>
              <div className="flex items-center gap-12 text-center shrink-0">
                <div><p className="text-[10px] font-black uppercase text-outline mb-1">Current Streak</p><div className="flex items-center justify-center gap-1"><span className="text-2xl font-black text-on-surface">7 Days</span><span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span></div></div>
                <div className="w-[1px] h-12 bg-outline-variant" />
                <div><p className="text-[10px] font-black uppercase text-outline mb-1">Best Streak</p><div className="flex items-center justify-center gap-1"><span className="text-2xl font-black text-on-surface">15 Days</span><span className="material-symbols-outlined text-yellow-500">military_tech</span></div></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-96 space-y-6 lg:space-y-8 shrink-0 text-left">
            <div className="bg-surface-container-lowest p-6 lg:p-8 rounded-3xl premium-shadow">
              <div className="flex justify-between items-center mb-8">
                <h5 className="font-bold text-on-surface">Your Progress</h5>
                <select className="text-xs font-bold text-on-surface-variant bg-surface px-2 py-1 rounded-md border-none focus:ring-0 outline-none"><option>This Week</option></select>
              </div>
              <div className="flex items-center gap-8">
                <div className="relative w-28 h-28 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeWidth="8" />
                    <circle className="text-primary" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeDasharray="301.6" strokeDashoffset={301.6 - (301.6 * completionPct) / 100} strokeLinecap="round" strokeWidth="8" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-2xl font-black text-on-surface">{loading ? "-" : `${completionPct}%`}</span><span className="text-[10px] text-outline font-bold uppercase">Solved</span></div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-tertiary-fixed rounded-lg flex items-center justify-center text-tertiary"><span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>
                    <div><p className="text-lg font-black text-on-surface leading-none">{loading ? "-" : practiced}</p><p className="text-[10px] text-outline font-bold uppercase">Solved</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><span className="material-symbols-outlined text-sm">schedule</span></div>
                    <div><p className="text-lg font-black text-on-surface leading-none">12.5 hrs</p><p className="text-[10px] text-outline font-bold uppercase">Time Spent</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 lg:p-8 rounded-3xl premium-shadow">
              <h5 className="font-bold text-on-surface mb-8">Practice by Difficulty</h5>
              <div className="flex items-end justify-between px-4 h-32 relative">
                <div className="absolute inset-0 flex flex-col justify-between border-b border-outline-variant/30 py-1 pointer-events-none opacity-20">
                  <div className="w-full border-t border-outline-variant" /><div className="w-full border-t border-outline-variant" />
                </div>
                {[{label:"Easy",h:getHClass(easy),bg:"bg-tertiary-fixed",hover:"hover:bg-tertiary",val:loading ? "-" : easy},{label:"Medium",h:getHClass(medium),bg:"bg-orange-100",hover:"hover:bg-orange-500",val:loading ? "-" : medium},{label:"Hard",h:getHClass(hard),bg:"bg-error-container",hover:"hover:bg-error",val:loading ? "-" : hard}].map(b => (
                  <div key={b.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <span className="text-[10px] font-bold text-outline opacity-0 group-hover:opacity-100 transition-opacity">{b.val}</span>
                    <div className={`w-10 ${b.bg} rounded-t-lg transition-all ${b.h} ${b.hover}`} />
                    <span className="text-[10px] font-bold text-on-surface-variant">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>



            <div className="bg-indigo-900 rounded-3xl p-6 lg:p-8 relative overflow-hidden text-white card-lift">
              <div className="relative z-10">
                <h5 className="text-xl font-headline-sm text-headline-sm mb-2">Stuck on a problem?</h5>
                <p className="text-primary-fixed text-sm mb-6 max-w-[180px]">Get hints, solutions and editorials to level up.</p>
                <button className="bg-white text-indigo-900 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:shadow-xl transition-all">Explore Solutions<span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
              <div className="absolute right-0 bottom-0 w-40 h-40">
                <img className="w-full h-full object-contain" alt="Stuck Help Illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAInqq_slMvPqIV5dzx7TUFuJptV0V28SJ5UTYdgfi8G_1VCw816rO7O7jkpMLicb8NPNLaQAhIf33c9zufqK8TZMk_qF8KXArUzkLaQr01HjKKlNRtm5oVhkjLl6kid2O9VfwJDEw6CSSoAUH-aiQ2hGdzm5fyCf_C_xuwoiCcFJ7EgfSCWcalKtercQtZ5YaHLAkg5b1Z-DypGkO5CM9lIhI4pHJRCSx-DPnbzAX_IU_JVu9jfXVe6rDeNBszkEX3iLxdZlESS7k" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default CodingPractice;
