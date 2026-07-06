import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AppLayout from "../../components/AppLayout";
import { submitAnswer, finishInterview } from "../../services/mockInterviewApi";

function InterviewSession() {
  const location = useLocation();
  const navigate = useNavigate();

  const [sessionData, setSessionData] = useState(() => {
    if (location.state && location.state.interviewId) {
      return location.state;
    }
    const saved = sessionStorage.getItem("activeInterview");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  // Redirect if accessed directly without state and no session storage
  useEffect(() => {
    if (!sessionData || !sessionData.interviewId || !sessionData.questions) {
      toast.error("No active interview session found.");
      navigate("/mock-interview");
    }
  }, [sessionData, navigate]);

  const interviewId = sessionData?.interviewId;
  const questions = sessionData?.questions || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submittedQuestions, setSubmittedQuestions] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  
  // Temporary state for the current answer being typed
  const [currentAnswer, setCurrentAnswer] = useState("");

  // Sync currentAnswer when index changes
  useEffect(() => {
    setCurrentAnswer(answers[currentIndex] || "");
  }, [currentIndex, answers]);

  const handleNext = async () => {
    if (!currentAnswer.trim()) {
      toast.error("Please provide an answer before proceeding.");
      return;
    }

    // Save answer locally
    setAnswers((prev) => ({ ...prev, [currentIndex]: currentAnswer }));

    if (submittedQuestions.has(currentIndex)) {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitAnswer({
        interviewId,
        questionIndex: currentIndex,
        answer: currentAnswer,
      });

      if (response.success) {
        toast.success(`Score: ${response.score}/100.`, { duration: 4000 });
        setSubmittedQuestions(prev => new Set(prev).add(currentIndex));
        
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      }
    } catch (error) {
      toast.error(error.message || "Failed to submit answer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevious = () => {
    // Save current typed answer locally before moving back
    setAnswers((prev) => ({ ...prev, [currentIndex]: currentAnswer }));
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinish = async () => {
    if (!currentAnswer.trim()) {
      toast.error("Please answer the final question before finishing.");
      return;
    }

    // Ensure the last answer is saved
    setAnswers((prev) => ({ ...prev, [currentIndex]: currentAnswer }));

    setIsFinishing(true);
    try {
      if (!submittedQuestions.has(currentIndex)) {
        const answerResponse = await submitAnswer({
          interviewId,
          questionIndex: currentIndex,
          answer: currentAnswer,
        });

        if (answerResponse.success) {
          setSubmittedQuestions(prev => new Set(prev).add(currentIndex));
          toast.success(`Score: ${answerResponse.score}/100.`, { duration: 2000 });
        } else {
          setIsFinishing(false);
          return;
        }
      }

      const response = await finishInterview(interviewId);
      if (response.success) {
        sessionStorage.removeItem("activeInterview");
        toast.success("Interview completed successfully!");
        navigate(`/mock-interview/report/${interviewId}`);
      }
    } catch (error) {
      toast.error(error.message || "Failed to finish interview.");
    } finally {
      setIsFinishing(false);
    }
  };

  if (!questions.length) return null;

  const currentQuestion = questions[currentIndex];
  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  return (
    <AppLayout>
      <div className="p-4 md:p-8 min-h-[calc(100vh-80px)] flex flex-col">
        <div className="max-w-4xl mx-auto w-full space-y-6 flex-1 flex flex-col">
          
          {/* Header & Progress */}
          <div className="bg-white rounded-2xl custom-shadow border border-outline-variant p-6">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-2xl font-extrabold text-on-surface">Active Session</h2>
                <p className="text-sm font-bold text-primary mt-1">Question {currentIndex + 1} of {questions.length}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
                  {Math.round(progressPercentage)}% Completed
                </span>
              </div>
            </div>
            
            <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Question Box */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6 md:p-10 shadow-sm flex-1 flex flex-col">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1">
                <span className="material-symbols-outlined font-bold">help_center</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface leading-relaxed">
                {currentQuestion?.question}
              </h3>
            </div>

            <div className="flex-1 flex flex-col relative">
              <label className="text-sm font-bold text-on-surface-variant mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">edit_note</span>
                Your Answer
              </label>
              <textarea
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full flex-1 min-h-[250px] p-4 bg-surface rounded-xl border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all text-on-surface text-base"
                disabled={isSubmitting || isFinishing}
              ></textarea>
              
              <div className="absolute bottom-4 right-4 text-xs font-medium text-on-surface-variant/50">
                {currentAnswer.length} chars
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0 || isSubmitting || isFinishing}
              className="px-6 py-3 border border-outline-variant rounded-xl font-bold text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Previous
            </button>

            {!isLastQuestion ? (
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    {submittedQuestions.has(currentIndex) ? "Next" : "Submit & Next"}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={isFinishing || isSubmitting}
                className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0 flex items-center gap-2"
              >
                {isFinishing ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Finish Interview
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default InterviewSession;
