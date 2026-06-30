import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
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
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
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

        {/* Main Content Wrapper */}
        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <header className="flex justify-between items-center px-8 w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input
                  className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-body-md font-body-md placeholder-outline outline-none transition-all"
                  placeholder="Search anything..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-outline border border-outline rounded px-1.5 py-0.5">⌘ K</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-100 cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
              </button>
              <div className="flex items-center gap-3 pl-6 border-l border-outline-variant">
                <div className="text-right">
                  <p className="font-bold text-sm text-on-surface leading-none">Adarsh Singh</p>
                  <p className="text-[10px] font-semibold text-secondary">NIT Raipur</p>
                </div>
                <img
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  alt="Adarsh Singh Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjJFSpMR9ABZyvm_tmGLWFcwDa9YJgD_0ngrysDXNqO8IYfNU4JXXipBPH3jpQyPNN1Icr-wEQGtK1kIj4dRgkyRks_OtNLJ13P1cCUOA9zABm6dC4lBD9XlKZ9fSwGglUazR1RBlKV9ZL_fEwlrC6CNsnS-FC20Z4t7odXJGK1HGF6hWkADq701DXmflEvUL6vHpl1dJXt4KVma_tmDKOJnNdzZTsRbzNJeQwNvHezIHwaIjt0QhyAMkL-Iz-l-xsaO2YyKbAxY"
                />
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">

              {/* Page Header */}
              <div className="flex justify-between items-end">
                <div className="text-left">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Profile</h2>
                  <p className="text-secondary font-body-md">Manage your personal information and account settings.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-surface border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all card-shadow active:scale-95 duration-100">
                  <span className="material-symbols-outlined text-sm">edit</span>
                  Edit Profile
                </button>
              </div>

              {/* Top Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Identity Card */}
                <div className="xl:col-span-4 bg-white rounded-3xl p-8 card-shadow border border-outline-variant/30 flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-surface-container p-1 shadow-lg"
                      alt="Adarsh Singh Avatar"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZXA8xCUjGh4xqiqsFUAxGtgDeEgNDtbzgu4gwQ9PBFaBuDGqZgZxCo_-xixrsTtu5uRLDDDXfLNiikeb71ykTcnlJuwry2_GW5Gb-z7zvfsHJu6xulLy8aAT79enTBsNl3vwknQ_-jltaK7Ytm5MWC3gUfEwJIJCqB_mTHYlxY1C4fyTf0ClPw0H9Mjl4eRUYl4VdLC_M4qgr4XoDlW-QKMhK5yTKch5zalxKVo-gH79BoK-yH5huWYFmJWbQKAP5JJ0jhvekhek"
                    />
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-110 transition-transform duration-200">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-1">Adarsh Singh</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-8">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Verified Student
                  </div>
                  <div className="w-full space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-surface rounded-2xl">
                      <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">Email Address</p>
                        <p className="text-sm font-semibold text-on-surface">adarshsingh16@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-surface rounded-2xl">
                      <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">Phone Number</p>
                        <p className="text-sm font-semibold text-on-surface">+91 91234 56789</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-surface rounded-2xl">
                      <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">Location</p>
                        <p className="text-sm font-semibold text-on-surface">Raipur, Chhattisgarh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats + Personal Info */}
                <div className="xl:col-span-8 flex flex-col gap-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 card-shadow text-center group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined">mic</span>
                      </div>
                      <h4 className="text-3xl font-extrabold text-on-surface">24</h4>
                      <p className="text-xs text-secondary font-semibold mt-1">Mock Interviews</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 card-shadow text-center group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 bg-emerald-50 text-tertiary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tertiary group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <h4 className="text-3xl font-extrabold text-on-surface">82<span className="text-sm text-secondary font-medium">/100</span></h4>
                      <p className="text-xs text-secondary font-semibold mt-1">Resume Score</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 card-shadow text-center group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined">code</span>
                      </div>
                      <h4 className="text-3xl font-extrabold text-on-surface">128</h4>
                      <p className="text-xs text-secondary font-semibold mt-1">Problems Solved</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 card-shadow text-center group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined">local_fire_department</span>
                      </div>
                      <h4 className="text-3xl font-extrabold text-on-surface">7 <span className="text-sm font-medium">Days</span></h4>
                      <p className="text-xs text-secondary font-semibold mt-1">Current Streak</p>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 card-shadow text-left">
                    <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 mb-6 pb-4 border-b border-outline-variant/30">
                      <span className="material-symbols-outlined text-primary">person_outline</span>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">Full Name</span>
                        <span className="text-on-surface font-semibold text-sm">Adarsh Singh</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">College</span>
                        <span className="text-on-surface font-semibold text-sm">NIT Raipur</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">Email Address</span>
                        <span className="text-on-surface font-semibold text-sm">adarshsingh16@gmail.com</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">Branch</span>
                        <span className="text-on-surface font-semibold text-sm">CSE</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">Phone Number</span>
                        <span className="text-on-surface font-semibold text-sm">+91 91234 56789</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">Year</span>
                        <span className="text-on-surface font-semibold text-sm">3rd Year</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">CGPA</span>
                        <span className="text-on-surface font-semibold text-sm">8.25 / 10.00</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                        <span className="text-secondary text-sm font-medium">Location</span>
                        <span className="text-on-surface font-semibold text-sm">Raipur, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                {/* Recent Activity */}
                <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 card-shadow flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-on-surface">Recent Activity</h3>
                    <a className="text-primary text-xs font-bold hover:underline" href="#">View All</a>
                  </div>
                  <div className="space-y-6">
                    {[
                      { icon: "mic", bg: "bg-indigo-50", color: "text-primary", title: "Completed DSA Mock Interview", sub: "Score: 84/100", time: "2 hours ago" },
                      { icon: "description", bg: "bg-emerald-50", color: "text-tertiary", title: "Analyzed a new resume", sub: "Score improved to 82/100", time: "1 day ago" },
                      { icon: "code", bg: "bg-indigo-50", color: "text-primary", title: "Solved 5 problems in Arrays", sub: "Great job! Keep practicing.", time: "2 days ago" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className={`w-10 h-10 flex-shrink-0 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                          <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-on-surface">{item.title}</p>
                          <p className="text-xs text-secondary">{item.sub}</p>
                          <p className="text-[10px] text-outline font-medium mt-1">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 card-shadow">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-on-surface">Achievements</h3>
                    <a className="text-primary text-xs font-bold hover:underline" href="#">View All</a>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: "military_tech", bg: "bg-indigo-100", color: "text-primary", title: "First Interview", sub: "Completed your first mock", date: "May 10, 2024", dateColor: "text-primary" },
                      { icon: "emoji_events", bg: "bg-emerald-100", color: "text-tertiary", title: "Problem Solver", sub: "Solved 50 coding problems", date: "May 18, 2024", dateColor: "text-tertiary" },
                      { icon: "stars", bg: "bg-indigo-100", color: "text-primary", title: "Resume Improver", sub: "Scored 80+ on analyzer", date: "May 22, 2024", dateColor: "text-primary" },
                      { icon: "workspace_premium", bg: "bg-orange-100", color: "text-orange-600", title: "Consistent Learner", sub: "Maintained a 7-day streak", date: "May 26, 2024", dateColor: "text-orange-600" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface-container-low transition-colors cursor-pointer">
                        <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-full flex items-center justify-center shrink-0`}>
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-on-surface">{item.title}</h4>
                          <p className="text-[10px] text-secondary">{item.sub}</p>
                          <p className={`text-[10px] font-bold mt-1 ${item.dateColor}`}>{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Account Security + Danger Zone */}
                <div className="flex flex-col gap-8">
                  <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 card-shadow">
                    <h3 className="text-lg font-bold text-on-surface mb-6">Account Security</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                        <div>
                          <p className="text-sm font-bold text-on-surface">Password</p>
                          <p className="text-xs text-secondary tracking-widest">••••••••</p>
                        </div>
                        <button className="px-4 py-1.5 text-primary text-xs font-bold border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-colors active:scale-95 duration-100">Change</button>
                      </div>
                      <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                        <div>
                          <p className="text-sm font-bold text-on-surface">Two-Factor Auth</p>
                          <p className="text-xs text-tertiary font-bold">Enabled</p>
                        </div>
                        <button className="px-4 py-1.5 text-primary text-xs font-bold border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-colors active:scale-95 duration-100">Manage</button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold text-on-surface">Login Activity</p>
                          <p className="text-[10px] text-secondary">Last login: Today, 10:30 AM</p>
                        </div>
                        <button className="px-4 py-1.5 text-primary text-xs font-bold border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-colors active:scale-95 duration-100">View</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-error-container/20 rounded-3xl p-8 border border-error/20">
                    <h3 className="text-lg font-bold text-error mb-4">Danger Zone</h3>
                    <div className="flex justify-between items-center">
                      <div className="max-w-[70%]">
                        <p className="text-sm font-bold text-on-surface">Delete Account</p>
                        <p className="text-[10px] text-secondary">Once you delete your account, there is no going back. Please be certain.</p>
                      </div>
                      <button className="px-5 py-2 bg-white text-error text-xs font-bold border border-error rounded-xl hover:bg-error hover:text-white transition-all active:scale-95 duration-100">
                        Delete
                      </button>
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

export default Profile;
