import { Link } from "react-router-dom";
import MagicRings from './MagicRings';

function Landing() {
  return (
    <div className="antialiased min-h-screen bg-white text-gray-900 font-sans relative">
      {/* Background Magic Rings */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none z-[1]">
        <MagicRings
          color="#00008B"
          colorTwo="#0000CD"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1.0}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      <div className="relative z-10">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">PrepPilot</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-semibold border-b-2 border-primary py-1" href="#home">Home</a>
            <a className="text-gray-600 hover:text-primary transition-colors py-1" href="#features">Features</a>
            <a className="text-gray-600 hover:text-primary transition-colors py-1" href="#how-it-works">How It Works</a>
            <a className="text-gray-600 hover:text-primary transition-colors py-1" href="#testimonials">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-700 font-medium hover:text-primary transition-colors">
              Log in
            </Link>
            <Link to="/signup" className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-container transition-all active:scale-95">
              Sign up
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="hero-bg-gradient pt-16 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Copy */}
            <div className="text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                AI-Powered Interview Preparation
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Ace Your Technical <br />
                Interviews <span className="text-primary">with AI</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Practice coding interviews, analyze your resume, track your progress, and prepare smarter with AI-driven insights.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/signup" className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-container transition-all group">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </Link>
                <a href="#features" className="bg-white border-2 border-indigo-100 text-primary px-8 py-3.5 rounded-lg font-bold hover:bg-indigo-50 transition-all flex items-center">
                  Learn More
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArIBEiNmQ8dpvxxX38Qtkdd1iQ55Y0aKYvNJd0BhDEO0zHKBNrl1fL0011dv_CYXyzF-oWnt-lKwx3MRa05VlseAfTtIM6WKmUBc0yGqTXR07LrGwEzE6PVCUn8z2whopauusD9Mlp9DR6R52Z_65jdsLMeSUU9TSLpVkvXV4i1hl8rb9LFa9V2XRic9ZcfCC3I_duyEYV7fOwn6s3TQfPbSW4QN7TXSBEVU4IKi37EgqJWErs0S4F_lJO13zQatmvs-l1lL1F3Uk" />
                  <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBU-07AzDm8WKgz_GLne7DLXRXGc1wr27h6i3sTqFisHuUrWis0yfBI7xj9qA-LggxoYmjazKU9GJ9VjvDegqaYj7SK1W9r_RyttiRvwHFE2B3IpyOKX4DieJuKgauewebPEbpBEYACYK06ytviDVTe63vTCCVkMsv-RGQgEViCIkvrHPkaQzbjt9TA-AtLu3csuMWyftQU8SjtPY_GC_ro2hfnkEKgKLd8igjPaTnMq48mrNXGMDYAxbs7Uwwp-_Y1zxwrP_jkMw" />
                  <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo4vLIIu-Jgrj9eP3Ozr8H2GjSNsM7D94BrSvZOxUDPDomQeYb-eUzXqgJN3CHDAOrkl0bwXrZ9usYlqsZTeiFEKvLPUZuJuKtX1GHLn3lj462NW109mY9rLyepTwH4621nDUdRjR7d9983TgxcrVtMntwxS2bDL1u_2t7-MDh74qzEGnlGX-RiKGgPGMa93pZQarkcKys6Dz4zLsEr-CXR3tRBGhwgvNxPhPEExdUWgqKB9lcQbLxDvgNsQtyt3fUPRyOxFij-x8" />
                  <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXPK-WTrFIJu72_lzN4lQo-aH5uBlp-y2e7K53S5ThHncyT4Rzi1HcyOtP31IXnoPDnPn_iF74VLxHkwC7KR4AOuOHta9hS6DmmI7RHidjbuPA7_9K3ZavZa-izbG7A9kiRKe4074iXfi-IVU0MOWEvDqrzy0PNjsdTWjQfrBo4DC5S7xFpDclZysGR8GjRo_JIqswia4CDnXHXK_kY0lfYB7oc4bhoRrTimI5ycDhvQmiuetAWdItEn_EuT_PlOjG_xPdN99tzw0" />
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">Join 10,000+ students</span><br />
                  already preparing smarter 🚀
                </p>
              </div>
            </div>

            {/* Right Column: Visuals */}
            <div className="relative flex justify-center items-center">
              <img alt="AI-Powered Mock Interview Illustration" className="max-w-full h-auto drop-shadow-2xl rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVjoSiWPhfypSKb3-PSEdXdZM6yg_QzWLeRwUYqRftZfU8_Sb8P1mTpY_4_HIP3Nlrl_3IzG_B-WZMYH_D2vLfa3ffOpKYfqEDTYRHHG63cPEc7iRwJ0vw8OtzobYc1ujbr6WYInZCmwGCtvj5q9HGzMuHkoSpJ3OcjwRhUzDZFLklhEDwhVc6ghaGQdjFGV0EWz1ZMafF29Nipysy6BQPkwq6Ezde2ECiSgHs_te7wkfzXGJpuSC_araMGkWElfRXWZaekPUE70I" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Features</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Powerful tools to help you prepare, practice and get hired.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="p-8 rounded-2xl border border-gray-100 card-shadow hover:border-primary/20 transition-all text-left">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">AI Mock Interviews</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Practice real-time interviews with AI and get instant feedback.</p>
              </div>
              
              {/* Feature Card 2 */}
              <div className="p-8 rounded-2xl border border-gray-100 card-shadow hover:border-primary/20 transition-all text-left">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Resume Analyzer</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Get AI-powered feedback to improve your resume and stand out.</p>
              </div>

              {/* Feature Card 3 */}
              <div className="p-8 rounded-2xl border border-gray-100 card-shadow hover:border-primary/20 transition-all text-left">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Progress Tracker</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Track your progress and identify your strengths & weaknesses.</p>
              </div>

              {/* Feature Card 4 */}
              <div className="p-8 rounded-2xl border border-gray-100 card-shadow hover:border-primary/20 transition-all text-left">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Coding Practice</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Solve coding questions and improve with intelligent hints.</p>
              </div>

              {/* Feature Card 5 */}
              <div className="p-8 rounded-2xl border border-gray-100 card-shadow hover:border-primary/20 transition-all text-left">
                <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Question Bank</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Access a vast collection of interview questions curated by experts.</p>
              </div>

              {/* Feature Card 6 */}
              <div className="p-8 rounded-2xl border border-gray-100 card-shadow hover:border-primary/20 transition-all text-left">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Study Plan</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Get a personalized study plan based on your goals and timeline.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-surface/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">How It Works</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Path to Success in 3 Simple Steps</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Start your journey and get interview-ready in no time.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg z-10">1</div>
                <div className="p-8 bg-white rounded-2xl card-shadow w-72">
                  <div className="mb-4 text-primary">
                    <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">Create an Account</h4>
                  <p className="text-sm text-gray-500">Sign up for free and set up your profile in just a few seconds.</p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute top-8 -right-16 text-indigo-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg z-10">2</div>
                <div className="p-8 bg-white rounded-2xl card-shadow w-72">
                  <div className="mb-4 text-primary">
                    <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">Practice with AI</h4>
                  <p className="text-sm text-gray-500">Take AI mock interviews, solve coding problems, and analyze your performance.</p>
                </div>
                {/* Arrow */}
                <div className="hidden lg:block absolute top-8 -right-16 text-indigo-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg z-10">3</div>
                <div className="p-8 bg-white rounded-2xl card-shadow w-72">
                  <div className="mb-4 text-green-500">
                    <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">Improve & Get Hired</h4>
                  <p className="text-sm text-gray-500">Track your progress, improve continuously, and crack your dream job.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 inline-block">Testimonials</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Learners, Proven by Results</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="p-8 rounded-2xl bg-white border border-indigo-50 card-shadow flex flex-col justify-between h-full text-left">
                <div>
                  <div className="text-primary mb-4">
                    <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.5-1.9 2.1-3.4 4.1-3.8l.7-.1V8h-3zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.5-1.9 2.1-3.4 4.1-3.8l.7-.1V8h-3z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-8 italic">"PrepPilot's AI mock interviews helped me identify my weak areas. I felt confident and cracked my dream job!"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <img alt="Ananya Singh" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn6tRhzh31xgni7nXwz_m6JZiPyPCBpXwBCVTOzK2EgVMob0givhjSL4dp2y9qagto_WNHIq_UMF5PSNAxnvFIy0-iDQw9gTcuupSMl8x7_oNl-cmEvuuY-vcsDjuIHiCr7HWC_904C5HK6Aiulxvjg7C3s2wS7ccJzaQldnfNVSA9WFO1YsV5g6KalRR_FO49RJ-kYqPyY5wE_WbsJ3sXGFr_hBS7kGQ1b-eoEIFBTmYFpHARnruL2LIVGp8esgjARRJxJDoAKYw" />
                  <div>
                    <h5 className="font-bold text-gray-900">Ananya Singh</h5>
                    <p className="text-xs text-gray-500">SDE @ Amazon</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-8 rounded-2xl bg-white border border-indigo-50 card-shadow flex flex-col justify-between h-full text-left">
                <div>
                  <div className="text-primary mb-4">
                    <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.5-1.9 2.1-3.4 4.1-3.8l.7-.1V8h-3zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.5-1.9 2.1-3.4 4.1-3.8l.7-.1V8h-3z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-8 italic">"The resume analyzer is a game-changer. I improved my resume score from 60 to 90 and started getting more callbacks."</p>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <img alt="Rohit Verma" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChwV_BDBTRqf18ULfBxzX5Vsr3LcB74vuyF0eN0n_f89nsAcM3CXXml6nH7mpXBH9cc_chijaq5OdQ69JdyZjYpM2kVqIzjtuBbDcXrAvIExn7ikcDZp3I9kXFVSOpLoZh1_gKXWo8nx8C0gc1daLb7hARpVZDTWGp5qweT-EzALYyW3qbA-0RGoWLST5ICiFieYaMqHF4npkpDueQJCrdCIANNVvF4OoJVrZcRIzQ1dwx2Bb_yOS7Vn5YVOQTAMJtgCMvC0ciw-0" />
                  <div>
                    <h5 className="font-bold text-gray-900">Rohit Verma</h5>
                    <p className="text-xs text-gray-500">SDE @ Microsoft</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-8 rounded-2xl bg-white border border-indigo-50 card-shadow flex flex-col justify-between h-full text-left">
                <div>
                  <div className="text-primary mb-4">
                    <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.5-1.9 2.1-3.4 4.1-3.8l.7-.1V8h-3zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.5-1.9 2.1-3.4 4.1-3.8l.7-.1V8h-3z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-8 italic">"The personalized study plan kept me consistent. Highly recommended for anyone serious about placements."</p>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <img alt="Neha Sharma" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlvKehWc8foVpqvteHh3TsseOAq40e7hAAuD-fvwdopSBm4VjI2tXhOY8O3HBgnCeSYwR2Pwh9dA8g2SDrIZ7Y-20LLaTEC9s_gN6QmASz3s1BW6ZZpEkp7-ECu8T3ixotHYVTsKF_P1eZMiXsoKLFCcLF0Q_oggwnoVeXG6j1B4afgbLZ5c1sHFFl-Dm3VePmYbFqCbzmqdWaF9BwrLbe4HNdrku8uiIoVjufnABVLYHRXivbx29XKYm45dpg6UZAK4NKLVx8Pes" />
                  <div>
                    <h5 className="font-bold text-gray-900">Neha Sharma</h5>
                    <p className="text-xs text-gray-500">SWE @ Google</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-12">
              <span className="w-2 h-2 rounded-full bg-gray-200"></span>
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span class="w-2 h-2 rounded-full bg-gray-200"></span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to crack your dream job?</h2>
              <p className="text-indigo-100 mb-10 max-w-lg mx-auto">Join thousands of students who are already preparing smarter with PrepPilot.</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup" className="bg-white text-primary px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-all">
                  Start for Free
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </Link>
                <a href="#features" className="bg-transparent border-2 border-indigo-300 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center">
                  Explore Features
                </a>
              </div>
            </div>
            
            {/* Decorative blobs for CTA */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0d20] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-left">
            {/* Brand Info */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-xl font-bold tracking-tight">PrepPilot</span>
              </div>
              <p className="text-gray-400 max-w-xs mb-8">Your AI-powered copilot for interview preparation.</p>
              
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.79 1.9 3.55-.7-.02-1.35-.21-1.92-.53v.05c0 2.07 1.47 3.8 3.43 4.19-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97-1.46 1.15-3.3 1.83-5.31 1.83-.35 0-.69-.02-1.02-.06 1.9 1.22 4.15 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.414-4.041-1.414-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Groups */}
            <div className="lg:col-span-2">
              <h5 className="font-bold text-lg mb-6">Quick Links</h5>
              <ul className="space-y-4 text-gray-400">
                <li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
                <li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
                <li><a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a></li>
                <li><a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h5 className="font-bold text-lg mb-6">Resources</h5>
              <ul className="space-y-4 text-gray-400">
                <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Questions</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h5 className="font-bold text-lg mb-6">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-6 font-body-md">Subscribe to get the latest updates and interview tips.</p>
              <div className="flex flex-col gap-3">
                <input className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary text-white outline-none" placeholder="Enter your email" type="email" />
                <button className="bg-primary text-white rounded-lg px-4 py-2.5 text-sm font-bold hover:bg-primary-container transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10 text-center text-sm text-gray-500">
            <p>© 2024 PrepPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default Landing;
