import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function ResumeAnalyzer() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
              </div>
              <div>
                <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">Resume Analyzer</h2>
                <p className="text-body-md text-on-surface-variant">Get AI-powered feedback to improve your resume and increase your chances of getting shortlisted.</p>
              </div>
            </div>
            <button className="px-6 py-2.5 bg-white border border-outline-variant rounded-lg text-primary font-bold flex items-center gap-2 hover:bg-surface-container-low transition-colors text-sm shadow-sm active:scale-95 duration-100">
              <span className="material-symbols-outlined text-lg">visibility</span>View Sample Resumes
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-1 lg:col-span-7 space-y-6 lg:space-y-8">
              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-1">Upload Your Resume</h3>
                <p className="text-sm text-on-surface-variant mb-6">Upload your latest resume in PDF format to get started.</p>
                <div className="border-2 border-dashed border-primary-fixed-dim rounded-xl p-10 flex flex-col items-center justify-center bg-primary-container/5 hover:bg-primary-container/10 transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                  </div>
                  <p className="font-bold text-on-surface mb-1">Drag &amp; drop your resume here</p>
                  <p className="text-xs text-on-surface-variant mb-6">or</p>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 duration-100">Choose File</button>
                  <p className="mt-6 flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Supports PDF (Max 5MB)
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-6">Detailed Feedback</h3>
                <div className="space-y-4">
                  {[
                    { icon: "check_circle", bg: "bg-emerald-50", color: "text-emerald-600", badge: "Good", badgeBg: "bg-emerald-100 text-emerald-700", title: "Strengths", desc: "Good use of metrics, clear work experience, relevant skills." },
                    { icon: "warning", bg: "bg-orange-50", color: "text-orange-500", badge: "Moderate", badgeBg: "bg-orange-100 text-orange-700", title: "Improvements", desc: "Add more quantified achievements, improve summary section." },
                    { icon: "info", bg: "bg-blue-50", color: "text-blue-600", badge: "Important", badgeBg: "bg-blue-100 text-blue-700", title: "ATS Tips", desc: "Use standard section titles, avoid using images and columns." },
                    { icon: "lightbulb", bg: "bg-primary-container/10", color: "text-primary", badge: "5 Keywords", badgeBg: "bg-primary-fixed text-primary font-bold", title: "Missing Keywords", desc: "Consider adding: Leadership, Problem Solving, Agile, Git, SQL" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl border border-outline-variant flex items-start gap-4 hover:border-primary-fixed-dim transition-colors duration-200">
                      <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center ${item.color} shrink-0`}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-on-surface text-sm">{item.title}</h4>
                          <span className={`px-2.5 py-0.5 ${item.badgeBg} rounded-full text-[10px] uppercase tracking-wider`}>{item.badge}</span>
                        </div>
                        <p className="text-xs text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 border border-outline-variant rounded-lg text-primary font-bold hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 text-sm duration-200">
                  View Full Analysis Report<span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-5 space-y-6 lg:space-y-8">
              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-6 lg:mb-8">Your Resume Score</h3>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 mb-8 text-center sm:text-left">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 circular-progress rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-200 shrink-0">
                    <div className="text-center"><span className="block text-4xl font-extrabold text-on-surface">82</span><span className="text-xs font-bold text-on-surface-variant">/100</span></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2"><h4 className="font-bold text-primary">Great Job! 🚀</h4></div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Your resume is strong and well-structured. Some improvements can make it even better.</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {[["Content","85%"],["Structure","80%"],["Skills","90%"],["ATS Optimization","75%"]].map(([label, w]) => (
                    <div key={label} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold"><span className="text-on-surface">{label}</span><span className="text-on-surface-variant">{w.replace('%','')}/100</span></div>
                      <div className="h-2 bg-secondary-container rounded-full overflow-hidden"><div className="h-full bg-primary-container rounded-full" style={{ width: w }} /></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-bold text-on-surface mb-4">Resume Preview</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-32 h-48 sm:h-44 bg-surface-container-low rounded-lg border border-outline-variant overflow-hidden relative group shrink-0">
                    <img className="w-full h-full object-cover" alt="Resume Document Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcLitFaLWVPNRj5IGRSEJ61--QCIkjvMR2PwNOXix6RlGnahYAuwmtA83ONBglACEwBzTJ-AVU_CUQnX2vkjTJSb9EJZ3j1ps0zn6UKFBJsigirDjW5gk3zxZZtZxVFzlmg_7G7j3GdUXdnaKUzxFU5MMrYNJfgKgQyOrvwBDPJ_bNpitvRyptYRbRkCcE8ILpzqqygmk2vtB9Y0zjUhr7aaRuEKXBCKEq93wks9xb0wV_DpUbKmYUzmm6UVvX-4rSBzmxQt6b5as" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-200"><span className="material-symbols-outlined text-primary">zoom_in</span></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-3">
                    <button className="w-full py-2 px-4 border border-outline-variant rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-95 duration-100">View Full Resume<span className="material-symbols-outlined text-xs">open_in_new</span></button>
                    <button className="w-full py-2 px-4 border border-outline-variant rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-95 duration-100">Download PDF<span className="material-symbols-outlined text-xs">download</span></button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-bold text-on-surface mb-4">Top Skills Detected</h3>
                <div className="flex flex-wrap gap-2">
                  {["C++","Java","JavaScript","React","Node.js","MongoDB","SQL","Git","DSA","Problem Solving"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary-container/10 text-primary rounded-full text-xs font-bold">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex items-center justify-between group cursor-pointer transition-all hover:bg-emerald-100/50 duration-200 text-left">
                <div className="flex-1">
                  <h4 className="font-bold text-on-surface text-sm mb-1">Need help improving your resume?</h4>
                  <p className="text-xs text-on-surface-variant mb-3">Get expert tips on building a resume that gets you hired.</p>
                  <a className="text-emerald-600 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all" href="#">View Resume Guide<span className="material-symbols-outlined text-xs">arrow_forward</span></a>
                </div>
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>manage_search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default ResumeAnalyzer;
