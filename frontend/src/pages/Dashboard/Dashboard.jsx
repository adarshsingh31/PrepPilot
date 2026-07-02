import AppLayout from "../../components/AppLayout";

function Dashboard() {
  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          {/* Welcome Section */}
          <section className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-left">
              <h1 className="font-headline-lg text-headline-sm md:text-headline-lg text-on-surface">Welcome back, Adarsh! 👋</h1>
              <p className="font-body-lg text-sm md:text-body-lg text-on-surface-variant mt-2">
                Let's continue your journey to crack your dream job.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant flex items-center gap-4 w-full md:w-auto">
              <div className="bg-orange-100 p-3 rounded-xl">
                <span
                  className="material-symbols-outlined text-orange-600 text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_fire_department
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-baseline gap-2">
                  <span className="font-display-xl text-4xl text-on-surface">7</span>
                  <span className="font-label-md text-on-surface-variant uppercase tracking-tighter">Day Streak</span>
                </div>
                <p className="text-xs text-on-surface-variant">Keep it up! 🔥</p>
              </div>
            </div>
          </section>

          {/* Metrics Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Metric Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary-fixed rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                </div>
                <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                  <span className="material-symbols-outlined text-xs">trending_up</span>20%
                </div>
              </div>
              <p className="font-label-md text-on-surface-variant mb-1">Mock Interviews</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-headline-md text-headline-md">12</span>
                <span className="text-xs text-on-surface-variant">Completed</span>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-primary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,25 C10,20 20,28 30,15 C40,5 50,20 60,10 C70,0 80,15 90,5 L100,10" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-tertiary-fixed rounded-xl">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                </div>
                <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                  <span className="material-symbols-outlined text-xs">trending_up</span>10%
                </div>
              </div>
              <p className="font-label-md text-on-surface-variant mb-1">Resume Score</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-headline-md text-headline-md text-tertiary">
                  85<span className="text-headline-sm text-on-surface-variant">/100</span>
                </span>
                <span className="text-xs text-tertiary font-bold">Excellent</span>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-tertiary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,20 C15,22 30,15 45,18 C60,20 75,10 90,5 L100,2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-secondary-fixed rounded-xl">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                </div>
                <div className="flex items-center gap-1 text-tertiary font-bold text-xs">
                  <span className="material-symbols-outlined text-xs">trending_up</span>15%
                </div>
              </div>
              <p className="font-label-md text-on-surface-variant mb-1">Coding Problems</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-headline-md text-headline-md">128</span>
                <span className="text-xs text-on-surface-variant">Solved</span>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-secondary fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,28 C20,28 30,15 40,20 C50,25 60,10 80,12 L100,5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Metric Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-outline-variant card-lift shadow-sm text-left">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <span className="material-symbols-outlined text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant font-bold text-xs">2 days left</div>
              </div>
              <p className="font-label-md text-on-surface-variant mb-1">Current Streak</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-headline-md text-headline-md text-orange-600">
                  7 <span className="text-headline-sm">Days</span>
                </span>
                <span className="text-xs text-on-surface-variant">Keep it up!</span>
              </div>
              <div className="h-12 w-full opacity-30">
                <svg className="w-full h-full text-orange-600 fill-none stroke-current stroke-2" viewBox="0 0 100 30">
                  <path d="M0,25 Q15,5 30,25 T60,25 T90,10 L100,15" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </section>

          {/* Bento Style Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6 text-left">
              <div className="flex justify-between items-center">
                <h2 className="font-headline-sm text-lg md:text-headline-sm text-on-surface">Quick Actions</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/mock-interview" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-primary group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-primary-fixed-dim/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">mic</span>
                  </div>
                  <p className="font-bold text-on-surface">Start Mock Interview</p>
                  <p className="text-xs text-on-surface-variant mt-1">Practice with AI</p>
                </a>
                <a href="/resume-analyzer" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-tertiary group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-tertiary-fixed-dim/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tertiary transition-colors">
                    <span className="material-symbols-outlined text-tertiary group-hover:text-white transition-colors">description</span>
                  </div>
                  <p className="font-bold text-on-surface">Analyze Resume</p>
                  <p className="text-xs text-on-surface-variant mt-1">Get AI feedback</p>
                </a>
                <a href="/coding-practice" className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-secondary group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">code</span>
                  </div>
                  <p className="font-bold text-on-surface">Practice Coding</p>
                  <p className="text-xs text-on-surface-variant mt-1">Solve problems</p>
                </a>
                <button className="bg-white p-5 rounded-2xl border border-outline-variant hover:border-orange-500 group transition-all text-left shadow-sm">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                    <span className="material-symbols-outlined text-orange-600 group-hover:text-white transition-colors">insights</span>
                  </div>
                  <p className="font-bold text-on-surface">View Progress</p>
                  <p className="text-xs text-on-surface-variant mt-1">Track your growth</p>
                </button>
              </div>
              <button className="w-full py-4 border-t border-outline-variant flex items-center justify-center gap-2 text-primary font-bold hover:bg-primary-fixed/30 transition-colors rounded-b-2xl bg-white/50">
                View All Features <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6 text-left mt-4 lg:mt-0">
              <div className="flex justify-between items-center">
                <h2 className="font-headline-sm text-lg md:text-headline-sm text-on-surface">Recent Activity</h2>
                <button className="text-primary font-bold text-sm bg-primary-fixed px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all">
                  View All
                </button>
              </div>
              <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden flex-1">
                <div className="divide-y divide-outline-variant">
                  <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">mic</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-on-surface">Completed Java Backend Interview</p>
                      <p className="text-xs text-on-surface-variant">Score: <span className="text-primary font-bold">85/100</span></p>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">2 hours ago</span>
                  </div>
                  <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 bg-tertiary-fixed rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-tertiary text-xl">description</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-on-surface">Resume analyzed</p>
                      <p className="text-xs text-on-surface-variant">Score improved to <span className="text-tertiary font-bold">85/100</span></p>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">1 day ago</span>
                  </div>
                  <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 bg-secondary-fixed rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary text-xl">code</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-on-surface">Solved 5 problems in Arrays</p>
                      <p className="text-xs text-on-surface-variant">Great job! Keep practicing.</p>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">2 days ago</span>
                  </div>
                  <div className="p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-orange-600 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-on-surface">7 day streak achieved! 🔥</p>
                      <p className="text-xs text-on-surface-variant">You're on a roll!</p>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">2 days ago</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center gap-4 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant text-xl">record_voice_over</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-on-surface">System Design Mock Interview</p>
                      <p className="text-xs text-on-surface-variant">Scheduled for Tomorrow</p>
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">Upcoming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Motivation Banner */}
          <section className="bg-surface-container rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-fixed-dim/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-surface-tint/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 relative shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-[120px] text-primary animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>
                    rocket_launch
                  </span>
                  <span className="material-symbols-outlined absolute top-4 right-4 text-tertiary-fixed-dim animate-pulse">spark</span>
                  <span className="material-symbols-outlined absolute bottom-4 left-4 text-orange-400 animate-pulse">auto_awesome</span>
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">You're doing great! 🚀</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  Consistency is the key to success. Keep practicing and you'll achieve your goals soon. Your dream career is just one interview away!
                </p>
              </div>
              <div className="shrink-0">
                <button className="bg-primary text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all text-lg">
                  Start Practice Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
