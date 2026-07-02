import { useState } from "react";
import AppLayout from "../../components/AppLayout";

function Settings() {
  const [fullName, setFullName] = useState("Adarsh Singh");
  const [email, setEmail] = useState("adarshsingh16@gmail.com");
  const [college, setCollege] = useState("National Institute of Technology Raipur");
  const [branch, setBranch] = useState("Computer Science and Engineering");

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <div className="flex items-start gap-4 text-left">
            <div className="p-3 bg-primary-container/10 rounded-xl text-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Settings</h2>
              <p className="font-body-md text-body-md text-secondary">Manage your account preferences and application settings.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 text-left">
            <div className="lg:col-span-7 bg-white rounded-xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-6">
                <div><h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Account Settings</h3><p className="font-body-md text-body-md text-secondary">Update your personal information.</p></div>
                <div className="relative group">
                  <img className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md" alt="Adarsh Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsNXKsJ_HtnI5i3K0it_BdeURbrR5G4E0YKuY_LGARZE70qtZtrLTKdrdJwKyMOi79zW5RQHP3DZmTUd_8B6MkapXt-gKyEwM_ImTsDFvMiUzV7ON_zbZ4YSV4K8aAtsCh42ZM7O9hNlgyHMIkX_xip5_7ihST7PTkpkE0pzKf_otw0B4TvznGJcSHlArM69u_QRTED-GRamAJxctjlLELDuuPVl95BU0fEU9po52Yq02sTkzh0orjwSRl81x2WmUlHTB2P2w21Co" />
                  <button className="absolute bottom-0 right-0 p-2 bg-primary text-on-primary rounded-full shadow-lg border-2 border-surface transform hover:scale-110 transition-transform"><span className="material-symbols-outlined text-sm">photo_camera</span></button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2"><label className="font-label-md text-label-md text-on-surface-variant">Full Name</label><input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={fullName} onChange={e => setFullName(e.target.value)} /></div>
                <div className="flex flex-col gap-2"><label className="font-label-md text-label-md text-on-surface-variant">Email</label><input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="email" value={email} onChange={e => setEmail(e.target.value)} /></div>
                <div className="flex flex-col gap-2"><label className="font-label-md text-label-md text-on-surface-variant">College</label><input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={college} onChange={e => setCollege(e.target.value)} /></div>
                <div className="flex flex-col gap-2"><label className="font-label-md text-label-md text-on-surface-variant">Branch</label><input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={branch} onChange={e => setBranch(e.target.value)} /></div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">Year</label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"><option>3rd Year (2024-2028)</option><option>4th Year (2023-2027)</option></select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end"><button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-container active:scale-95 duration-150 transition-all flex items-center gap-2">Save Changes</button></div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6">
              <div><h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Security</h3><p className="font-body-md text-body-md text-secondary">Manage your password and account security.</p></div>
              <div className="space-y-4">
                {[
                  { label: "Password", sub: "Last changed 3 months ago", btn: "Change", italic: true },
                  { label: "Two-Factor Auth", badge: "Enabled", btn: "Manage" },
                  { label: "Active Sessions", sub: "2 active sessions", btn: "View" },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30 bg-surface-bright">
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">{item.label}</p>
                      {item.badge ? <span className="text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-bold uppercase tracking-wider">{item.badge}</span> : <p className={`text-xs text-secondary ${item.italic ? "italic" : ""}`}>{item.sub}</p>}
                    </div>
                    <button className="text-primary font-bold text-sm border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary-container/10 transition-colors">{item.btn}</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl p-6 lg:p-8 card-shadow border border-outline-variant/30">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Notifications</h3>
              <p className="font-body-md text-body-md text-secondary mb-6">Choose what you want to be notified about.</p>
              <div className="space-y-6">
                {[
                  { icon: "mic", label: "Mock Interviews", sub: "Reminders for schedules" },
                  { icon: "trending_up", label: "Progress Updates", sub: "Weekly progress reports" },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span></div>
                      <div><p className="text-sm font-bold text-on-surface">{item.label}</p><p className="text-xs text-secondary">{item.sub}</p></div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" defaultChecked />
                      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6">
              <div><h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Preferences</h3><p className="font-body-md text-body-md text-secondary">Customize your experience.</p></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs"><label className="font-bold text-on-surface">Language</label><select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 cursor-pointer outline-none"><option>English</option><option>Hindi</option></select></div>
                <div className="flex items-center justify-between text-xs"><label className="font-bold text-on-surface">Time Zone</label><select className="bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 cursor-pointer outline-none"><option>(GMT+05:30) IST</option><option>(GMT+00:00) UTC</option></select></div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6">
              <div><h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Appearance</h3><p className="font-body-md text-body-md text-secondary">Choose your theme preference.</p></div>
              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-primary bg-primary-container/5"><span className="material-symbols-outlined text-primary text-2xl">light_mode</span><span className="text-xs font-bold text-on-surface">Light</span></button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-outline-variant hover:border-primary transition-colors"><span className="material-symbols-outlined text-secondary text-2xl">dark_mode</span><span className="text-xs font-bold text-secondary">Dark</span></button>
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-outline-variant hover:border-primary transition-colors"><span className="material-symbols-outlined text-secondary text-2xl">desktop_windows</span><span className="text-xs font-bold text-secondary">System</span></button>
              </div>
            </div>

            <div className="lg:col-span-12 bg-red-50/50 rounded-xl p-6 lg:p-8 border border-error/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              <div><h3 className="font-headline-sm text-headline-sm text-error mb-1">Danger Zone</h3><p className="font-body-md text-body-md text-on-secondary-container">Irreversible and destructive actions. Proceed with extreme caution.</p></div>
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <button className="flex-grow md:flex-none px-6 py-3 border border-error/30 text-error rounded-lg font-bold hover:bg-error hover:text-white transition-all active:scale-95 duration-100">Logout from All Devices</button>
                <button className="flex-grow md:flex-none px-6 py-3 bg-error text-white rounded-lg font-bold hover:bg-opacity-90 shadow-lg shadow-error/10 transition-all active:scale-95 duration-100">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Settings;
