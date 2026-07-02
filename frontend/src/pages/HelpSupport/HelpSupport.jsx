import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function HelpSupport() {
  const [openFaqId, setOpenFaqId] = useState(1);
  const faqs = [
    { id: 1, q: "How does the AI Mock Interview work?", a: "Our AI interviewer asks relevant questions based on the domain and difficulty you choose. You can answer via voice or chat, and get detailed feedback and a score at the end of the session." },
    { id: 2, q: "How is my interview scored?", a: "Scoring is based on key metrics: communication clarity, technical accuracy, confidence, and keyword relevance based on industry standards." },
    { id: 3, q: "Can I retry a mock interview?", a: "Yes! You can retry as many times as your plan allows. Each attempt generates a new report for comparison." },
    { id: 4, q: "How does the Resume Analyzer work?", a: "Simply upload your PDF. Our system parses the content and cross-references it with target job descriptions to identify skill gaps and ATS compatibility." },
    { id: 5, q: "Is my data secure on PrepPilot?", a: "We use enterprise-grade encryption (AES-256) and never share your interview data or resume content with third parties without your explicit consent." }
  ];

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <section className="text-left">
            <div className="flex items-start gap-4 mb-2">
              <div className="p-3 bg-primary-container/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>live_help</span>
              </div>
              <div>
                <h1 className="font-headline-md text-headline-md text-on-surface">Help &amp; Support</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">We're here to help you. Find answers or get in touch with our support team.</p>
              </div>
            </div>
          </section>

          <section className="text-left">
            <div className="bg-surface-container-low rounded-xl p-6 md:p-8 lg:p-12 relative overflow-hidden custom-shadow border border-white/50">
              <div className="max-w-2xl relative z-10">
                <h2 className="font-headline-sm text-headline-sm mb-6">How can we help you today?</h2>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary text-2xl">search</span>
                  <input className="w-full pl-14 pr-6 py-5 bg-white rounded-xl border border-outline-variant shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/10 text-body-lg font-body-lg outline-none transition-all" placeholder="Search for help articles..." type="text" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 items-center text-xs font-semibold">
                  <span className="text-on-surface-variant mr-2">Popular:</span>
                  {["account","subscription","mock interview"].map(tag => (
                    <a key={tag} className="px-3 py-1 bg-white border border-outline-variant rounded-full text-primary hover:bg-primary hover:text-white transition-all" href="#">{tag}</a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 text-left">
            <div className="lg:col-span-2 space-y-6 lg:space-y-10">
              <section className="bg-white rounded-xl p-6 lg:p-8 border border-outline-variant custom-shadow">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>quiz</span>
                    <h3 className="font-headline-sm text-headline-sm">Frequently Asked Questions</h3>
                  </div>
                </div>
                <div className="divide-y divide-outline-variant">
                  {faqs.map(faq => (
                    <div key={faq.id} className="py-5">
                      <button className="w-full flex justify-between items-center text-left hover:text-primary transition-colors focus:outline-none" onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}>
                        <span className="font-headline-sm text-lg">{faq.q}</span>
                        <span className="material-symbols-outlined transition-transform duration-300">{openFaqId === faq.id ? "expand_less" : "expand_more"}</span>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaqId === faq.id ? "max-h-40 mt-4 text-on-surface-variant font-body-md" : "max-h-0"}`}>{faq.a}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-xl p-6 lg:p-8 border border-outline-variant custom-shadow">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
                    <h3 className="font-headline-sm text-headline-sm">Support Tickets</h3>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-outline-variant text-label-md text-on-surface-variant">
                        <th className="pb-4 font-semibold">Subject &amp; ID</th>
                        <th className="pb-4 font-semibold">Status</th>
                        <th className="pb-4 font-semibold">Last Update</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                      <tr className="group hover:bg-surface-container-low transition-colors">
                        <td className="py-5"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary"><span className="material-symbols-outlined text-sm">check_circle</span></div><div><div className="font-semibold text-on-surface">Unable to start interview</div><div className="text-xs text-on-surface-variant">#TKT-1245</div></div></div></td>
                        <td className="py-5"><span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-[10px] font-bold uppercase tracking-wider">Resolved</span></td>
                        <td className="py-5 text-on-surface-variant font-body-md">May 29, 2024</td>
                      </tr>
                      <tr className="group hover:bg-surface-container-low transition-colors">
                        <td className="py-5"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined text-sm">history</span></div><div><div className="font-semibold text-on-surface">Resume not parsing</div><div className="text-xs text-on-surface-variant">#TKT-1238</div></div></div></td>
                        <td className="py-5"><span className="px-2 py-0.5 bg-surface-container-highest text-primary rounded text-[10px] font-bold uppercase tracking-wider">In Progress</span></td>
                        <td className="py-5 text-on-surface-variant font-body-md">May 26, 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <div className="space-y-6 lg:space-y-8 text-left">
              <div className="bg-primary p-6 lg:p-8 rounded-xl text-on-primary custom-shadow relative overflow-hidden group">
                <h4 className="font-headline-sm text-headline-sm mb-2 relative z-10">Need immediate help?</h4>
                <p className="font-body-md text-body-md text-on-primary/80 mb-6 relative z-10">Our support team is ready to assist you. Response: 2-4 hours.</p>
                <button className="w-full bg-white text-primary font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-container transition-all active:scale-95 relative z-10">
                  <span className="material-symbols-outlined text-sm">headset_mic</span>Contact Support
                </button>
              </div>

              <section className="bg-white rounded-xl border border-outline-variant overflow-hidden custom-shadow">
                <div className="p-6 border-b border-outline-variant"><h4 className="font-headline-sm text-lg">Other ways to get help</h4></div>
                <div className="divide-y divide-outline-variant text-xs">
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant"><span className="material-symbols-outlined text-sm">forum</span></div>
                      <div><p className="font-semibold text-on-surface">Live Chat</p><p className="text-on-surface-variant">Start chatting now</p></div>
                    </div>
                    <span className="text-tertiary text-[10px] font-bold uppercase bg-tertiary-fixed/40 px-2 py-0.5 rounded">Online</span>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary"><span className="material-symbols-outlined text-sm">mail</span></div>
                      <div><p className="font-semibold text-on-surface">Email Support</p><p className="text-on-surface-variant">support@careerprep.in</p></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default HelpSupport;
