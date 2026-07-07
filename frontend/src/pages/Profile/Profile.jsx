import { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import { useAuth } from "../../context/AuthContext";
import { getAnalytics } from "../../services/analyticsService";
import { getHistory as getInterviewHistory } from "../../services/mockInterviewApi";
import { getResumeHistory } from "../../services/resumeService";
import { useUserStats } from "../../context/UserStatsContext";
import { updateProfile } from "../../services/authService";
import toast from "react-hot-toast";

function Profile() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [interviews, setInterviews] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [codingAnalytics, setCodingAnalytics] = useState(null);
  const { stats, loading: statsLoading } = useUserStats();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
    cgpa: "",
    location: "",
  });

  useEffect(() => {
    if (user) {
      setEditForm({
        name: user.name || "",
        phone: user.phone || "",
        college: user.college || "",
        branch: user.branch || "",
        year: user.year || "",
        cgpa: user.cgpa || "",
        location: user.location || "",
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [codingRes, interviewRes, resumeRes] = await Promise.all([
          getAnalytics().catch(() => ({})),
          getInterviewHistory().catch(() => ({})),
          getResumeHistory().catch(() => ({})),
        ]);

        if (codingRes.success) setCodingAnalytics(codingRes.analytics);
        if (interviewRes.success) setInterviews(interviewRes.interviews || []);
        if (resumeRes.success) setResumes(resumeRes.history || []);
      } catch (err) {
        toast.error("Failed to fetch profile metrics");
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const res = await updateProfile(editForm);
      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const sortedResumes = [...resumes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const latestResumeScore = stats?.resumeScore || 0;
  const problemsSolved = stats?.problemsSolved || 0;
  const currentStreak = stats?.currentStreak || 0;
  const longestStreak = stats?.longestStreak || 0;
  const totalInterviews = stats?.mockInterviews || 0;

  const generateActivities = () => {
    let activities = [];
    interviews.filter(i => i.status === "Completed").forEach(i => {
      activities.push({
        id: `int_${i._id}`,
        date: new Date(i.completedAt || i.createdAt),
        icon: "mic", bg: "bg-indigo-50", color: "text-primary",
        title: `Completed ${i.domain} Mock Interview`,
        sub: `Score: ${i.overallScore}/100`,
      });
    });
    resumes.forEach(r => {
      activities.push({
        id: `res_${r._id}`,
        date: new Date(r.createdAt),
        icon: "description", bg: "bg-emerald-50", color: "text-tertiary",
        title: "Analyzed Resume",
        sub: `Score: ${r.score}/100`,
      });
    });
    codingAnalytics?.practicedQuestionsList?.forEach(q => {
      activities.push({
        id: `cod_${q._id || q.questionId}`,
        date: new Date(q.updatedAt || q.lastSolved || q.createdAt),
        icon: "code", bg: "bg-indigo-50", color: "text-primary",
        title: `Solved Coding Problem`,
        sub: `Difficulty: ${q.difficulty || 'Medium'}`,
      });
    });

    activities.sort((a, b) => b.date - a.date);
    return activities.slice(0, 5);
  };
  const recentActivities = generateActivities();

  const getTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " mins ago";
    return "Just now";
  };

  const generateAchievements = () => {
    const ach = [];
    if (totalInterviews >= 1) ach.push({ id: 1, icon: "military_tech", bg: "bg-indigo-100", color: "text-primary", title: "First Interview", sub: "Completed your first mock", dc: "text-primary" });
    if (totalInterviews >= 10) ach.push({ id: 2, icon: "military_tech", bg: "bg-indigo-100", color: "text-primary", title: "Interview Pro", sub: "Completed 10 mock interviews", dc: "text-primary" });
    if (totalInterviews >= 50) ach.push({ id: 3, icon: "military_tech", bg: "bg-indigo-100", color: "text-primary", title: "Interview Master", sub: "Completed 50 mock interviews", dc: "text-primary" });
    if (problemsSolved >= 50) ach.push({ id: 4, icon: "emoji_events", bg: "bg-emerald-100", color: "text-tertiary", title: "Problem Solver", sub: "Solved 50 coding problems", dc: "text-tertiary" });
    if (problemsSolved >= 100) ach.push({ id: 5, icon: "emoji_events", bg: "bg-emerald-100", color: "text-tertiary", title: "Code Master", sub: "Solved 100 coding problems", dc: "text-tertiary" });
    if (latestResumeScore >= 85) ach.push({ id: 6, icon: "stars", bg: "bg-indigo-100", color: "text-primary", title: "Resume Improver", sub: "Scored 85+ on analyzer", dc: "text-primary" });
    if (currentStreak >= 7) ach.push({ id: 7, icon: "workspace_premium", bg: "bg-orange-100", color: "text-orange-600", title: "Consistent Learner", sub: "Maintained a 7-day streak", dc: "text-orange-600" });
    return ach;
  };
  const achievements = generateAchievements();

  const defaultAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || "User"}`;

  if (loading || statsLoading) {
    return (
      <AppLayout>
        <div className="p-4 md:p-8 flex items-center justify-center min-h-[50vh]">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-4 md:p-8 relative">
        {/* EDIT PROFILE MODAL */}
        {isEditing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-3xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto card-shadow">
              <h2 className="text-2xl font-bold text-on-surface mb-6">Edit Profile</h2>
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Full Name</label>
                  <input type="text" name="name" value={editForm.name} onChange={handleEditChange} required className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Email <span className="text-secondary font-normal">(Read Only)</span></label>
                  <input type="email" value={user?.email || ""} disabled className="w-full px-4 py-3 bg-surface-container-low rounded-xl border border-outline-variant/50 text-secondary outline-none cursor-not-allowed" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-1">Phone</label>
                    <input type="text" name="phone" value={editForm.phone} onChange={handleEditChange} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-1">Location</label>
                    <input type="text" name="location" value={editForm.location} onChange={handleEditChange} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">College</label>
                  <input type="text" name="college" value={editForm.college} onChange={handleEditChange} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-1">Branch</label>
                    <input type="text" name="branch" value={editForm.branch} onChange={handleEditChange} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-1">Year</label>
                    <input type="text" name="year" value={editForm.year} onChange={handleEditChange} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-1">CGPA</label>
                    <input type="text" name="cgpa" value={editForm.cgpa} onChange={handleEditChange} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none" />
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4 mt-6 border-t border-outline-variant/30">
                  <button type="button" onClick={() => setIsEditing(false)} className="flex-1 py-3 bg-surface text-on-surface border border-outline-variant rounded-xl font-bold hover:bg-surface-container transition-colors">Cancel</button>
                  <button type="submit" disabled={isSaving} className="flex-1 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                    {isSaving && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div className="text-left">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Profile</h2>
              <p className="text-secondary font-body-md">Manage your personal information and account settings.</p>
            </div>
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-2.5 bg-surface border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all card-shadow active:scale-95 duration-100"
            >
              <span className="material-symbols-outlined text-sm">edit</span>Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">
            <div className="xl:col-span-4 bg-white rounded-3xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img className="w-32 h-32 rounded-full object-cover border-4 border-surface-container p-1 shadow-lg bg-surface-container-low" alt={`${user?.name} Avatar`} src={user?.avatar || defaultAvatar} />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-1">{user?.name}</h3>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-8">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>Verified Student
              </div>
              <div className="w-full space-y-4">
                {[
                  { icon: "mail", label: "Email Address", val: user?.email },
                  { icon: "call", label: "Phone Number", val: user?.phone || "Not provided" },
                  { icon: "location_on", label: "Location", val: user?.location || "Not provided" },
                ].map(item => (
                  <div key={item.icon} className="flex items-center gap-4 p-3 bg-surface rounded-2xl">
                    <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center shrink-0"><span className="material-symbols-outlined">{item.icon}</span></div>
                    <div className="text-left"><p className="text-[10px] text-secondary font-bold uppercase tracking-wider">{item.label}</p><p className="text-sm font-semibold text-on-surface truncate max-w-[200px]" title={item.val}>{item.val}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-8 flex flex-col gap-6 md:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {[
                  { icon: "mic", bg: "bg-indigo-50", color: "text-primary", hbg: "group-hover:bg-primary", val: totalInterviews, label: "Mock Interviews" },
                  { icon: "description", bg: "bg-emerald-50", color: "text-tertiary", hbg: "group-hover:bg-tertiary", val: latestResumeScore, suffix: "/100", label: "Resume Score" },
                  { icon: "code", bg: "bg-indigo-50", color: "text-primary", hbg: "group-hover:bg-primary", val: problemsSolved, label: "Problems Solved" },
                  { icon: "local_fire_department", bg: "bg-orange-50", color: "text-orange-600", hbg: "group-hover:bg-orange-600", val: currentStreak, suffix: " Days", label: "Current Streak" },
                  { icon: "workspace_premium", bg: "bg-yellow-50", color: "text-yellow-600", hbg: "group-hover:bg-yellow-600", val: longestStreak, suffix: " Days", label: "Longest Streak" },
                ].map((s, i) => (
                  <div key={i} className="bg-white p-4 md:p-6 rounded-3xl border border-outline-variant/30 card-shadow text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-4 ${s.hbg} group-hover:text-white transition-colors duration-300`}><span className="material-symbols-outlined">{s.icon}</span></div>
                    <h4 className="text-3xl font-extrabold text-on-surface">{s.val}{s.suffix && <span className="text-sm font-medium">{s.suffix}</span>}</h4>
                    <p className="text-xs text-secondary font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-6 lg:p-8 border border-outline-variant/30 card-shadow text-left h-full">
                <h3 className="text-xl font-bold text-on-surface flex items-center gap-2 mb-6 pb-4 border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary">person_outline</span>Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    ["Full Name", user?.name],["College", user?.college || "—"],
                    ["Email Address", user?.email],["Branch", user?.branch || "—"],
                    ["Phone Number", user?.phone || "—"],["Year", user?.year || "—"],
                    ["CGPA", user?.cgpa || "—"],["Location", user?.location || "—"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center py-1 border-b border-outline-variant/10">
                      <span className="text-secondary text-sm font-medium">{label}</span>
                      <span className="text-on-surface font-semibold text-sm truncate max-w-[50%] text-right" title={val}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-outline-variant/30 card-shadow flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-on-surface">Recent Activity</h3>
              </div>
              <div className="space-y-6">
                {recentActivities.length > 0 ? (
                  recentActivities.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start">
                      <div className={`w-10 h-10 flex-shrink-0 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}><span className="material-symbols-outlined">{item.icon}</span></div>
                      <div className="flex-1"><p className="text-sm font-bold text-on-surface">{item.title}</p><p className="text-xs text-secondary">{item.sub}</p><p className="text-[10px] text-outline font-medium mt-1">{getTimeAgo(item.date)}</p></div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-secondary font-medium py-4">No recent activity found. Start practicing to build your timeline!</p>
                )}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-outline-variant/30 card-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-on-surface">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievements.length > 0 ? (
                  achievements.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface-container-low transition-colors cursor-pointer">
                      <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-full flex items-center justify-center shrink-0`}><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span></div>
                      <div><h4 className="text-sm font-bold text-on-surface">{item.title}</h4><p className="text-[10px] text-secondary">{item.sub}</p></div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-secondary font-medium py-4">Complete mock interviews and solve problems to unlock achievements!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Profile;
