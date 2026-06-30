import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Mock redirect after success
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 1500);
  };

  return (
    <div className="bg-surface font-sans text-on-background min-h-screen flex flex-col md:flex-row">
      <main className="w-full min-h-screen flex flex-col md:flex-row bg-surface-container-lowest">
        
        {/* Left Side: Illustration Section */}
        <section className="hidden md:flex w-1/2 relative bg-primary items-center justify-center overflow-hidden min-h-screen p-12">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-fixed-dim blur-3xl"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-tertiary-fixed-dim blur-3xl"></div>
          </div>
          <div className="relative z-10 w-full max-w-lg text-center flex flex-col items-center">
            <div className="w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden mb-12 soft-shadow">
              <img 
                className="w-full h-full object-cover" 
                alt="A modern, high-fidelity 3D digital illustration of a professional university student sitting at a minimalist desk, engaged in a mock interview with a holographic AI assistant." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhP8wXMlk9JIFepTXhTCXXMJH-06s3EVe_r2vraB-y-xWEoFm32HFLVK_ulSd10wNA8FQn4-fHu1e2JSRXKJAXcgpuvo5H7d8YTxV7q7ShbLEXii3mKuzgAe09bCRleaLEKvILfAa-VeOejD7IXM3p-aImruiaIJi24nlKPi8og-S44jHASoSmauJ5aoJQfDokBh1JDj1eqbhoQeIFrcNq9qG1KvBpVEcE39lV416j1NX5t4BhrUYaXB4qIq14zidl2PIifTiKGuc" 
              />
            </div>
            <h2 className="font-bold text-4xl text-on-primary mb-4 leading-tight">Master your next interview with AI.</h2>
            <p className="text-lg text-on-primary-container max-w-sm opacity-90 leading-relaxed">
              Join over 50,000 candidates who used PrepPilot to land their dream careers at top tech companies.
            </p>
          </div>
        </section>

        {/* Right Side: Form Section */}
        <section className="w-full md:w-1/2 min-h-screen flex items-center justify-center px-6 py-12 md:px-12 bg-surface">
          <div className="w-full max-w-md">
            {/* Brand Anchor (Mobile Only Logo) */}
            <div className="md:hidden mb-8 flex justify-center">
              <span className="text-2xl font-bold text-primary">PrepPilot</span>
            </div>

            {/* Header */}
            <header className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-on-surface mb-2">Welcome Back</h1>
              <p className="text-on-surface-variant font-medium">Continue your interview preparation.</p>
            </header>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-bold text-sm text-on-surface-variant" htmlFor="email">Email Address</label>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-gray-400 transition-all input-focus-ring focus:border-primary outline-none" 
                    id="email" 
                    placeholder="name@company.com" 
                    required 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-bold text-sm text-on-surface-variant" htmlFor="password">Password</label>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface placeholder:text-gray-400 transition-all pr-12 input-focus-ring focus:border-primary outline-none" 
                    id="password" 
                    placeholder="••••••••" 
                    required 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors flex items-center justify-center" 
                    onClick={() => setShowPassword(!showPassword)} 
                    type="button"
                  >
                    <span className="material-symbols-outlined select-none">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between py-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      className="peer appearance-none w-5 h-5 rounded border border-outline-variant checked:bg-primary checked:border-primary transition-all cursor-pointer" 
                      type="checkbox"
                    />
                    <span className="material-symbols-outlined text-[16px] text-white absolute opacity-0 peer-checked:opacity-100 select-none pointer-events-none">check</span>
                  </div>
                  <span className="font-bold text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember Me</span>
                </label>
                <Link to="/forgot-password" className="font-bold text-sm text-primary hover:underline transition-all">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button 
                className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                  success 
                    ? "bg-green-600 text-white" 
                    : "bg-primary text-on-primary hover:shadow-lg hover:brightness-110 active:scale-[0.98]"
                }`} 
                type="submit"
                disabled={loading || success}
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                    Signing in...
                  </>
                ) : success ? (
                  <>
                    <span className="material-symbols-outlined">check_circle</span>
                    Success
                  </>
                ) : (
                  <>
                    Login
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-outline-variant"></span>
              </div>
              <div className="relative flex justify-center text-sm uppercase">
                <span className="bg-surface px-4 text-on-surface-variant font-bold">OR</span>
              </div>
            </div>

            {/* Social Login */}
            <button className="w-full py-4 border border-outline-variant bg-surface-container-lowest text-on-surface rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-3 active:scale-[0.98]" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Continue with Google
            </button>

            {/* Footer Link */}
            <p className="mt-10 text-center text-on-surface-variant font-medium">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-bold hover:underline transition-all">
                Create Account
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
