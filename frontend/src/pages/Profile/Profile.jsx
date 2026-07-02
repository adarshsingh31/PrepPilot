import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function Profile() {
  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div className="text-left">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Profile</h2>
              <p className="text-secondary font-body-md">Manage your personal information and account settings.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-surface border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all card-shadow active:scale-95 duration-100">
              <span className="material-symbols-outlined text-sm">edit</span>Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">
            <div className="xl:col-span-4 bg-white rounded-3xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img className="w-32 h-32 rounded-full object-cover border-4 border-surface-container p-1 shadow-lg" alt="Adarsh Singh Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZXA8xCUjGh4xqiqsFUAxGtgDeEgNDtbzgu4gwQ9PBFaBuDGqZgZxCo_-xixrsTtu5uRLDDDXfLNiikeb71ykTcnlJuwry2_GW5Gb-z7zvfsHJu6xulLy8aAT79enTBsNl3vwknQ_-jltaK7Ytm5MWC3gUfEwJIJCqB_mTHYlxY1C4fyTf0ClPw0H9Mjl4eRUYl4VdLC_M4qgr4XoDlW-QKMhK5yTKch5zalxKVo-gH79BoK-yH5huWYFmJWbQKAP5JJ0jhvekhek" />
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-110 transition-transform duration-200">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-1">Adarsh Singh</h3>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-8">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>Verified Student
              </div>
              <div className="w-full space-y-4">
                {[
                  { icon: "mail", label: "Email Address", val: "adarshsingh16@gmail.com" },
                  { icon: "call", label: "Phone Number", val: "+91 91234 56789" },
                  { icon: "location_on", label: "Location", val: "Raipur, Chhattisgarh, India" },
                ].map(item => (
                  <div key={item.icon} className="flex items-center gap-4 p-3 bg-surface rounded-2xl">
                    <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center shrink-0"><span className="material-symbols-outlined">{item.icon}</span></div>
                    <div className="text-left"><p className="text-[10px] text-secondary font-bold uppercase tracking-wider">{item.label}</p><p className="text-sm font-semibold text-on-surface">{item.val}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-8 flex flex-col gap-6 md:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { icon: "mic", bg: "bg-indigo-50", color: "text-primary", hbg: "group-hover:bg-primary", val: "24", label: "Mock Interviews" },
                  { icon: "description", bg: "bg-emerald-50", color: "text-tertiary", hbg: "group-hover:bg-tertiary", val: "82", suffix: "/100", label: "Resume Score" },
                  { icon: "code", bg: "bg-indigo-50", color: "text-primary", hbg: "group-hover:bg-primary", val: "128", label: "Problems Solved" },
                  { icon: "local_fire_department", bg: "bg-orange-50", color: "text-orange-600", hbg: "group-hover:bg-orange-600", val: "7", suffix: " Days", label: "Current Streak" },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-4 md:p-6 rounded-3xl border border-outline-variant/30 card-shadow text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-4 ${s.hbg} group-hover:text-white transition-colors duration-300`}><span className="material-symbols-outlined">{s.icon}</span></div>
                    <h4 className="text-3xl font-extrabold text-on-surface">{s.val}{s.suffix && <span className="text-sm font-medium">{s.suffix}</span>}</h4>
                    <p className="text-xs text-secondary font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-outline-variant/30 card-shadow text-left">
                <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 mb-6 pb-4 border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary">person_outline</span>Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    ["Full Name","Adarsh Singh"],["College","NIT Raipur"],
                    ["Email Address","adarshsingh16@gmail.com"],["Branch","CSE"],
                    ["Phone Number","+91 91234 56789"],["Year","3rd Year"],
                    ["CGPA","8.25 / 10.00"],["Location","Raipur, India"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                      <span className="text-secondary text-sm font-medium">{label}</span>
                      <span className="text-on-surface font-semibold text-sm">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-outline-variant/30 card-shadow flex flex-col">
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
                    <div className={`w-10 h-10 flex-shrink-0 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}><span className="material-symbols-outlined">{item.icon}</span></div>
                    <div className="flex-1"><p className="text-sm font-bold text-on-surface">{item.title}</p><p className="text-xs text-secondary">{item.sub}</p><p className="text-[10px] text-outline font-medium mt-1">{item.time}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-outline-variant/30 card-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-on-surface">Achievements</h3>
                <a className="text-primary text-xs font-bold hover:underline" href="#">View All</a>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "military_tech", bg: "bg-indigo-100", color: "text-primary", title: "First Interview", sub: "Completed your first mock", date: "May 10, 2024", dc: "text-primary" },
                  { icon: "emoji_events", bg: "bg-emerald-100", color: "text-tertiary", title: "Problem Solver", sub: "Solved 50 coding problems", date: "May 18, 2024", dc: "text-tertiary" },
                  { icon: "stars", bg: "bg-indigo-100", color: "text-primary", title: "Resume Improver", sub: "Scored 80+ on analyzer", date: "May 22, 2024", dc: "text-primary" },
                  { icon: "workspace_premium", bg: "bg-orange-100", color: "text-orange-600", title: "Consistent Learner", sub: "Maintained a 7-day streak", date: "May 26, 2024", dc: "text-orange-600" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-full flex items-center justify-center shrink-0`}><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span></div>
                    <div><h4 className="text-sm font-bold text-on-surface">{item.title}</h4><p className="text-[10px] text-secondary">{item.sub}</p><p className={`text-[10px] font-bold mt-1 ${item.dc}`}>{item.date}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-outline-variant/30 card-shadow">
                <h3 className="text-lg font-bold text-on-surface mb-6">Account Security</h3>
                <div className="space-y-6">
                  {[
                    { label: "Password", sub: "••••••••", btn: "Change" },
                    { label: "Two-Factor Auth", sub: "Enabled", subColor: "text-tertiary font-bold", btn: "Manage" },
                    { label: "Login Activity", sub: "Last login: Today, 10:30 AM", btn: "View" },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                      <div><p className="text-sm font-bold text-on-surface">{item.label}</p><p className={`text-xs text-secondary ${item.subColor || ""}`}>{item.sub}</p></div>
                      <button className="px-4 py-1.5 text-primary text-xs font-bold border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-colors active:scale-95 duration-100">{item.btn}</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-error-container/20 rounded-3xl p-6 lg:p-8 border border-error/20">
                <h3 className="text-lg font-bold text-error mb-4">Danger Zone</h3>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div className="w-full sm:max-w-[70%]"><p className="text-sm font-bold text-on-surface">Delete Account</p><p className="text-[10px] text-secondary mt-1 sm:mt-0">Once you delete your account, there is no going back. Please be certain.</p></div>
                  <button className="px-5 py-2 bg-white text-error text-xs font-bold border border-error rounded-xl hover:bg-error hover:text-white transition-all active:scale-95 duration-100">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Profile;
