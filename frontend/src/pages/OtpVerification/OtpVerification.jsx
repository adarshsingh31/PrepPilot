import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function OtpVerification() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef([]);

  // Resend OTP countdown timer logic
  useEffect(() => {
    let timer = null;
    if (resendDisabled && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setResendDisabled(false);
      setTimeLeft(30);
    }
    return () => clearInterval(timer);
  }, [resendDisabled, timeLeft]);

  const handleChange = (e, index) => {
    const val = e.target.value;
    if (isNaN(Number(val))) return;

    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
    setOtp(newOtp);

    // Focus next input if input is not empty
    if (val.length > 0 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Backspace focus previous
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").slice(0, 6);
    if (data.length === 6 && /^\d+$/.test(data)) {
      const chars = data.split("");
      setOtp(chars);
      inputRefs.current[5].focus();
    }
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }, 1500);
    }
  };

  const handleResend = () => {
    setResendDisabled(true);
    // Mock sending code again...
  };

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-on-background overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
            PrepPilot
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 pt-20 pb-12 relative overflow-hidden">
        {/* Decorative Ambient Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-fixed opacity-20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-tertiary-fixed-dim opacity-10 blur-[100px] rounded-full"></div>
        
        {/* Verification Card */}
        <section className="w-full max-w-[480px] z-10">
          <div className="bg-surface-container-lowest card-elevation rounded-xl p-8 md:p-12 border border-outline-variant transition-all duration-300">
            {/* Icon/Branding */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">mark_email_unread</span>
              </div>
            </div>
            {/* Text Content */}
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold text-on-background mb-2">Verify Your Email</h1>
              <p className="text-sm font-medium text-on-surface-variant">We've sent a 6-digit code to your email.</p>
            </div>
            {/* OTP Input Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 md:gap-3" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="otp-input w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-extrabold rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none transition-all"
                    maxLength={1}
                    type="text"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              
              <button 
                className={`w-full py-4 font-bold rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-200 ${
                  success 
                    ? "bg-green-600 text-white" 
                    : "bg-primary text-on-primary hover:scale-[1.02] active:scale-95"
                }`} 
                type="submit"
                disabled={loading || success || otp.join("").length < 6}
              >
                {loading ? (
                  <span className="material-symbols-outlined animate-spin">sync</span>
                ) : success ? (
                  "Success!"
                ) : (
                  "Verify"
                )}
              </button>
            </form>
            
            {/* Resend Action */}
            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-on-surface-variant">
                Didn't receive the code?{" "}
                <button 
                  className={`font-semibold hover:underline transition-all ml-1 ${
                    resendDisabled ? "text-gray-400 cursor-not-allowed" : "text-primary"
                  }`} 
                  onClick={handleResend}
                  disabled={resendDisabled}
                  type="button"
                >
                  Resend OTP
                </button>
              </p>
              {resendDisabled && (
                <div className="mt-2 text-xs font-semibold text-gray-400">
                  Resend available in <span>{timeLeft}</span>s
                </div>
              )}
            </div>
            
            {/* Assistance Link */}
            <div className="mt-12 pt-8 border-t border-outline-variant flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">help_outline</span>
              <a className="text-sm font-semibold text-secondary hover:text-primary transition-colors" href="#">
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8 max-w-7xl mx-auto border-t border-outline-variant">
          <div className="text-sm font-bold text-on-surface mb-4 md:mb-0">
            PrepPilot
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary underline transition-all" href="#">Help Center</a>
          </div>
          <div className="text-sm font-medium text-on-secondary-fixed-variant mt-4 md:mt-0">
            © 2024 PrepPilot AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OtpVerification;
