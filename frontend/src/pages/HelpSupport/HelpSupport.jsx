import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function HelpSupport() {
  const [openFaqId, setOpenFaqId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allFaqs = [
    { id: 1, q: "How does AI Mock Interview work?", a: "Our AI asks tailored questions based on your domain and duration. It evaluates your audio or text responses and generates a comprehensive report evaluating your communication, accuracy, and confidence." },
    { id: 2, q: "How is the interview score calculated?", a: "The score is calculated by the AI assessing factors like technical accuracy, confidence, relevance to the job role, and communication clarity." },
    { id: 3, q: "How does the Resume Analyzer work?", a: "Upload your resume in PDF format, and our AI scans it for missing keywords, formatting issues, and matches it against standard industry expectations to generate a score and improvement tips." },
    { id: 4, q: "How does Coding Practice work?", a: "You can solve algorithmic problems directly in our built-in code editor. Your solutions are evaluated against test cases, and progress is saved to your dashboard." },
    { id: 5, q: "How do Study Plans work?", a: "Study plans help you structure your preparation. You can generate a timeline-based roadmap with specific topics to study, tracking your completion daily." },
    { id: 6, q: "How can I edit my profile?", a: "Navigate to the Profile or Settings page. You can click 'Edit Profile' to update your name, college, phone number, and even upload a custom profile picture." },
    { id: 7, q: "Is my data secure?", a: "Yes, your data is securely stored in MongoDB and we follow industry-standard practices to ensure your interview data and personal information remain private." },
    { id: 8, q: "Can I track my interview progress?", a: "Absolutely! The Progress dashboard shows you detailed analytics, including your average score trend over time, total interviews completed, and problems solved." },
    { id: 9, q: "How do I reset my password?", a: "You can use the 'Forgot Password' link on the login page to verify your email via OTP and set a new password. Alternatively, you can change it directly in Settings if you know your current password." },
    { id: 10, q: "How do I view my previous mock interview reports?", a: "All past mock interviews are saved in the Mock Interview section under 'History', where you can revisit detailed feedback and transcripts for each session." }
  ];

  const filteredFaqs = allFaqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8 pb-10">
          
          {/* Header */}
          <section className="text-left">
            <div className="flex items-start gap-4 mb-2">
              <div className="p-3 bg-primary-container/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>live_help</span>
              </div>
              <div>
                <h1 className="font-headline-md text-headline-md text-on-surface">Help Center</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">Find answers about PrepPilot features or get in touch with the developer.</p>
              </div>
            </div>
          </section>

          {/* Search Box */}
          <section className="text-left">
            <div className="bg-surface-container-low rounded-xl p-6 md:p-8 lg:p-12 relative overflow-hidden custom-shadow border border-white/50">
              <div className="max-w-2xl relative z-10">
                <h2 className="font-headline-sm text-headline-sm mb-6">How can we help you today?</h2>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary text-2xl">search</span>
                  <input 
                    className="w-full pl-14 pr-6 py-5 bg-white rounded-xl border border-outline-variant shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/10 text-body-lg font-body-lg outline-none transition-all" 
                    placeholder="Search for help articles..." 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 items-center text-xs font-semibold">
                  <span className="text-on-surface-variant mr-2">Popular:</span>
                  {["mock interview", "resume", "password"].map(tag => (
                    <button key={tag} onClick={() => setSearchQuery(tag)} className="px-3 py-1 bg-white border border-outline-variant rounded-full text-primary hover:bg-primary hover:text-white transition-all">{tag}</button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 text-left">
            
            {/* Main Content (Left Column) */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-10">
              
              {/* FAQs */}
              <section className="bg-white rounded-xl p-6 lg:p-8 border border-outline-variant custom-shadow">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>quiz</span>
                    <h3 className="font-headline-sm text-headline-sm">Frequently Asked Questions</h3>
                  </div>
                </div>
                
                {filteredFaqs.length > 0 ? (
                  <div className="divide-y divide-outline-variant">
                    {filteredFaqs.map(faq => (
                      <div key={faq.id} className="py-5">
                        <button className="w-full flex justify-between items-center text-left hover:text-primary transition-colors focus:outline-none" onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}>
                          <span className="font-headline-sm text-lg pr-4">{faq.q}</span>
                          <span className="material-symbols-outlined transition-transform duration-300">{openFaqId === faq.id ? "expand_less" : "expand_more"}</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqId === faq.id ? "max-h-40 mt-4 text-on-surface-variant font-body-md" : "max-h-0"}`}>
                          {faq.a}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">search_off</span>
                    <p className="text-on-surface font-semibold text-lg">No matching help articles found.</p>
                    <p className="text-secondary text-sm mt-1">Try adjusting your search terms.</p>
                  </div>
                )}
              </section>

              {/* About PrepPilot */}
              <section className="bg-white rounded-xl p-6 lg:p-8 border border-outline-variant custom-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                  <h3 className="font-headline-sm text-headline-sm">About PrepPilot</h3>
                </div>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  PrepPilot is an AI-powered interview preparation platform designed to help students improve their coding, aptitude, and interview skills through structured practice, AI mock interviews, resume analysis, personalized study plans, and progress tracking.
                </p>
              </section>
              
            </div>

            {/* Sidebar (Right Column) */}
            <div className="space-y-6 lg:space-y-8 text-left">
              
              {/* Contact Developer Card */}
              <div className="bg-primary p-6 lg:p-8 rounded-xl text-on-primary custom-shadow relative overflow-hidden group">
                <h4 className="font-headline-sm text-headline-sm mb-4 relative z-10">Contact Developer</h4>
                
                <div className="relative z-10 space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-bold">Adarsh Singh</span>
                  </div>
                  <a href="mailto:adarshsingh1618@gmail.com" className="flex items-center gap-3 text-on-primary/90 hover:text-white transition-colors group/link">
                    <span className="material-symbols-outlined group-hover/link:scale-110 transition-transform">mail</span>
                    <span>adarshsingh1618@gmail.com</span>
                  </a>
                  <a href="https://github.com/adarshsingh31" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-primary/90 hover:text-white transition-colors group/link">
                    <span className="material-symbols-outlined group-hover/link:scale-110 transition-transform">code</span>
                    <span>GitHub Profile</span>
                  </a>
                  <a href="https://www.linkedin.com/in/adarsh-singh-936380341" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-primary/90 hover:text-white transition-colors group/link">
                    <span className="material-symbols-outlined group-hover/link:scale-110 transition-transform">work</span>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-outline-variant/50 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
            <div>
              <p className="font-semibold text-on-surface">PrepPilot v1.0.0</p>
              <p>&copy; 2026 Adarsh Singh</p>
            </div>
            <div className="text-xs text-outline font-medium max-w-sm text-center md:text-right">
              Built with React, Node.js, Express.js, MongoDB and Google Gemini AI.
            </div>
          </footer>

        </div>
      </div>
    </AppLayout>
  );
}

export default HelpSupport;
