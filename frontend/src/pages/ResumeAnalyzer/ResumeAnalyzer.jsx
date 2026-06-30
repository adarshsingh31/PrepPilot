import { Link } from "react-router-dom";
import { useState } from "react";

function ResumeAnalyzer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* Side Navigation Bar */}
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
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
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

        {/* Main Content Area */}
        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          {/* Top Navigation Bar */}
          <header className="flex justify-between items-center px-gutter h-16 w-full sticky top-0 z-40 bg-surface border-b border-outline-variant">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-body-md focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder="Search anything..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border border-outline-variant rounded px-1.5 py-0.5 bg-white text-[10px] text-outline font-bold">
                <span>⌘</span>
                <span>K</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 ml-gutter">
            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
              </div>
              <div className="cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant">help</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-outline-variant cursor-pointer group">
              <div className="text-right">
                <p className="text-label-md font-bold text-on-surface group-hover:text-primary transition-colors">Adarsh Singh</p>
                <p className="text-[10px] text-outline">NIT Raipur</p>
              </div>
              <img
                className="w-10 h-10 rounded-lg object-cover ring-2 ring-transparent group-hover:ring-primary transition-all"
                alt="Adarsh Singh Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTEfNrpwzSe6jlUOdBEp-R32gaRtUHRtBu0npBW3fswondZ_0JpX80K4IsjuyGx02XYL5Z4dHxtNP1vHtZKLfHlerxkOgnuniMbJdKtvtmNTU6C7b9p7RQQZUq-th8HjBg3i6GvXkOjqar8wgC4DLwfbnPO9tJuEkDEX5cDIZXicS--PGQ_CfikG91qbn6R7riPoKr4VjvQLJ3Hfe1EExDzt1diYscRUfTxoBPXP94xhfNmUACceJFgiuv1O3BL8zc0upyp0qe480"
              />
              <span className="material-symbols-outlined text-on-surface-variant text-sm">keyboard_arrow_down</span>
            </div>
          </div>
        </header>

          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex justify-between items-end">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  description
                </span>
              </div>
              <div>
                <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">Resume Analyzer</h2>
                <p className="text-body-md text-on-surface-variant">
                  Get AI-powered feedback to improve your resume and increase your chances of getting shortlisted.
                </p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-white border border-outline-variant rounded-lg text-primary font-bold flex items-center gap-2 hover:bg-surface-container-low transition-colors text-sm shadow-sm active:scale-95 duration-100">
              <span className="material-symbols-outlined text-lg">visibility</span>
              View Sample Resumes
            </button>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Left Column */}
            <div className="col-span-7 space-y-gutter">
              {/* Upload Section */}
              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-1">Upload Your Resume</h3>
                <p className="text-sm text-on-surface-variant mb-6">Upload your latest resume in PDF format to get started.</p>
                <div className="border-2 border-dashed border-primary-fixed-dim rounded-xl p-10 flex flex-col items-center justify-center bg-primary-container/5 hover:bg-primary-container/10 transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                  </div>
                  <p className="font-bold text-on-surface mb-1">Drag &amp; drop your resume here</p>
                  <p className="text-xs text-on-surface-variant mb-6">or</p>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 duration-100">
                    Choose File
                  </button>
                  <p className="mt-6 flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Supports PDF (Max 5MB)
                  </p>
                </div>
              </div>

              {/* Detailed Feedback Section */}
              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-6">Detailed Feedback</h3>
                <div className="space-y-4">
                  {/* Strength */}
                  <div className="p-4 rounded-xl border border-outline-variant flex items-start gap-4 hover:border-primary-fixed-dim transition-colors duration-200">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-on-surface text-sm">Strengths</h4>
                        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          Good
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Good use of metrics, clear work experience, relevant skills.</p>
                    </div>
                  </div>
                  {/* Improvement */}
                  <div className="p-4 rounded-xl border border-outline-variant flex items-start gap-4 hover:border-primary-fixed-dim transition-colors duration-200">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 shrink-0">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        warning
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-on-surface text-sm">Improvements</h4>
                        <span className="px-2.5 py-0.5 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          Moderate
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Add more quantified achievements, improve summary section.</p>
                    </div>
                  </div>
                  {/* ATS Tips */}
                  <div className="p-4 rounded-xl border border-outline-variant flex items-start gap-4 hover:border-primary-fixed-dim transition-colors duration-200">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        info
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-on-surface text-sm">ATS Tips</h4>
                        <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          Important
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Use standard section titles, avoid using images and columns.</p>
                    </div>
                  </div>
                  {/* Missing Keywords */}
                  <div className="p-4 rounded-xl border border-outline-variant flex items-start gap-4 hover:border-primary-fixed-dim transition-colors duration-200">
                    <div className="w-10 h-10 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        lightbulb
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-on-surface text-sm">Missing Keywords</h4>
                        <span className="px-2.5 py-0.5 bg-primary-fixed text-primary font-bold rounded-full text-[10px] uppercase tracking-wider">
                          5 Keywords
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant">Consider adding: Leadership, Problem Solving, Agile, Git, SQL</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 py-3 border border-outline-variant rounded-lg text-primary font-bold hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 text-sm duration-200">
                  View Full Analysis Report
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-5 space-y-gutter">
              {/* Resume Score Card */}
              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-8">Your Resume Score</h3>
                <div className="flex items-center gap-8 mb-8">
                  <div className="relative w-36 h-36 circular-progress rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-200 shrink-0">
                    <div className="text-center">
                      <span className="block text-4xl font-extrabold text-on-surface">82</span>
                      <span className="text-xs font-bold text-on-surface-variant">/100</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-primary">Great Job! 🚀</h4>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Your resume is strong and well-structured. Some improvements can make it even better.
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-on-surface">Content</span>
                      <span className="text-on-surface-variant">85/100</span>
                    </div>
                    <div className="h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-on-surface">Structure</span>
                      <span className="text-on-surface-variant">80/100</span>
                    </div>
                    <div className="h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-on-surface">Skills</span>
                      <span className="text-on-surface-variant">90/100</span>
                    </div>
                    <div className="h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-on-surface">ATS Optimization</span>
                      <span className="text-on-surface-variant">75/100</span>
                    </div>
                    <div className="h-2 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Preview Card */}
              <div className="bg-white p-6 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-bold text-on-surface mb-4">Resume Preview</h3>
                <div className="flex gap-4">
                  <div className="w-32 h-44 bg-surface-container-low rounded-lg border border-outline-variant overflow-hidden relative group shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt="Resume Document Preview"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcLitFaLWVPNRj5IGRSEJ61--QCIkjvMR2PwNOXix6RlGnahYAuwmtA83ONBglACEwBzTJ-AVU_CUQnX2vkjTJSb9EJZ3j1ps0zn6UKFBJsigirDjW5gk3zxZZtZxVFzlmg_7G7j3GdUXdnaKUzxFU5MMrYNJfgKgQyOrvwBDPJ_bNpitvRyptYRbRkCcE8ILpzqqygmk2vtB9Y0zjUhr7aaRuEKXBCKEq93wks9xb0wV_DpUbKmYUzmm6UVvX-4rSBzmxQt6b5as"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-200">
                      <span className="material-symbols-outlined text-primary">zoom_in</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-3">
                    <button className="w-full py-2 px-4 border border-outline-variant rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-95 duration-100">
                      View Full Resume
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </button>
                    <button className="w-full py-2 px-4 border border-outline-variant rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-95 duration-100">
                      Download PDF
                      <span className="material-symbols-outlined text-xs">download</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Skills Detected */}
              <div className="bg-white p-6 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-bold text-on-surface mb-4">Top Skills Detected</h3>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Java", "JavaScript", "React", "Node.js", "MongoDB", "SQL", "Git", "DSA", "Problem Solving"].map(
                    (skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary-container/10 text-primary rounded-full text-xs font-bold">
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Help Promo */}
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex items-center justify-between group cursor-pointer transition-all hover:bg-emerald-100/50 duration-200 text-left">
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface text-sm mb-1">Need help improving your resume?</h4>
                  <p className="text-xs text-on-surface-variant mb-3">Get expert tips on building a resume that gets you hired.</p>
                  <a className="text-emerald-600 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                    View Resume Guide
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </a>
                </div>
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    manage_search
                  </span>
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

export default ResumeAnalyzer;
