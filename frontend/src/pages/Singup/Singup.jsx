import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Singup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);

    // Mock API signup request
    setTimeout(() => {
      setLoading(false);
      navigate("/otp");
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans">
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Illustration Section */}
        <section className="hidden md:flex flex-col justify-center items-center p-12 bg-primary-fixed relative overflow-hidden min-h-screen">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary-fixed-dim/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-md text-center flex flex-col items-center">
            <div className="mb-12 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500 w-full">
              <img 
                className="w-full aspect-[4/3] object-cover" 
                alt="A cinematic, minimalist digital illustration depicting a professional reaching the summit of a mountain made of glowing data nodes." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoFagHkOVOymdWeP0HAOljGMM0ioKvdTlicFF0w1qiDHYvLgbXBlx5dKfmE_OfqMH2pNU_ByWd2BmlqTifIfSp_K1Ynmp4RwI2hh_Kvglid2NOWy1fTovYURIcFfVsn1D-K6vgXheOrwYM84YuIygKeZhuuRSrV4Dd9EDJa_DmYrKzLfPnYOebJn-EwXrVlpOY2ExqqqtRZcrno_GRg7iSmPv3w7NMIal7KyfQDjeuio0zkJvW3G3EGqKDN85bVaMBRm9-dMid8L0" 
              />
            </div>
            <h2 className="text-3xl font-extrabold text-on-primary-fixed mb-4">Master Your Future</h2>
            <p className="text-lg text-on-secondary-fixed-variant leading-relaxed">
              Join over 50,000 candidates who transformed their interview performance with PrepPilot's AI-driven insights.
            </p>
            {/* Achievement Chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">verified</span> 98% Success Rate
              </span>
              <span className="px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">bolt</span> 24/7 AI Mock Interviews
              </span>
            </div>
          </div>
        </section>

        {/* Right Side: Form Section */}
        <section className="flex flex-col justify-center items-center p-8 bg-surface min-h-screen">
          <div className="w-full max-w-md">
            {/* Brand Anchor */}
            <div className="mb-12 md:mb-8 text-center md:text-left">
              <span className="text-2xl font-bold text-primary">PrepPilot</span>
            </div>
            
            <div className="mb-8 text-left">
              <h1 className="text-3xl font-extrabold text-on-surface mb-2">Create Your Account</h1>
              <p className="text-on-surface-variant font-medium">Start your interview preparation journey today.</p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="text-left">
                <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="name">Full Name</label>
                <input 
                  className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg text-on-surface placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" 
                  id="name" 
                  placeholder="Enter your full name" 
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="text-left">
                <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="email">Email Address</label>
                <input 
                  className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg text-on-surface placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" 
                  id="email" 
                  placeholder="name@company.com" 
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="text-left">
                <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="password">Password</label>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg text-on-surface placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all pr-12" 
                    id="password" 
                    placeholder="••••••••" 
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors" 
                    onClick={() => setShowPassword(!showPassword)} 
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="text-left">
                <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="confirm-password">Confirm Password</label>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg text-on-surface placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all pr-12" 
                    id="confirm-password" 
                    placeholder="••••••••" 
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* T&C Checkbox */}
              <div className="flex items-start gap-3 py-2 text-left">
                <input 
                  className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" 
                  id="terms" 
                  required
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label className="text-sm font-medium text-on-surface-variant cursor-pointer select-none" htmlFor="terms">
                  I agree to the <a className="text-primary hover:underline" href="#">Terms & Conditions</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2" 
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-surface px-4 text-on-surface-variant uppercase tracking-wider font-bold">OR</span>
              </div>
            </div>

            {/* Social Signup */}
            <button className="w-full py-4 bg-white border border-outline-variant text-on-surface font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-surface-container-low transition-colors duration-200">
              <img 
                alt="Google Logo" 
                className="w-5 h-5" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADoORIJWGA1f-Msh4X3f_I2nSP28OHLG5rwMu-D2l_zDkak0YTO1rj28qO_IXcLihqAAjCgDCzyiBL6LDZF5Dz0EvVDcFW-Dz_tg3JDv6RmNW77qDfL9MOPFm14N1OU9PxwPLpvEYGbjDwns3qD6uc_UzNf3UAv7xJEfhkc8EYWEO_eYaU3LVkjI7Mzs00-SmVV5Ni2FZcVclAyNyEu5FVvX-_zsT8VBxnQGWEJDfgNMK7UfEGVpvO4hl2G8Bl0YE0P6mbBgWBXTA" 
              />
              Continue with Google
            </button>

            {/* Footer Link */}
            <div className="mt-8 text-center">
              <p className="text-on-surface-variant font-medium">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-bold hover:underline ml-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Transactional Footer */}
      <footer className="bg-surface border-t border-outline-variant py-6 px-12 text-center md:text-left mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm font-semibold text-on-secondary-fixed-variant">© 2024 PrepPilot AI. All rights reserved.</span>
          <div className="flex gap-6">
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-sm font-semibold text-on-secondary-fixed-variant hover:text-primary transition-colors" href="#">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Singup;
