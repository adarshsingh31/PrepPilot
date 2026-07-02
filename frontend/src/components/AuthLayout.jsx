import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const AuthLayout = ({ children }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      const orbs = document.querySelectorAll(".orb");
      orbs.forEach((orb, i) => {
        const depth = (i + 1) * 30;
        orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-surface-container-lowest text-on-background min-h-screen flex flex-col font-sans overflow-x-hidden relative transition-colors duration-300">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="orb absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full transition-transform duration-200 ease-out"></div>
        <div
          className="orb absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-tertiary rounded-full transition-transform duration-200 ease-out"
          style={{ animationDelay: "-5s" }}
        ></div>
      </div>

      {/* Floating Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row relative z-10 min-h-screen">
        {/* Left Side: PrepPilot Branding & Features */}
        <section className="hidden md:flex flex-1 flex-col justify-center px-12 overflow-hidden relative border-r border-outline-variant/20 select-none">
          <div className="max-w-xl mx-auto w-full space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-on-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                </div>
                <span className="text-2xl font-bold text-on-surface tracking-tight">
                  PrepPilot
                </span>
              </Link>
            </div>

            <h1 className="text-5xl font-bold text-on-surface leading-tight tracking-tight">
              Ace Your Next{" "}
              <span className="text-primary">Interview</span>
            </h1>

            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
              Join over 50,000+ candidates who used PrepPilot's AI-driven insights to land their dream careers at top tech companies.
            </p>

            {/* Floating Feature Cards */}
            <div className="relative mt-8 h-96 w-full">
              {/* Mock Interview Card */}
              <div
                className="absolute top-10 left-0 glass p-6 rounded-xl w-64 shadow-2xl animate-bounce"
                style={{ animationDuration: "8s" }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                    AI Mock Interview
                  </span>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    smart_toy
                  </span>
                </div>
                <div className="text-2xl font-bold text-on-surface">
                  98% Success Rate
                </div>
                <div className="mt-2 flex items-center text-tertiary text-sm">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span className="ml-1 font-medium">+24% avg improvement</span>
                </div>
              </div>

              {/* Study Progress Card */}
              <div
                className="absolute bottom-10 right-0 glass p-6 rounded-xl w-72 shadow-2xl animate-pulse"
                style={{ animationDuration: "6s" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase">
                    Your Progress
                  </span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    insights
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-on-surface-variant">DSA Problems</span>
                    <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-on-surface-variant">System Design</span>
                    <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-3/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-on-surface-variant">Behavioural</span>
                    <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Card */}
              <div className="absolute top-1/2 left-1/3 glass p-4 rounded-xl w-52 shadow-2xl border-primary/20 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      emoji_events
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-on-surface-variant">Interview Score</div>
                    <div className="text-xl font-bold text-on-surface">9.4 / 10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Auth Form */}
        <section className="flex-1 flex flex-col items-center justify-center p-6 min-h-screen md:min-h-0">
          {/* Mobile Logo */}
          <div className="md:hidden mb-8 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  psychology
                </span>
              </div>
              <span className="text-xl font-bold text-on-surface tracking-tight">PrepPilot</span>
            </Link>
          </div>

          {/* Children (AuthCard) */}
          {children}

          {/* Secure Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-on-surface-variant select-none">
            <span
              className="material-symbols-outlined text-[18px] text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
            <span className="text-xs font-semibold">
              256-bit AES Encryption Verified
            </span>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-center select-none">
            <p className="text-xs text-on-surface-variant opacity-60">
              © 2026 PrepPilot AI. Your success, our mission. •{" "}
              <a className="hover:text-primary transition-colors" href="#">Privacy</a>
              {" "}•{" "}
              <a className="hover:text-primary transition-colors" href="#">Terms</a>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default AuthLayout;
