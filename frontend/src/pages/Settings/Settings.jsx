import { Link } from "react-router-dom";
import { useState } from "react";

function Settings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [fullName, setFullName] = useState("Adarsh Singh");
  const [email, setEmail] = useState("adarshsingh16@gmail.com");
  const [college, setCollege] = useState("National Institute of Technology Raipur");
  const [branch, setBranch] = useState("Computer Science and Engineering");

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
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">person</span>
              <span className="font-label-md">Profile</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
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

        {/* Main Content wrapper */}
        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          {/* TopNavBar */}
          <header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="Search anything..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-white border border-outline-variant rounded px-1.5 py-0.5 text-on-surface-variant font-mono">
              ⌘ K
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors relative cursor-pointer active:scale-95 duration-100">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors cursor-pointer active:scale-95 duration-100">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="h-8 w-px bg-outline-variant mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-bold text-sm leading-none">Adarsh Singh</p>
                <p className="text-xs text-on-surface-variant">NIT Raipur</p>
              </div>
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                alt="Adarsh Singh Headshot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEUgcxWySt18FA6WbDEkM28fbTjBb013VOhTCOyOt3MZ3GKzgj90rSQdEfuPKDnuqcanxQTHByU1JzPnaMd4kj7xL1QuGgBq0k0gl-1FbLLcfIaxV2Od1hRWjhGMN5rJ8IY3YNCMLLJHFxVeGcDPcegrMx89q3SC829HKAp4TgX-tJnjq6FyLacxK3BfGHge6vE1gVHBkhXbTZ0ku9uNthZG_HKOzzLqs5a4giOcJ1BYDlhLnp7AW7tK0lJ--cffQ13XoodgG-J_g"
              />
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>
        </header>

          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">
          <div className="flex items-start gap-4 text-left">
            <div className="p-3 bg-primary-container/10 rounded-xl text-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                settings
              </span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Settings</h2>
              <p className="font-body-md text-body-md text-secondary">Manage your account preferences and application settings.</p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 text-left">
            {/* Account Settings */}
            <div className="xl:col-span-7 bg-white rounded-xl p-8 card-shadow border border-outline-variant/30 flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Account Settings</h3>
                  <p className="font-body-md text-body-md text-secondary">Update your personal information.</p>
                </div>
                <div className="relative group">
                  <img
                    className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md"
                    alt="Adarsh Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsNXKsJ_HtnI5i3K0it_BdeURbrR5G4E0YKuY_LGARZE70qtZtrLTKdrdJwKyMOi79zW5RQHP3DZmTUd_8B6MkapXt-gKyEwM_ImTsDFvMiUzV7ON_zbZ4YSV4K8aAtsCh42ZM7O9hNlgyHMIkX_xip5_7ihST7PTkpkE0pzKf_otw0B4TvznGJcSHlArM69u_QRTED-GRamAJxctjlLELDuuPVl95BU0fEU9po52Yq02sTkzh0orjwSRl81x2WmUlHTB2P2w21Co"
                  />
                  <button className="absolute bottom-0 right-0 p-2 bg-primary text-on-primary rounded-full shadow-lg border-2 border-surface transform hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Email</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">College</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Branch</label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Year</label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer">
                      <option>3rd Year (2024-2028)</option>
                      <option>4th Year (2023-2027)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-container active:scale-95 duration-150 transition-all flex items-center gap-2">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Security Settings */}
            <div className="xl:col-span-5 bg-white rounded-xl p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Security</h3>
                <p className="font-body-md text-body-md text-secondary">Manage your password and account security.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30 bg-surface-bright">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Password</p>
                    <p className="text-xs text-secondary italic">Last changed 3 months ago</p>
                  </div>
                  <button className="text-primary font-bold text-sm border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary-container/10 transition-colors">
                    Change
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30 bg-surface-bright">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Two-Factor Auth</p>
                    <span className="text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      Enabled
                    </span>
                  </div>
                  <button className="text-primary font-bold text-sm border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary-container/10 transition-colors">
                    Manage
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30 bg-surface-bright">
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">Active Sessions</p>
                    <p className="text-xs text-secondary">2 active sessions</p>
                  </div>
                  <button className="text-primary font-bold text-sm border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary-container/10 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Notifications Preferences */}
            <div className="xl:col-span-4 bg-white rounded-xl p-8 card-shadow border border-outline-variant/30">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Notifications</h3>
              <p className="font-body-md text-body-md text-secondary mb-6">Choose what you want to be notified about.</p>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        mic
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Mock Interviews</p>
                      <p className="text-xs text-secondary">Reminders for schedules</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" defaultChecked />
                    <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        trending_up
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Progress Updates</p>
                      <p className="text-xs text-secondary">Weekly progress reports</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" defaultChecked />
                    <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* General Preferences */}
            <div className="xl:col-span-4 bg-white rounded-xl p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Preferences</h3>
                <p className="font-body-md text-body-md text-secondary">Customize your experience.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-on-surface">Language</label>
                  <select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 cursor-pointer outline-none">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-on-surface">Time Zone</label>
                  <select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 cursor-pointer outline-none">
                    <option>(GMT+05:30) IST</option>
                    <option>(GMT+00:00) UTC</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Appearance Theme */}
            <div className="xl:col-span-4 bg-white rounded-xl p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Appearance</h3>
                <p className="font-body-md text-body-md text-secondary">Choose your theme preference.</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-primary bg-primary-container/5">
                  <span className="material-symbols-outlined text-primary text-2xl">light_mode</span>
                  <span className="text-xs font-bold text-on-surface">Light</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-secondary text-2xl">dark_mode</span>
                  <span className="text-xs font-bold text-secondary">Dark</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-outline-variant hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-secondary text-2xl">desktop_windows</span>
                  <span className="text-xs font-bold text-secondary">System</span>
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="xl:col-span-12 bg-red-50/50 rounded-xl p-8 border border-error/20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-error mb-1">Danger Zone</h3>
                <p className="font-body-md text-body-md text-on-secondary-container">
                  Irreversible and destructive actions. Proceed with extreme caution.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <button className="flex-grow md:flex-none px-6 py-3 border border-error/30 text-error rounded-lg font-bold hover:bg-error hover:text-white transition-all active:scale-95 duration-100">
                  Logout from All Devices
                </button>
                <button className="flex-grow md:flex-none px-6 py-3 bg-error text-white rounded-lg font-bold hover:bg-opacity-90 shadow-lg shadow-error/10 transition-all active:scale-95 duration-100">
                  Delete Account
                </button>
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

export default Settings;
