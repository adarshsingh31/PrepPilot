import { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import { getQuestions } from "../../services/questionService";
import { getUserQuestions, updateUserQuestion } from "../../services/userQuestionService";
import { getAnalytics } from "../../services/analyticsService";
import { useUserStats } from "../../context/UserStatsContext";

function QuestionBank() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalQuestionsCount, setTotalQuestionsCount] = useState(164);

  // Filter States (Topic -> Importance -> Difficulty)
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [selectedImportance, setSelectedImportance] = useState("All Importances");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Difficulties");
  const [searchQuery, setSearchQuery] = useState("");

  // Sort States
  const [sortBy, setSortBy] = useState("Latest");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // State for User Progress (fetched from MERN backend)
  const [userProgress, setUserProgress] = useState({});
  const [analytics, setAnalytics] = useState(null);
  const { refreshStats } = useUserStats();

  // Notes Modal state
  const [editingNoteQuestionId, setEditingNoteQuestionId] = useState(null);
  const [noteText, setNoteText] = useState("");

  const topics = [
    "All Topics",
    "Arrays",
    "Strings",
    "Linked List",
    "Stacks & Queues",
    "Binary Search",
    "Trees",
    "Graphs",
    "Dynamic Programming",
    "Greedy",
    "Backtracking"
  ];

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = {};
      if (selectedTopic !== "All Topics") {
        params.topic = selectedTopic;
      }
      if (selectedDifficulty !== "All Difficulties") {
        params.difficulty = selectedDifficulty;
      }
      if (selectedImportance !== "All Importances") {
        params.importance = selectedImportance;
      }
      if (searchQuery.trim()) {
        params.search = searchQuery.trim();
      }

      // Fetch questions, user progress, and analytics in parallel
      const [questionsResponse, progressResponse, analyticsResponse] = await Promise.all([
        getQuestions(params),
        getUserQuestions(),
        getAnalytics()
      ]);

      if (questionsResponse.success && progressResponse.success) {
        setQuestions(questionsResponse.questions);
        
        // Convert progress array to a map: questionId -> progressObject
        const progressMap = {};
        progressResponse.userQuestions.forEach((item) => {
          progressMap[item.question] = item;
        });
        setUserProgress(progressMap);

        if (analyticsResponse.success) {
          setAnalytics(analyticsResponse.analytics);
        }

        if (selectedTopic === "All Topics" && selectedDifficulty === "All Difficulties" && selectedImportance === "All Importances" && !searchQuery.trim()) {
          setTotalQuestionsCount(questionsResponse.questions.length);
        }
      } else {
        setError("Failed to load questions or progress");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchQuestions();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [selectedTopic, selectedDifficulty, selectedImportance, searchQuery]);

  // Reset pagination when filter updates
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTopic, selectedDifficulty, selectedImportance, searchQuery, sortBy]);

  // Actions
  const toggleSaved = async (id) => {
    try {
      const currentBookmarked = getQuestionBookmarked(id);
      const nextBookmarked = !currentBookmarked;

      // Optimistic Update
      setUserProgress(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          question: id,
          bookmarked: nextBookmarked
        }
      }));
      setAnalytics(prev => prev ? {
        ...prev,
        savedQuestions: prev.savedQuestions + (nextBookmarked ? 1 : -1)
      } : prev);

      // Call API
      const response = await updateUserQuestion(id, { bookmarked: nextBookmarked });
      if (response.success && response.userQuestion) {
        setUserProgress(prev => ({
          ...prev,
          [id]: response.userQuestion
        }));
      }
    } catch (err) {
      console.error("Failed to update bookmark", err);
      fetchQuestions(); // Sync back in case of error
    }
  };

  const togglePracticed = async (id) => {
    try {
      const currentStatus = getQuestionStatus(id);
      const nextStatus = currentStatus === "Practiced" ? "Not Started" : "Practiced";

      // Optimistic Update
      setUserProgress(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          question: id,
          status: nextStatus
        }
      }));
      setAnalytics(prev => prev ? {
        ...prev,
        practicedQuestions: prev.practicedQuestions + (nextStatus === "Practiced" ? 1 : -1)
      } : prev);

      // Call API
      const response = await updateUserQuestion(id, { status: nextStatus });
      if (response.success && response.userQuestion) {
        setUserProgress((prev) => ({
          ...prev,
          [id]: response.userQuestion,
        }));
        if (nextStatus === "Practiced") {
          refreshStats();
        }
      }
    } catch (err) {
      console.error("Failed to update status", err);
      fetchQuestions();
    }
  };

  const handleSaveNote = async (id, text) => {
    try {
      const hasNote = !!getQuestionNotes(id);
      const willHaveNote = !!text;

      // Optimistic Update
      setUserProgress(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          question: id,
          notes: text
        }
      }));
      if (hasNote !== willHaveNote) {
        setAnalytics(prev => prev ? {
          ...prev,
          notesAdded: prev.notesAdded + (willHaveNote ? 1 : -1)
        } : prev);
      }
      setEditingNoteQuestionId(null);

      // Call API
      const response = await updateUserQuestion(id, { notes: text });
      if (response.success && response.userQuestion) {
        setUserProgress(prev => ({
          ...prev,
          [id]: response.userQuestion
        }));
      }
    } catch (err) {
      console.error("Failed to save note", err);
      fetchQuestions();
    }
  };

  const clearStatus = async (id) => {
    try {
      const currentStatus = getQuestionStatus(id);
      const currentBookmarked = getQuestionBookmarked(id);
      const currentNotes = getQuestionNotes(id);

      // Optimistic Update
      setUserProgress(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });

      setAnalytics(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          practicedQuestions: prev.practicedQuestions - (currentStatus === "Practiced" ? 1 : 0),
          savedQuestions: prev.savedQuestions - (currentBookmarked ? 1 : 0),
          notesAdded: prev.notesAdded - (currentNotes ? 1 : 0),
        };
      });

      // Call API to reset status, bookmark, and notes
      const response = await updateUserQuestion(id, {
        status: "Not Started",
        bookmarked: false,
        notes: ""
      });
      if (response.success && response.userQuestion) {
        setUserProgress(prev => ({
          ...prev,
          [id]: response.userQuestion
        }));
      }
    } catch (err) {
      console.error("Failed to clear status", err);
      fetchQuestions();
    }
  };

  const handleReset = () => {
    setSelectedTopic("All Topics");
    setSelectedImportance("All Importances");
    setSelectedDifficulty("All Difficulties");
    setSearchQuery("");
    setSortBy("Latest");
  };

  // Helper functions for reading progress mapping
  const getQuestionStatus = (id) => {
    return userProgress[id]?.status || "Not Started";
  };

  const getQuestionBookmarked = (id) => {
    return userProgress[id]?.bookmarked || false;
  };

  const getQuestionNotes = (id) => {
    return userProgress[id]?.notes || "";
  };

  // Sorting
  const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
  const importanceOrder = { High: 3, Medium: 2, Low: 1 };

  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortBy === "Alphabetical (A–Z)") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "Difficulty") {
      const diffA = difficultyOrder[a.difficulty] || 99;
      const diffB = difficultyOrder[b.difficulty] || 99;
      return diffA - diffB;
    }
    if (sortBy === "Importance") {
      const impA = importanceOrder[a.importance] || 0;
      const impB = importanceOrder[b.importance] || 0;
      return impB - impA; // High to Low
    }
    // Default: "Latest" (compare MongoDB ObjectID strings in descending order)
    if (a._id && b._id) {
      return b._id.toString().localeCompare(a._id.toString());
    }
    return 0;
  });

  const totalItems = sortedQuestions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedQuestions = sortedQuestions.slice(startIndex, startIndex + itemsPerPage);

  // Stats Calculations
  const practicedCount = analytics?.practicedQuestions || Object.values(userProgress).filter(p => p.status === "Practiced").length;
  const savedCount = analytics?.savedQuestions || Object.values(userProgress).filter(p => p.bookmarked).length;
  const notesCount = analytics?.notesAdded || Object.values(userProgress).filter(p => p.notes && p.notes.trim() !== "").length;
  const globalTotalQuestions = analytics?.totalQuestions || totalQuestionsCount;

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
              <p className="text-on-surface-variant">Browse questions by topic, importance, and difficulty. Save and practice anytime.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 space-y-6">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-outline-variant/30 space-y-4 text-left">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search questions by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg pl-10 pr-10 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">search</span>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                  )}
                </div>

                {/* 3 Filters: Topic -> Importance -> Difficulty */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Topic Select */}
                  <div className="relative">
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none"
                    >
                      {topics.map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>

                  {/* Importance Select */}
                  <div className="relative">
                    <select
                      value={selectedImportance}
                      onChange={(e) => setSelectedImportance(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none"
                    >
                      {["All Importances", "High", "Medium", "Low"].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>

                  {/* Difficulty Select */}
                  <div className="relative">
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none"
                    >
                      {["All Difficulties", "Easy", "Medium", "Hard"].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4 border-t border-outline-variant/20 pt-4 flex-wrap">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 border border-outline text-on-surface font-bold rounded-lg hover:bg-outline-variant/10 transition-colors duration-100 flex items-center gap-2 cursor-pointer text-sm"
                  >
                    <span className="material-symbols-outlined text-sm">restart_alt</span>Reset Filters
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-error-container text-on-error-container p-4 rounded-xl text-left font-bold text-sm">
                  {error}
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden text-left">
                <div className="p-4 md:p-6 border-b border-outline-variant/30 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <h3 className="font-bold text-lg">Questions <span className="text-on-surface-variant font-normal text-sm sm:ml-2">({totalItems})</span></h3>
                  <div className="relative">
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                      Sort by:{" "}
                      <button
                        onClick={() => setShowSortDropdown(!showSortDropdown)}
                        className="font-bold text-on-surface flex items-center gap-1 hover:text-primary transition-colors cursor-pointer select-none"
                      >
                        {sortBy} <span className="material-symbols-outlined text-sm">expand_more</span>
                      </button>
                    </div>
                    {showSortDropdown && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setShowSortDropdown(false)} />
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-outline-variant/30 rounded-xl shadow-lg z-20 overflow-hidden">
                          {["Latest", "Alphabetical (A–Z)", "Difficulty", "Importance"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => {
                                setSortBy(opt);
                                setShowSortDropdown(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-surface-container-low cursor-pointer ${
                                sortBy === opt ? "font-bold text-primary bg-primary/5" : "text-on-surface-variant"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low/50">
                      <tr className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                        <th className="px-6 py-4 w-12 text-center">#</th>
                        <th className="px-6 py-4 min-w-[280px]">Question</th>
                        <th className="px-6 py-4">Topic</th>
                        <th className="px-6 py-4">Difficulty</th>
                        <th className="px-6 py-4">Importance</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      {loading ? (
                        Array.from({ length: 5 }).map((_, index) => (
                          <tr key={index} className="animate-pulse">
                            <td className="px-6 py-4 text-center"><div className="h-4 bg-surface-container-high rounded w-4 mx-auto"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-surface-container-high rounded w-3/4"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-surface-container-high rounded w-16"></div></td>
                            <td className="px-6 py-4"><div className="h-6 bg-surface-container-high rounded-full w-12"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-surface-container-high rounded w-12"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-surface-container-high rounded w-16"></div></td>
                            <td className="px-6 py-4"><div className="h-4 bg-surface-container-high rounded w-12 mx-auto"></div></td>
                          </tr>
                        ))
                      ) : paginatedQuestions.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="px-6 py-12 text-center text-on-surface-variant">
                            <span className="material-symbols-outlined text-4xl mb-2 text-outline">search_off</span>
                            <p className="font-bold">No questions found</p>
                            <p className="text-sm">Try adjusting your filters.</p>
                          </td>
                        </tr>
                      ) : (
                        paginatedQuestions.map((q, idx) => {
                          const status = getQuestionStatus(q._id);
                          const isBookmarked = getQuestionBookmarked(q._id);
                          return (
                            <tr key={q._id} className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
                              <td className="px-6 py-4 text-center text-on-surface-variant">{startIndex + idx + 1}</td>
                              <td className="px-6 py-4">
                                <a
                                  href={q.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-bold text-on-surface group-hover:text-primary transition-colors hover:underline"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {q.title}
                                </a>
                              </td>
                              <td className="px-6 py-4 text-on-surface-variant">{q.topic}</td>
                              <td className="px-6 py-4">
                                <span className={`px-3 py-1 font-bold rounded-full text-xs ${
                                  q.difficulty === "Easy"
                                    ? "bg-tertiary-fixed-dim/20 text-tertiary"
                                    : q.difficulty === "Medium"
                                    ? "bg-secondary-container text-on-secondary-container"
                                    : "bg-error-container text-on-error-container"
                                }`}>
                                  {q.difficulty}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <span className="px-3 py-1 font-bold rounded-full text-xs bg-white text-blue-900 border border-blue-200 dark:bg-white dark:text-blue-900 dark:border-blue-200">
                                  {q.importance}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`font-bold text-xs flex items-center gap-1 ${
                                  status === "Practiced"
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : (status === "Saved" || isBookmarked)
                                    ? "text-primary"
                                    : "text-on-surface-variant"
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${
                                    status === "Practiced"
                                      ? "bg-emerald-500"
                                      : (status === "Saved" || isBookmarked)
                                      ? "bg-primary"
                                      : "bg-outline"
                                  }`} />
                                  {status === "Practiced" ? "Practiced" : (status === "Saved" || isBookmarked) ? "Saved" : "Not Practiced"}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex justify-center items-center gap-4 text-on-surface-variant">
                                  {/* Tick becomes green if practiced */}
                                  <span
                                    title="Mark as Practiced"
                                    onClick={(e) => { e.stopPropagation(); togglePracticed(q._id); }}
                                    className={`material-symbols-outlined text-lg hover:text-emerald-500 cursor-pointer transition-colors ${
                                      status === "Practiced" ? "text-emerald-500 font-bold" : ""
                                    }`}
                                    style={{ fontVariationSettings: status === "Practiced" ? "'FILL' 1" : "'FILL' 0" }}
                                  >
                                    task_alt
                                  </span>
                                  <span
                                    title="Save Question"
                                    onClick={(e) => { e.stopPropagation(); toggleSaved(q._id); }}
                                    className={`material-symbols-outlined text-lg hover:text-primary cursor-pointer transition-colors ${
                                      isBookmarked ? "text-primary" : ""
                                    }`}
                                    style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}
                                  >
                                    bookmark
                                  </span>
                                  {/* Notes trigger */}
                                  <span
                                    title="Edit Note"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setEditingNoteQuestionId(q._id);
                                      setNoteText(getQuestionNotes(q._id));
                                    }}
                                    className={`material-symbols-outlined text-lg hover:text-primary cursor-pointer transition-colors ${
                                      getQuestionNotes(q._id) ? "text-primary" : ""
                                    }`}
                                  >
                                    edit_note
                                  </span>
                                  {(status !== "Not Started" || isBookmarked || getQuestionNotes(q._id)) && (
                                    <span
                                      title="Clear Status"
                                      onClick={(e) => { e.stopPropagation(); clearStatus(q._id); }}
                                      className="material-symbols-outlined text-lg hover:text-error cursor-pointer text-red-500 transition-colors"
                                    >
                                      cancel
                                    </span>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
                {!loading && totalItems > 0 && (
                  <div className="px-4 md:px-6 py-4 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-container-low/20">
                    <span className="text-sm text-on-surface-variant text-center sm:text-left">
                      Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} questions
                    </span>
                    {totalPages > 1 && (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 disabled:opacity-40 transition-colors"
                        >
                          <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter(n => n === 1 || n === totalPages || Math.abs(n - currentPage) <= 1)
                          .map((n, idx, arr) => {
                            const elements = [];
                            if (idx > 0 && n - arr[idx - 1] > 1) {
                              elements.push(<span key={`dots-${n}`} className="px-2 text-on-surface-variant">...</span>);
                            }
                            elements.push(
                              <button
                                key={n}
                                onClick={() => setCurrentPage(n)}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                                  n === currentPage ? "bg-primary text-white" : "text-on-surface-variant hover:bg-outline-variant/20 transition-colors"
                                }`}
                              >
                                {n}
                              </button>
                            );
                            return elements;
                          })}
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 disabled:opacity-40 transition-colors"
                        >
                          <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-80 space-y-6 text-left">
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-outline-variant/30">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">bolt</span>Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { icon: "analytics", bg: "bg-primary-container/10", color: "text-primary", val: loading ? "-" : globalTotalQuestions, label: "Total Questions" },
                    { icon: "task_alt", bg: "bg-emerald-500/10", color: "text-emerald-500", val: practicedCount, label: "Practiced" },
                    { icon: "bookmark", bg: "bg-secondary-container", color: "text-on-secondary-container", val: savedCount, label: "Saved" },
                    { icon: "edit_note", bg: "bg-surface-container-high", color: "text-on-surface-variant", val: notesCount, label: "Notes Added" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className={`w-10 h-10 ${s.bg} ${s.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}><span className="material-symbols-outlined">{s.icon}</span></div>
                      <div><p className="text-xl font-bold leading-none">{s.val}</p><p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mt-1">{s.label}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-outline-variant/30">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-primary text-sm">pie_chart</span>Overall Mastery</h3>
                <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-surface-container-low" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="12" />
                    <circle
                      className="text-primary transition-all duration-500 ease-out"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * (practicedCount || 0)) / (globalTotalQuestions || 1)}
                      strokeWidth="12"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-2xl font-bold text-on-surface leading-none">
                      {Math.round(((practicedCount || 0) / (globalTotalQuestions || 1)) * 100)}%
                    </p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold mt-1">Mastery</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    ["emerald-500", "Practiced", `${Math.round(((practicedCount || 0) / (globalTotalQuestions || 1)) * 100)}%`],
                    ["primary", "Saved", `${Math.round(((savedCount || 0) / (globalTotalQuestions || 1)) * 100)}%`],
                    ["surface-container-high", "Remaining", `${Math.round((((globalTotalQuestions - practicedCount) || 0) / (globalTotalQuestions || 1)) * 100)}%`]
                  ].map(([c, l, v]) => (
                    <div key={l} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-${c} animate-pulse`} />
                        <span className="text-on-surface-variant font-bold">{l}</span>
                      </div>
                      <span className="font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Modal Overlay */}
      {editingNoteQuestionId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl space-y-4 text-left border border-outline-variant/30 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">edit_note</span>
                Edit Note
              </h4>
              <button
                onClick={() => setEditingNoteQuestionId(null)}
                className="text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <textarea
              rows="4"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Write your note here..."
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none resize-none"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingNoteQuestionId(null)}
                className="px-4 py-2 border border-outline text-on-surface rounded-lg hover:bg-outline-variant/10 text-sm font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveNote(editingNoteQuestionId, noteText)}
                className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all cursor-pointer"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}

export default QuestionBank;
