import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import { analyzeResume } from "../../services/resumeService";

// ─── Alert Modal ──────────────────────────────────────────────────────────────
function AlertModal({ onClose, message }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 animate-fade-in"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-on-surface text-lg">
            Action Required
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <p className="text-sm text-on-surface-variant mb-6">
          {message}
        </p>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-6 rounded-lg text-sm font-bold bg-primary text-white hover:shadow-lg transition cursor-pointer"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

function ResumeAnalyzer() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setError(null);
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const handleUpload = async (e) => {
    if (e) e.stopPropagation();
    if (!file) {
      setError("Please select a resume to upload.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await analyzeResume(formData);
      if (response.success) {
        setAnalysis(response.analysis);
      } else {
        setError(response.message || "Failed to analyze resume.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred while analyzing the resume.");
    } finally {
      setLoading(false);
    }
  };

  const getHeading = (score) => {
    if (score >= 90) return "Excellent!";
    if (score >= 75) return "Great Job!";
    if (score >= 60) return "Good Progress!";
    return "Needs Improvement";
  };


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
            <button 
              onClick={() => window.open('/sample_resume.pdf', '_blank')}
              className="px-6 py-2.5 bg-white border border-outline-variant rounded-lg text-primary font-bold flex items-center gap-2 hover:bg-surface-container-low transition-colors text-sm shadow-sm active:scale-95 duration-100"
            >
              <span className="material-symbols-outlined text-lg">visibility</span>View Sample Resumes
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-1 lg:col-span-7 space-y-6 lg:space-y-8">
              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-1">Upload Your Resume</h3>
                <p className="text-sm text-on-surface-variant mb-6">Upload your latest resume in PDF format to get started.</p>
                <div 
                  className="border-2 border-dashed border-primary-fixed-dim rounded-xl p-10 flex flex-col items-center justify-center bg-primary-container/5 hover:bg-primary-container/10 transition-all cursor-pointer group"
                  onClick={() => fileInputRef.current.click()}
                >
                  <input
                    type="file"
                    accept="application/pdf"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                  </div>
                  <p className="font-bold text-on-surface mb-1">
                    {file ? file.name : "Click to upload your resume"}
                  </p>
                  <p className="text-xs text-on-surface-variant mb-6">or</p>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 duration-100">
                    {file ? "Change File" : "Choose File"}
                  </button>
                  <p className="mt-6 flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Supports PDF (Max 5MB)
                  </p>
                </div>
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                {file && (
                  <button 
                    onClick={handleUpload} 
                    disabled={loading}
                    className="w-full mt-4 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition-all active:scale-95 duration-100 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading && <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>}
                    {loading ? "Analyzing..." : "Analyze Resume"}
                  </button>
                )}
              </div>

              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-6">Detailed Feedback</h3>
                <div className="space-y-4">
                  {[
                    { icon: "check_circle", bg: "bg-emerald-50", color: "text-emerald-600", badge: "Good", badgeBg: "bg-emerald-100 text-emerald-700", title: "Strengths", desc: analysis?.strengths?.length > 0 ? analysis.strengths.join(" • ") : (analysis ? "None" : "Upload to see strengths.") },
                    { icon: "warning", bg: "bg-orange-50", color: "text-orange-500", badge: "Moderate", badgeBg: "bg-orange-100 text-orange-700", title: "Improvements", desc: analysis?.improvements?.length > 0 ? analysis.improvements.join(" • ") : (analysis ? "None" : "Upload to see improvements.") },
                    { icon: "info", bg: "bg-blue-50", color: "text-blue-600", badge: "Important", badgeBg: "bg-blue-100 text-blue-700", title: "ATS Tips", desc: analysis?.atsTips?.length > 0 ? analysis.atsTips.join(" • ") : (analysis ? "None" : "Upload to see ATS tips.") },
                    { icon: "lightbulb", bg: "bg-primary-container/10", color: "text-primary", badge: analysis?.missingKeywords ? `${analysis.missingKeywords.length} Keywords` : "0 Keywords", badgeBg: "bg-primary-fixed text-primary font-bold", title: "Missing Keywords", desc: analysis?.missingKeywords ? `Consider adding: ${analysis.missingKeywords.join(", ")}` : (analysis ? "None" : "Upload to see missing keywords.") },
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
                <button 
                  onClick={() => {
                    if (analysis) {
                      navigate('/resume/report', { state: { analysis } });
                    } else {
                      setAlertMessage('Please first add the resume then get the report');
                      setShowAlert(true);
                    }
                  }}
                  className="w-full mt-8 py-3 border border-outline-variant rounded-lg text-primary font-bold hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 text-sm duration-200"
                >
                  View Full Analysis Report<span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-5 space-y-6 lg:space-y-8">
              <div className="bg-white p-8 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-headline-sm text-lg font-bold mb-6 lg:mb-8">Your Resume Score</h3>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 mb-8 text-center sm:text-left">
                  <div 
                    className="relative w-32 h-32 sm:w-36 sm:h-36 circular-progress rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-200 shrink-0"
                    style={{ "--progress-score": analysis ? analysis.score : 0 }}
                  >
                    <div className="text-center"><span className="block text-4xl font-extrabold text-on-surface">{analysis ? analysis.score : 0}</span><span className="text-xs font-bold text-on-surface-variant">/100</span></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2"><h4 className="font-bold text-primary">{analysis ? getHeading(analysis.score) : "Not Analyzed Yet"}</h4></div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {analysis ? "Your resume is strong and well-structured. Some improvements can make it even better." : "Upload a resume to see your score and get detailed feedback."}
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  {[
                    ["Content", analysis ? analysis.contentScore : 0],
                    ["Structure", analysis ? analysis.structureScore : 0],
                    ["Skills", analysis ? analysis.skillsScore : 0],
                    ["ATS Optimization", analysis ? analysis.atsScore : 0]
                  ].map(([label, w]) => (
                    <div key={label} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold"><span className="text-on-surface">{label}</span><span className="text-on-surface-variant">{w}/100</span></div>
                      <div className="h-2 bg-secondary-container rounded-full overflow-hidden"><div className="h-full bg-primary-container rounded-full" style={{ width: `${w}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-bold text-on-surface mb-4">Resume Preview</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-32 h-48 sm:h-44 bg-surface-container-low rounded-lg border border-outline-variant overflow-hidden relative group shrink-0">
                    {previewUrl ? (
                      <iframe className="w-full h-full border-none" src={`${previewUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} title="Resume Preview" />
                    ) : (
                      <img className="w-full h-full object-cover" alt="Resume Document Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcLitFaLWVPNRj5IGRSEJ61--QCIkjvMR2PwNOXix6RlGnahYAuwmtA83ONBglACEwBzTJ-AVU_CUQnX2vkjTJSb9EJZ3j1ps0zn6UKFBJsigirDjW5gk3zxZZtZxVFzlmg_7G7j3GdUXdnaKUzxFU5MMrYNJfgKgQyOrvwBDPJ_bNpitvRyptYRbRkCcE8ILpzqqygmk2vtB9Y0zjUhr7aaRuEKXBCKEq93wks9xb0wV_DpUbKmYUzmm6UVvX-4rSBzmxQt6b5as" />
                    )}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-200 pointer-events-none"><span className="material-symbols-outlined text-primary">zoom_in</span></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-3">
                    <button 
                      onClick={() => previewUrl && window.open(previewUrl, '_blank')}
                      disabled={!previewUrl}
                      className="w-full py-2 px-4 border border-outline-variant rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-95 duration-100 disabled:opacity-50"
                    >
                      View Full Resume<span className="material-symbols-outlined text-xs">open_in_new</span>
                    </button>
                    <button 
                      onClick={() => {
                        if (previewUrl) {
                          const a = document.createElement('a');
                          a.href = previewUrl;
                          a.download = file?.name || 'resume.pdf';
                          a.click();
                        }
                      }}
                      disabled={!previewUrl}
                      className="w-full py-2 px-4 border border-outline-variant rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-surface-container-low transition-all active:scale-95 duration-100 disabled:opacity-50"
                    >
                      Download PDF<span className="material-symbols-outlined text-xs">download</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-outline-variant custom-shadow text-left">
                <h3 className="font-bold text-on-surface mb-4">Top Skills Detected</h3>
                <div className="flex flex-wrap gap-2">
                  {(() => {
                    let skillsList = analysis ? [] : ["Upload to see skills"];
                    if (analysis?.skills) {
                      if (Array.isArray(analysis.skills) && analysis.skills.length > 0) {
                        skillsList = analysis.skills;
                      } else if (typeof analysis.skills === 'string') {
                        skillsList = analysis.skills.split(',').map(s => s.trim()).filter(Boolean);
                      }
                    }
                    return skillsList.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-container/10 text-primary rounded-full text-xs font-bold">{skill}</span>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlert && (
        <AlertModal 
          message={alertMessage} 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </AppLayout>
  );
}

export default ResumeAnalyzer;
