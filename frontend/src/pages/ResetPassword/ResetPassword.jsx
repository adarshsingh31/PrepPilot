import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Requirements check
  const hasMinLength = password.length >= 8;
  const hasSymbolOrNum = /[^A-Za-z0-9]/.test(password) || /[0-9]/.test(password);

  // Strength score
  let strength = 0;
  if (password.length > 0) {
    if (hasMinLength) strength++;
    if (hasSymbolOrNum) strength++;
    if (password.length > 10) strength++;
    if (password.length > 14) strength++;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);

    // Mock API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }, 2000);
  };

  const getStrengthSegmentClass = (index) => {
    if (index < strength) {
      if (strength <= 1) return "bg-error";
      if (strength <= 2) return "bg-orange-400";
      return "bg-green-600";
    }
    return "bg-outline-variant";
  };

  return (
    <div className="bg-background font-sans text-on-background min-h-screen flex flex-col mesh-gradient">
      {/* Top Navigation Bar */}
      <header className="bg-transparent top-0 z-50 w-full">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-primary">PrepPilot</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/login" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200">
              Back to Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[480px]">
          {/* Reset Password Card */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl card-shadow border border-outline-variant relative overflow-hidden text-left">
            {/* Atmospheric background elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Brand Icon/Logo Placeholder */}
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[32px]">lock_reset</span>
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold text-on-surface mb-3">Reset Password</h1>
                <p className="text-sm font-medium text-on-surface-variant">Choose a strong new password for your account.</p>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* New Password Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant block uppercase tracking-wider" htmlFor="new_password">New Password</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                    <input 
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-outline-variant rounded-lg font-medium text-on-surface placeholder:text-gray-400 focus-ring transition-all outline-none" 
                      id="new_password" 
                      name="new_password" 
                      placeholder="••••••••" 
                      required 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* Strength Meter */}
                  <div className="flex gap-1 mt-2">
                    {[0, 1, 2, 3].map((index) => (
                      <div key={index} className={`h-1 flex-1 rounded-full transition-colors ${getStrengthSegmentClass(index)}`} />
                    ))}
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant block uppercase tracking-wider" htmlFor="confirm_password">Confirm Password</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">verified_user</span>
                    <input 
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-outline-variant rounded-lg font-medium text-on-surface placeholder:text-gray-400 focus-ring transition-all outline-none" 
                      id="confirm_password" 
                      name="confirm_password" 
                      placeholder="••••••••" 
                      required 
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Requirements Checklist */}
                <div className="bg-surface-container-low p-4 rounded-lg space-y-2">
                  <div className={`flex items-center gap-3 text-sm font-semibold transition-colors ${hasMinLength ? "text-green-600" : "text-on-surface-variant"}`}>
                    <span className={`material-symbols-outlined text-[18px] ${hasMinLength ? "text-green-600" : "text-outline"}`}>check_circle</span>
                    <span>At least 8 characters long</span>
                  </div>
                  <div className={`flex items-center gap-3 text-sm font-semibold transition-colors ${hasSymbolOrNum ? "text-green-600" : "text-on-surface-variant"}`}>
                    <span className={`material-symbols-outlined text-[18px] ${hasSymbolOrNum ? "text-green-600" : "text-outline"}`}>check_circle</span>
                    <span>Include a symbol or number</span>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg ${
                    success 
                      ? "bg-green-600" 
                      : "bg-primary hover:bg-primary-container active:scale-95 shadow-primary/20"
                  }`} 
                  type="submit"
                  disabled={loading || success}
                >
                  {loading ? (
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  ) : success ? (
                    <>
                      <span className="material-symbols-outlined">check_circle</span>
                      Password Updated!
                    </>
                  ) : (
                    <>
                      Update Password
                      <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>

              {/* Support Link */}
              <div className="mt-8 text-center">
                <a className="text-sm font-bold text-primary hover:underline transition-all" href="#">
                  Need help? Contact support
                </a>
              </div>
            </div>
          </div>

          {/* Security Trust Signals */}
          <div className="mt-12 flex items-center justify-center gap-6 opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface text-[20px]">shield_lock</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">End-to-End Encrypted</span>
            </div>
            <div className="w-px h-4 bg-outline-variant"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface text-[20px]">verified</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">PCI Compliant</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface dark:bg-background border-t border-outline-variant mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8 max-w-7xl mx-auto">
          <div className="text-sm font-bold text-on-surface mb-4 md:mb-0">
            PrepPilot
          </div>
          <div className="flex gap-6 mb-4 md:mb-0">
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary underline transition-all" href="#">Privacy Policy</a>
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary underline transition-all" href="#">Terms of Service</a>
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary underline transition-all" href="#">Help Center</a>
          </div>
          <div className="text-sm font-medium text-on-secondary-fixed-variant">
            © 2024 PrepPilot AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ResetPassword;
