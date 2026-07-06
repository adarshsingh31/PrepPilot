import { useState, useEffect, useRef } from "react";
import AppLayout from "../../components/AppLayout";
import { useAuth } from "../../context/AuthContext";
import { updateProfile, changePassword } from "../../services/authService";
import toast from "react-hot-toast";

function Settings() {
  const { user, setUser } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef(null);

  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    college: "",
    branch: "",
    year: "",
    cgpa: "",
    location: "",
    phone: "",
    avatar: "",
  });

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      setEditForm({
        name: user.name || "",
        email: user.email || "",
        college: user.college || "",
        branch: user.branch || "",
        year: user.year || "",
        cgpa: user.cgpa || "",
        location: user.location || "",
        phone: user.phone || "",
        avatar: user.avatar || "",
      });
    }
  }, [user]);

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = async (e) => {
    if (e) e.preventDefault();
    setIsSaving(true);
    try {
      const res = await updateProfile(editForm);
      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      toast.success("Settings updated successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update settings");
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result;
        setEditForm((prev) => ({ ...prev, avatar: base64String }));
        
        setIsSaving(true);
        try {
          const res = await updateProfile({ ...editForm, avatar: base64String });
          setUser(res.user);
          localStorage.setItem("user", JSON.stringify(res.user));
          toast.success("Profile picture updated!");
        } catch (err) {
          toast.error("Failed to update profile picture");
        } finally {
          setIsSaving(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordError("");
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    setIsSavingPassword(true);
    try {
      await changePassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      toast.success("Password changed successfully!");
      setIsPasswordModalOpen(false);
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to change password";
      if (errorMessage.toLowerCase().includes("incorrect") || errorMessage.toLowerCase().includes("not match")) {
        setPasswordError("Your current password is not matched.");
      } else {
        setPasswordError(errorMessage);
      }
    } finally {
      setIsSavingPassword(false);
    }
  };

  const defaultAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || "User"}`;

  return (
    <AppLayout>
      <div className="p-4 md:p-8 relative">
        {/* PASSWORD MODAL */}
        {isPasswordModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-3xl p-6 w-full max-w-md card-shadow">
              <h2 className="text-2xl font-bold text-on-surface mb-6">Change Password</h2>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Current Password</label>
                  <input type="password" required value={passwordForm.currentPassword} onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">New Password</label>
                  <input type="password" required value={passwordForm.newPassword} onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-1">Confirm New Password</label>
                  <input type="password" required value={passwordForm.confirmPassword} onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })} className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
                
                {passwordError && (
                  <div className="p-3 bg-error-container/20 border border-error/30 rounded-xl">
                    <p className="text-xs font-bold text-error flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">error</span>
                      {passwordError}
                    </p>
                  </div>
                )}
                
                <div className="flex gap-4 pt-4 mt-6 border-t border-outline-variant/30">
                  <button type="button" onClick={() => { setIsPasswordModalOpen(false); setPasswordError(""); }} className="flex-1 py-3 bg-surface text-on-surface border border-outline-variant rounded-xl font-bold hover:bg-surface-container transition-colors">Cancel</button>
                  <button type="submit" disabled={isSavingPassword} className="flex-1 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                    {isSavingPassword && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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
            <div className="lg:col-span-8 bg-white rounded-xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Account Settings</h3>
                  <p className="font-body-md text-body-md text-secondary">Update your personal information.</p>
                </div>
                <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  <img className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md bg-surface-container-low" alt={`${user?.name} Avatar`} src={editForm.avatar || defaultAvatar} />
                  <button className="absolute bottom-0 right-0 p-2 bg-primary text-on-primary rounded-full shadow-lg border-2 border-surface transform hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                  </button>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                </div>
              </div>
              
              <form onSubmit={handleSaveProfile} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                    <input name="name" required className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={editForm.name} onChange={handleEditChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Email (Read Only)</label>
                    <input disabled className="w-full bg-surface-container-high border border-outline-variant/50 text-secondary rounded-lg p-3 font-body-md outline-none cursor-not-allowed" type="email" value={editForm.email} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Phone Number</label>
                    <input name="phone" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={editForm.phone} onChange={handleEditChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Location</label>
                    <input name="location" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={editForm.location} onChange={handleEditChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">College</label>
                    <input name="college" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={editForm.college} onChange={handleEditChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Branch</label>
                    <input name="branch" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={editForm.branch} onChange={handleEditChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">Year</label>
                    <input name="year" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={editForm.year} onChange={handleEditChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface-variant">CGPA</label>
                    <input name="cgpa" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" value={editForm.cgpa} onChange={handleEditChange} />
                  </div>
                </div>
                
                <div className="flex justify-end pt-2">
                  <button type="submit" disabled={isSaving} className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/90 active:scale-95 duration-150 transition-all flex items-center gap-2 disabled:opacity-70">
                    {isSaving && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 lg:p-8 card-shadow border border-outline-variant/30 flex flex-col gap-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Security</h3>
                  <p className="font-body-md text-body-md text-secondary">Manage your password and account security.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30 bg-surface-bright">
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Password</p>
                      <p className="text-xs text-secondary italic">••••••••</p>
                    </div>
                    <button onClick={() => setIsPasswordModalOpen(true)} className="text-primary font-bold text-sm border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary-container/10 transition-colors">
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Settings;
