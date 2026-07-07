import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect, useCallback } from "react";
import { useSidebar } from "./SidebarContext";
import api from "../api/axios";

/* ─── nav items ─────────────────────────────────────────────────────────── */
const NAV_MAIN = [
  { to: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { to: "/mock-interview", icon: "video_chat", label: "AI Mock Interview" },
  { to: "/resume-analyzer", icon: "description", label: "Resume Analyzer" },
  { to: "/coding-practice", icon: "code", label: "Coding Practice" },
  { to: "/progress", icon: "trending_up", label: "Progress" },
  { to: "/question-bank", icon: "inventory_2", label: "Question Bank" },
  { to: "/study-plan", icon: "event_note", label: "Study Plan", fill: true },
];

const NAV_BOTTOM = [
  { to: "/profile", icon: "person", label: "Profile" },
  { to: "/settings", icon: "settings", label: "Settings" },
  { to: "/help-support", icon: "help", label: "Help Center" },
];

const ALL_FAQS = [
  { id: 1, q: "How does AI Mock Interview work?", a: "Our AI asks tailored questions based on your domain and duration. It evaluates your audio or text responses and generates a comprehensive report evaluating your communication, accuracy, and confidence." },
  { id: 2, q: "How is the interview score calculated?", a: "The score is calculated by the AI assessing factors like technical accuracy, confidence, relevance to the job role, and communication clarity." },
  { id: 3, q: "How does the Resume Analyzer work?", a: "Upload your resume in PDF format, and our AI scans it for missing keywords, formatting issues, and matches it against standard industry expectations to generate a score and improvement tips." },
  { id: 4, q: "How does Coding Practice work?", a: "You can solve algorithmic problems directly in our built-in code editor. Your solutions are evaluated against test cases, and progress is saved to your dashboard." },
  { id: 5, q: "How do Study Plans work?", a: "Study plans help you structure your preparation. You can generate a timeline-based roadmap with specific topics to study, tracking your completion daily." },
  { id: 6, q: "How can I edit my profile?", a: "Navigate to the Profile or Settings page. You can click 'Edit Profile' to update your name, college, phone number, and even upload a custom profile picture." },
  { id: 7, q: "Is my data secure?", a: "Yes, your data is securely stored in MongoDB and we follow industry-standard practices to ensure your interview data and personal information remain private." },
  { id: 8, q: "Can I track my interview progress?", a: "Absolutely! The Progress dashboard shows you detailed analytics, including your average score trend over time, total interviews completed, and problems solved." },
  { id: 9, q: "How do I reset my password?", a: "You can use the 'Forgot Password' link on the login page to verify your email via OTP and set a new password. Alternatively, you can change it directly in Settings if you know your current password." },
  { id: 10, q: "How do I view my previous mock interview reports?", a: "All past mock interviews are saved in the Mock Interview section under 'History', where you can revisit detailed feedback and transcripts for each session." }
];

const LOCAL_PAGES = [
  { id: "profile-1", q: "View Profile", keywords: ["profile", "my profile", "view profile", "user details", "college", "branch", "cgpa", "phone number", "email", "location", "personal information", "account", "academic details", "contact information"], type: "profile", path: "/profile", subtitle: "Personal Information" },
  { id: "profile-2", q: "Edit Profile", keywords: ["edit profile", "update profile"], type: "profile", path: "/settings", subtitle: "Update details" },
  { id: "settings-1", q: "Account Settings", keywords: ["settings", "account settings", "preferences", "security"], type: "settings", path: "/settings", subtitle: "Manage preferences" },
  { id: "settings-2", q: "Change Password", keywords: ["change password", "password"], type: "settings", path: "/settings", subtitle: "Security Settings" },
  { id: "settings-3", q: "Profile Picture", keywords: ["profile picture", "update profile"], type: "settings", path: "/settings", subtitle: "Update Avatar" },
];

/* ─── Tooltip ─────────────────────────────────────────────────────────── */
function Tooltip({ label, children }) {
  return (
    <div className="relative group/tip">
      {children}
      <div
        className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3
                   bg-inverse-surface text-inverse-on-surface text-xs font-medium
                   px-2.5 py-1.5 rounded-lg whitespace-nowrap
                   opacity-0 group-hover/tip:opacity-100 scale-95 group-hover/tip:scale-100
                   transition-all duration-150 z-[100] shadow-md"
      >
        {label}
      </div>
    </div>
  );
}

/* ─── NavLink ────────────────────────────────────────────────────────── */
function NavItem({ to, icon, label, fill, collapsed }) {
  const { pathname } = useLocation();
  const active = pathname === to;

  const base = "flex items-center gap-3 py-3 rounded-lg transition-all duration-200 cursor-pointer";
  const activeClass = "bg-primary-container text-on-primary-container font-semibold";
  const inactiveClass = "text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20";

  const inner = (
    <Link to={to} className={`${base} ${active ? activeClass : inactiveClass} ${collapsed ? "justify-center px-0 w-full" : "px-4"}`}>
      <span className="material-symbols-outlined shrink-0" style={fill || active ? { fontVariationSettings: "'FILL' 1" } : undefined}>
        {icon}
      </span>
      <span className={`font-label-md whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
        {label}
      </span>
    </Link>
  );

  return collapsed ? <Tooltip label={label}>{inner}</Tooltip> : inner;
}

/* ─── AppLayout ─────────────────────────────────────────────────────── */
export default function AppLayout({ children }) {
  const { user, setUser } = useAuth();
  const { isSidebarOpen, isMobileOpen, isMobile, collapsed, toggleSidebar, setIsMobileOpen } = useSidebar();
  const navigate = useNavigate();

  // Search States
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([]);
  
  const searchContainerRef = useRef(null);
  const overlayRef = useRef(null);
  
  // Load recent searches
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  const saveRecentSearch = (query) => {
    if (!query.trim()) return;
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounced Search API Call
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults(null);
      setIsSearching(false);
      setSelectedIndex(-1);
      return;
    }

    setIsSearching(true);
    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await api.get(`/search?q=${encodeURIComponent(searchQuery)}`);
        const data = response.data.results;
        
        // Merge Local FAQs
        const matchedFaqs = ALL_FAQS.filter(f => 
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
          f.a.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(f => ({
          id: `faq-${f.id}`,
          title: f.q,
          subtitle: "Help Center FAQ"
        }));

        const matchedLocalPages = LOCAL_PAGES.filter(p => 
          p.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
          p.q.toLowerCase().includes(searchQuery.toLowerCase())
        );

        data.profile = matchedLocalPages.filter(p => p.type === "profile").map(p => ({
          id: p.id,
          title: p.q,
          subtitle: p.subtitle,
          pathOverride: p.path
        }));

        data.settings = matchedLocalPages.filter(p => p.type === "settings").map(p => ({
          id: p.id,
          title: p.q,
          subtitle: p.subtitle,
          pathOverride: p.path
        }));

        data.helpCenter = matchedFaqs;
        setSearchResults(data);
        setSelectedIndex(-1);
      } catch (error) {
        console.error("Search failed", error);
        setSearchResults(null);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const getFlatResults = () => {
    if (!searchResults) return [];
    let flat = [];
    if (searchResults.profile?.length) flat = flat.concat(searchResults.profile.map(i => ({ ...i, path: i.pathOverride || '/profile' })));
    if (searchResults.settings?.length) flat = flat.concat(searchResults.settings.map(i => ({ ...i, path: i.pathOverride || '/settings' })));
    if (searchResults.mockInterview?.length) flat = flat.concat(searchResults.mockInterview.map(i => ({ ...i, path: '/mock-interview' })));
    if (searchResults.questionBank?.length) flat = flat.concat(searchResults.questionBank.map(i => ({ ...i, path: '/question-bank' })));
    if (searchResults.codingPractice?.length) flat = flat.concat(searchResults.codingPractice.map(i => ({ ...i, path: '/coding-practice' })));
    if (searchResults.studyPlan?.length) flat = flat.concat(searchResults.studyPlan.map(i => ({ ...i, path: '/study-plan' })));
    if (searchResults.resumeAnalyzer?.length) flat = flat.concat(searchResults.resumeAnalyzer.map(i => ({ ...i, path: '/resume-analyzer' })));
    if (searchResults.helpCenter?.length) flat = flat.concat(searchResults.helpCenter.map(i => ({ ...i, path: '/help-support' })));
    return flat;
  };

  const handleKeyDown = (e) => {
    if (!dropdownVisible) return;
    
    if (searchQuery.trim().length < 2 && recentSearches.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev < recentSearches.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        setSearchQuery(recentSearches[selectedIndex]);
      } else if (e.key === "Escape") {
        setDropdownVisible(false);
      }
      return;
    }

    const flatResults = getFlatResults();
    if (flatResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev < flatResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0) {
        const selected = flatResults[selectedIndex];
        navigate(selected.path);
        saveRecentSearch(searchQuery);
        setDropdownVisible(false);
        setSearchQuery("");
      } else {
        saveRecentSearch(searchQuery);
      }
    } else if (e.key === "Escape") {
      setDropdownVisible(false);
    }
  };

  const handleResultClick = (path) => {
    saveRecentSearch(searchQuery);
    navigate(path);
    setDropdownVisible(false);
    setSearchQuery("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const sidebarWidth = collapsed ? "w-20" : "w-72";
  const mainMargin = isMobile ? "ml-0" : collapsed ? "ml-20" : "ml-72";
  const flatResults = getFlatResults();

  let globalIndex = 0;

  const renderGroup = (title, icon, items, path) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-2">
        <div className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm">{icon}</span>
          {title}
        </div>
        <div>
          {items.map((item) => {
            const currentIndex = globalIndex++;
            const isSelected = selectedIndex === currentIndex;
            return (
              <div 
                key={item.id}
                onClick={() => handleResultClick(item.pathOverride || path)}
                className={`px-3 py-2.5 mx-2 rounded-lg cursor-pointer flex flex-col gap-0.5 transition-colors ${isSelected ? "bg-primary-container text-on-primary-container" : "hover:bg-surface-container-high text-on-surface"}`}
              >
                <span className="font-bold text-sm truncate">{item.title}</span>
                {item.subtitle && <span className={`text-xs truncate ${isSelected ? "text-on-primary-container/80" : "text-on-surface-variant"}`}>{item.subtitle}</span>}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* ── Sidebar ── */}
        <aside
          className={`
            h-screen fixed left-0 top-0
            bg-surface-container-lowest dark:bg-inverse-surface
            border-r border-outline-variant dark:border-outline
            shadow-sm flex flex-col py-6 z-50 overflow-y-auto overflow-x-hidden
            transition-[width] duration-300 ease-in-out
            ${sidebarWidth}
            ${isMobile ? `${isMobileOpen ? "translate-x-0" : "-translate-x-full"} w-72 transition-transform` : "translate-x-0"}
          `}
        >
          {/* Logo */}
          <div className={`flex items-center mb-8 px-2 ${collapsed ? "justify-center" : "gap-3 pl-4"}`}>
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            </div>
            <div className={`text-left overflow-hidden transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
              <h1 className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed-dim whitespace-nowrap">PrepPilot</h1>
              <p className="text-[10px] font-label-md text-secondary-fixed-dim uppercase tracking-widest whitespace-nowrap">AI Career Coach</p>
            </div>
          </div>

          {/* Main nav */}
          <nav className={`flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar space-y-1.5 ${collapsed ? "px-2" : "px-4"}`}>
            {NAV_MAIN.map((item) => <NavItem key={item.to} {...item} collapsed={collapsed && !isMobile} />)}
            <div className="pt-4 mt-4 border-t border-outline-variant space-y-1.5">
              {NAV_BOTTOM.map((item) => <NavItem key={item.to} {...item} collapsed={collapsed && !isMobile} />)}
            </div>
          </nav>

          {/* Logout */}
          <div className={`mt-auto ${collapsed ? "px-2" : "px-4"}`}>
            {collapsed && !isMobile ? (
              <Tooltip label="Log Out">
                <Link to="/" onClick={handleLogout} className="text-error hover:bg-error-container/20 transition-colors duration-200 py-3 rounded-lg flex items-center justify-center w-full">
                  <span className="material-symbols-outlined">logout</span>
                </Link>
              </Tooltip>
            ) : (
              <button onClick={handleLogout} className="text-error hover:bg-error-container/20 transition-colors duration-200 px-4 py-3 rounded-lg flex items-center gap-3 w-full">
                <span className="material-symbols-outlined">logout</span>
                <span className={`font-label-md whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}>Log Out</span>
              </button>
            )}
          </div>
        </aside>

        {/* Mobile overlay */}
        {isMobile && isMobileOpen && <div ref={overlayRef} className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300" onClick={() => setIsMobileOpen(false)} />}

        {/* ── Main content ── */}
        <main className={`flex-1 flex flex-col h-screen overflow-hidden transition-[margin] duration-300 ease-in-out ${mainMargin}`}>
          {/* Navbar */}
          <header className="flex justify-between items-center px-4 md:px-8 w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
            <div className="flex items-center gap-3 flex-1 max-w-xl">
              <button onClick={toggleSidebar} aria-label="Toggle sidebar" className="text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg p-1.5 transition-colors duration-200 shrink-0">
                <span className="material-symbols-outlined">{isMobile ? "menu" : isSidebarOpen ? "left_panel_close" : "left_panel_open"}</span>
              </button>

              {/* Search */}
              <div ref={searchContainerRef} className={`relative w-full transition-transform duration-200 ${isSearchFocused || dropdownVisible ? "scale-[1.02] z-50" : ""}`}>
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-10 py-2 text-body-md focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                  placeholder="Search anything..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setDropdownVisible(true);
                  }}
                  onFocus={() => {
                    setIsSearchFocused(true);
                    setDropdownVisible(true);
                  }}
                  onBlur={() => setIsSearchFocused(false)}
                  onKeyDown={handleKeyDown}
                />
                
                {isSearching && (
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary animate-spin" style={{ fontVariationSettings: "'FILL' 0" }}>progress_activity</span>
                )}
                
                {!isSearching && searchQuery.length > 0 && (
                  <span 
                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer hover:text-on-surface"
                    onClick={() => { setSearchQuery(""); setDropdownVisible(false); }}
                  >
                    close
                  </span>
                )}

                {/* Autocomplete Dropdown */}
                {dropdownVisible && (searchQuery.trim().length >= 2 || recentSearches.length > 0) && (
                  <div className="absolute top-full mt-2 left-0 w-full bg-white border border-outline-variant rounded-xl shadow-lg max-h-[70vh] overflow-y-auto custom-scrollbar z-50 py-2">
                    
                    {/* Recent Searches */}
                    {searchQuery.trim().length < 2 && recentSearches.length > 0 && (
                      <div className="mb-2">
                        <div className="flex items-center justify-between px-4 py-2">
                          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Recent Searches</span>
                        </div>
                        {recentSearches.map((term, idx) => (
                          <div 
                            key={idx}
                            onClick={() => { setSearchQuery(term); document.querySelector('input[placeholder="Search anything..."]')?.focus(); }}
                            className={`px-4 py-2 mx-2 rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${selectedIndex === idx ? "bg-surface-container-high" : "hover:bg-surface-container-high"}`}
                          >
                            <span className="material-symbols-outlined text-sm text-on-surface-variant">history</span>
                            <span className="font-medium text-sm text-on-surface truncate">{term}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Search Results */}
                    {searchQuery.trim().length >= 2 && searchResults && (
                      <>
                        {flatResults.length === 0 ? (
                          <div className="p-8 text-center text-on-surface-variant flex flex-col items-center">
                            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
                            <p className="font-bold">No results found</p>
                            <p className="text-sm">Try searching for something else.</p>
                          </div>
                        ) : (
                          <>
                            {renderGroup("Profile", "person", searchResults.profile, "/profile")}
                            {searchResults.profile?.length > 0 && <div className="h-px bg-outline-variant mx-4 my-1"></div>}
                            
                            {renderGroup("Settings", "settings", searchResults.settings, "/settings")}
                            {searchResults.settings?.length > 0 && <div className="h-px bg-outline-variant mx-4 my-1"></div>}
                            
                            {renderGroup("AI Mock Interview", "video_chat", searchResults.mockInterview, "/mock-interview")}
                            {searchResults.mockInterview?.length > 0 && <div className="h-px bg-outline-variant mx-4 my-1"></div>}
                            
                            {renderGroup("Question Bank", "inventory_2", searchResults.questionBank, "/question-bank")}
                            {searchResults.questionBank?.length > 0 && <div className="h-px bg-outline-variant mx-4 my-1"></div>}
                            
                            {renderGroup("Coding Practice", "code", searchResults.codingPractice, "/coding-practice")}
                            {searchResults.codingPractice?.length > 0 && <div className="h-px bg-outline-variant mx-4 my-1"></div>}
                            
                            {renderGroup("Study Plan", "event_note", searchResults.studyPlan, "/study-plan")}
                            {searchResults.studyPlan?.length > 0 && <div className="h-px bg-outline-variant mx-4 my-1"></div>}
                            
                            {renderGroup("Resume Analyzer", "description", searchResults.resumeAnalyzer, "/resume-analyzer")}
                            {searchResults.resumeAnalyzer?.length > 0 && <div className="h-px bg-outline-variant mx-4 my-1"></div>}
                            
                            {renderGroup("Help Center", "help", searchResults.helpCenter, "/help-support")}
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: notifications + profile */}
            <div className="flex items-center gap-4 md:gap-6">
              <button className="relative text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-4 h-4 bg-error text-white text-[10px] rounded-full flex items-center justify-center font-bold border-2 border-surface-bright">3</span>
              </button>
              <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-outline-variant">
                <div className="hidden sm:block text-right">
                  <p className="font-bold text-on-surface text-sm">{user?.name}</p>
                  <p className="text-[11px] text-on-surface-variant">{user?.email}</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
                  <img className="w-full h-full object-cover" alt="user details" src={user?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuBLrPT_yqX5LpLoVMY5D1-zozMZZgmOejC34ZHdh2niVx2vPlu7hcOY13GNvlFQOYpZ6QwgCzYAtedNIOWLXndwYMD-AMVj5SKcbV8Vm4s2ZUA1bQrXn7RZakbk1D-XMlgEqv_Un0IVpCHol-J33_TrsZFXB-_Dw8IB_Lr_BFCbrZPKcWuSo44OjfbQxniN8wX1Q8OtYahGxmGCkvfb5c16X2EAgzAvQXOQGKR6qxRtGYAUvZ7wnLy-lqeORv5nGabvBbUwroMHuFU"} />
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 custom-scrollbar">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
