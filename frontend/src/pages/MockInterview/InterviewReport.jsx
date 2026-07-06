import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AppLayout from "../../components/AppLayout";
import { getInterviewById } from "../../services/mockInterviewApi";

function InterviewReport() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, [id]);

  const fetchReport = async () => {
    try {
      setLoading(true);
      const data = await getInterviewById(id);
      if (data.success && data.interview) {
        setReport(data.interview);
      } else {
        toast.error("Could not load report data.");
      }
    } catch (err) {
      toast.error("Failed to fetch interview report.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
            <p className="text-on-surface-variant font-bold">Loading your detailed report...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  if (!report) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
          <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-on-surface-variant mb-4">
            <span className="material-symbols-outlined text-3xl">error</span>
          </div>
          <h2 className="text-xl font-bold text-on-surface mb-2">Report Not Found</h2>
          <p className="text-sm text-on-surface-variant mb-6">We couldn't find the interview data you're looking for.</p>
          <button 
            onClick={() => navigate("/mock-interview")}
            className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-fixed transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </AppLayout>
    );
  }

  const { domain, difficulty, duration, overallScore, questions, summary, strengths, improvements } = report;

  return (
    <AppLayout>
      <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <button 
                onClick={() => navigate("/mock-interview")}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center transition-colors text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </button>
              <h1 className="text-3xl font-extrabold text-on-surface">Interview Report</h1>
            </div>
            <p className="text-on-surface-variant text-sm ml-11">Detailed feedback and scoring for your AI Mock Interview.</p>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 bg-white rounded-2xl custom-shadow border border-outline-variant p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-6">Overall Score</h3>
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" className="text-surface-container-highest" strokeWidth="12" stroke="currentColor" fill="transparent" />
                <circle 
                  cx="64" cy="64" r="56" 
                  className="text-primary transition-all duration-1000 ease-out" 
                  strokeWidth="12" strokeDasharray={56 * 2 * Math.PI} 
                  strokeDashoffset={56 * 2 * Math.PI - ((overallScore || 0) / 100) * (56 * 2 * Math.PI)} 
                  strokeLinecap="round" stroke="currentColor" fill="transparent" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-on-surface">{overallScore || 0}</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">out of 100</span>
              </div>
            </div>
            <div className="w-full bg-surface-container-lowest p-3 rounded-xl border border-outline-variant text-sm font-bold text-on-surface">
              {overallScore >= 80 ? "Excellent Performance! 🌟" : overallScore >= 60 ? "Good Job! Keep practicing. 👍" : "Needs Improvement. Keep trying! 💪"}
            </div>
          </div>

          <div className="md:col-span-8 bg-white rounded-2xl custom-shadow border border-outline-variant p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-lg font-extrabold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">info</span>
              Session Details
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded-xl">
                <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase">Domain</p>
                <p className="text-sm font-extrabold text-on-surface">{domain}</p>
              </div>
              <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded-xl">
                <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase">Difficulty</p>
                <p className="text-sm font-extrabold text-primary">{difficulty}</p>
              </div>
              <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded-xl">
                <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase">Duration</p>
                <p className="text-sm font-extrabold text-on-surface">{duration} min</p>
              </div>
              <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded-xl">
                <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase">Questions</p>
                <p className="text-sm font-extrabold text-on-surface">{questions?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Analysis */}
        {(summary || (strengths && strengths.length > 0) || (improvements && improvements.length > 0)) && (
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">psychology</span>
              AI Analysis
            </h3>
            
            <div className="bg-white rounded-2xl custom-shadow border border-outline-variant p-6 md:p-8 space-y-8">
              {summary && (
                <div>
                  <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-3">Overall Summary</h4>
                  <p className="text-base text-on-surface leading-relaxed">{summary}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {strengths && strengths.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined">trending_up</span> Key Strengths
                    </h4>
                    <ul className="space-y-3">
                      {strengths.map((str, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-[12px] font-bold">check</span></span>
                          <span className="text-sm text-on-surface leading-relaxed">{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {improvements && improvements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined">trending_flat</span> Areas to Improve
                    </h4>
                    <ul className="space-y-3">
                      {improvements.map((imp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-[12px] font-bold">priority_high</span></span>
                          <span className="text-sm text-on-surface leading-relaxed">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Q&A Breakdown */}
        <div className="space-y-6">
          <h3 className="text-xl font-extrabold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">forum</span>
            Question Breakdown
          </h3>
          
          {questions?.map((q, i) => {
            const score = q.score || 0;
            const feedback = q.feedback || "No feedback available.";
            const answerText = q.answer || "No answer provided.";

            let scoreColor = "text-error";
            if (score >= 80) scoreColor = "text-emerald-600";
            else if (score >= 50) scoreColor = "text-amber-600";

            return (
              <div key={i} className="bg-white rounded-2xl custom-shadow border border-outline-variant overflow-hidden">
                <div className="p-5 border-b border-outline-variant bg-surface-container-lowest flex justify-between items-start gap-4">
                  <div className="flex gap-3">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <h4 className="text-base font-bold text-on-surface leading-relaxed pt-1">
                      {q.question}
                    </h4>
                  </div>
                  <div className="shrink-0 text-right bg-white px-3 py-1.5 rounded-lg border border-outline-variant shadow-sm">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase block leading-none mb-1">Score</span>
                    <span className={`text-lg font-extrabold ${scoreColor} leading-none`}>{score}/100</span>
                  </div>
                </div>
                
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">person</span> Your Answer
                    </h5>
                    <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant text-sm text-on-surface/80 min-h-[100px] whitespace-pre-wrap">
                      {answerText}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span> AI Feedback
                    </h5>
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-sm text-on-surface min-h-[100px] whitespace-pre-wrap">
                      {feedback}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="h-8"></div>
      </div>
    </AppLayout>
  );
}

export default InterviewReport;
