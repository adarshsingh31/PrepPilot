import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="bg-background font-sans text-on-background min-h-screen flex flex-col overflow-x-hidden bg-mesh">
      {/* TopNavBar */}
      <header className="w-full px-6 py-8 max-w-7xl mx-auto flex justify-center md:justify-start">
        <Link to="/" className="text-2xl font-bold text-primary">PrepPilot</Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-12 md:py-8">
        {/* Auth Card Container */}
        <div className="w-full max-w-[480px] bg-surface-container-lowest p-6 md:p-8 rounded-xl soft-elevation border border-outline-variant/30 flex flex-col gap-8 transition-all duration-300">
          
          {!success ? (
            <>
              {/* Header Section */}
              <div className="text-center md:text-left space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-fixed mb-2 animate-bounce">
                  <span className="material-symbols-outlined text-primary text-[32px]">lock_reset</span>
                </div>
                <h1 className="text-3xl font-extrabold text-on-background">Forgot Password?</h1>
                <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                  Enter your email to receive a reset link or OTP.
                </p>
              </div>

              {/* Form Section */}
              <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="font-bold text-sm text-on-surface-variant px-1" htmlFor="email">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <input 
                      className="w-full pl-11 pr-4 py-4 rounded-lg border border-outline-variant bg-surface-bright focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-on-background placeholder:text-gray-400" 
                      id="email" 
                      name="email" 
                      placeholder="name@example.com" 
                      required 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-primary-container transition-all active:scale-[0.98] flex items-center justify-center gap-2 group shadow-sm" 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  ) : (
                    <>
                      <span>Send Reset Link</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center space-y-4 animate-in fade-in duration-500">
              <div className="p-6 rounded-lg bg-tertiary-container/10 border border-tertiary/20">
                <span className="material-symbols-outlined text-green-600 text-[48px] mb-2">check_circle</span>
                <p className="text-2xl font-bold text-green-700 mb-2">Check your email</p>
                <p className="text-sm font-semibold text-on-surface-variant leading-relaxed">
                  We've sent a password reset link to <strong className="text-on-background">{email}</strong>. Please check your inbox and spam folder.
                </p>
              </div>
            </div>
          )}

          {/* Footer Links */}
          <div className="pt-4 border-t border-outline-variant/50 flex flex-col items-center gap-4">
            <Link to="/login" className="font-bold text-sm text-primary hover:text-primary-container flex items-center gap-1 transition-colors">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Login
            </Link>
            <p className="text-sm font-semibold text-on-surface-variant/70">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </main>

      {/* Aesthetic Decorative Elements */}
      <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tertiary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Footer */}
      <footer className="w-full px-6 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-outline-variant/30 mt-auto">
        <div className="text-sm font-bold text-on-surface-variant">© 2024 PrepPilot AI. All rights reserved.</div>
        <div className="flex gap-6">
          <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary transition-all" href="#">Privacy Policy</a>
          <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary transition-all" href="#">Terms of Service</a>
          <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary transition-all" href="#">Help Center</a>
        </div>
      </footer>
    </div>
  );
}

export default ForgotPassword;
