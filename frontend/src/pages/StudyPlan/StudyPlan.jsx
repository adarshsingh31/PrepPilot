import { useState, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import {
  getStudyPlans,
  createStudyPlan,
  updateStudyPlan,
  deleteStudyPlan,
} from "../../services/studyPlanService";

// ─── Create Plan Modal ────────────────────────────────────────────────────────
function CreatePlanModal({ onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [studyPlans, setStudyPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !targetDate) return;
    setLoading(true);
    setError("");
    try {
      await onCreate({ title: title.trim(), targetDate });
      onClose();
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to create plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-on-surface text-lg">
            Create Study Plan
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
              Plan Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Placement Prep 2025"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
              Target Date
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>

          {error && (
            <p className="text-xs text-error bg-error/10 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg text-sm font-bold text-on-surface-variant border border-outline-variant hover:bg-surface-container transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary/90 transition disabled:opacity-60"
            >
              {loading ? "Creating…" : "Create Plan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Status badge ──────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  return status === "Active" ? (
    <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full uppercase">
      Active
    </span>
  ) : (
    <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full uppercase">
      Completed
    </span>
  );
}

// ─── Edit Plan Modal ──────────────────────────────────────────────────────────
function EditPlanModal({ plan, onClose, onUpdate }) {
  const [title, setTitle] = useState(plan.title);
  const [targetDate, setTargetDate] = useState(
    new Date(plan.targetDate).toISOString().split("T")[0],
  );
  const [status, setStatus] = useState(plan.status);
  const [progress, setProgress] = useState(plan.progress);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await onUpdate(plan._id, {
        title,
        targetDate,
        status,
        progress: Number(progress),
      });
      onClose();
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to update plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 animate-fade-in">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-on-surface text-lg">Edit Study Plan</h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
              Plan Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
              Target Date
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-outline-variant text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              >
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
                Progress ({progress}%)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                className="w-full mt-2 accent-primary"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-error bg-error/10 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg text-sm font-bold text-on-surface-variant border border-outline-variant hover:bg-surface-container transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary/90 transition disabled:opacity-60"
            >
              {loading ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Delete Confirmation Modal ──────────────────────────────────────────────────
function DeleteConfirmationModal({ onClose, onConfirm }) {
  // Listen for Escape key press to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the content box
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 animate-fade-in"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-on-surface text-lg">
            Delete Study Plan
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <p className="text-sm text-on-surface-variant mb-6">
          Are you sure you want to delete this study plan?
          <br />
          This action cannot be undone.
        </p>

        <div className="flex gap-3 pt-2">
          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg text-sm font-bold text-on-surface-variant border border-outline-variant hover:bg-surface-container transition cursor-pointer"
          >
            Cancel
          </button>
          {/* Delete Button */}
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-lg text-sm font-bold text-white bg-error hover:bg-error/90 transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Plan Card ────────────────────────────────────────────────────────────────
function PlanCard({ plan, onEdit, onDelete }) {
  const target = new Date(plan.targetDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white p-4 md:p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
          rocket_launch
        </span>
        <div className="flex items-center gap-2">
          <StatusBadge status={plan.status} />
          <button
            onClick={() => onEdit(plan)}
            title="Edit plan"
            className="text-on-surface-variant/50 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">edit</span>
          </button>
          <button
            onClick={() => onDelete(plan._id)}
            title="Delete plan"
            className="text-on-surface-variant/50 hover:text-error transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">delete</span>
          </button>
        </div>
      </div>
      <p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tight">
        Study Plan
      </p>
      <h3 className="text-sm font-bold text-on-surface mt-1 mb-3 line-clamp-2">
        {plan.title}
      </h3>
      <div className="flex justify-between items-end mb-1">
        <span className="text-[11px] font-bold text-primary">
          {plan.progress}% Completed
        </span>
        <span className="text-[10px] text-on-surface-variant">
          Target: {target}
        </span>
      </div>
      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-primary h-full rounded-full transition-all"
          style={{ width: `${plan.progress}%` }}
        />
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
function StudyPlan() {
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null); // plan object being edited

  // States to handle custom delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const fetchPlans = async () => {
    setLoadingPlans(true);
    setFetchError("");
    try {
      const data = await getStudyPlans();
      setPlans(data.studyPlans || []);
    } catch (err) {
      setFetchError(
        err?.response?.data?.message || "Failed to load study plans",
      );
    } finally {
      setLoadingPlans(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleCreate = async (payload) => {
    await createStudyPlan(payload);
    await fetchPlans();
  };

  const handleUpdate = async (id, updates) => {
    await updateStudyPlan(id, updates);
    await fetchPlans();
  };

  // Triggered when clicking the Delete button/icon on a Study Plan card
  const handleDelete = (id) => {
    setSelectedPlanId(id);
    setShowDeleteModal(true);
  };

  // Called when confirming the deletion within the custom React modal
  const confirmDelete = async () => {
    if (!selectedPlanId) return;
    try {
      await deleteStudyPlan(selectedPlanId);
      await fetchPlans(); // Refresh the study plan list
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to delete plan");
    } finally {
      // Close the modal and reset state
      setShowDeleteModal(false);
      setSelectedPlanId(null);
    }
  };

  const toggleTask = async (id, currentStatus) => {
    const nextStatus = currentStatus === "Active" ? "Completed" : "Active";
    const nextProgress = nextStatus === "Completed" ? 100 : 0;
    try {
      await updateStudyPlan(id, { status: nextStatus, progress: nextProgress });
      await fetchPlans();
    } catch (err) {
      console.error("Failed to toggle study plan task status:", err);
      alert(err?.response?.data?.message || "Failed to update plan status");
    }
  };

  const sortedPlans = [...plans].sort(
    (a, b) => new Date(a.targetDate) - new Date(b.targetDate),
  );
  const firstActiveIndex = sortedPlans.findIndex((p) => p.status === "Active");

  const upcomingMilestones = plans
    .filter((p) => p.status === "Active")
    .sort((a, b) => new Date(a.targetDate) - new Date(b.targetDate))
    .slice(0, 3)
    .map((p, i) => {
      const diffTime = new Date(p.targetDate) - new Date();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      let daysStr = "";
      if (diffDays > 0) {
        daysStr = `In ${diffDays} day${diffDays > 1 ? "s" : ""}`;
      } else if (diffDays === 0) {
        daysStr = "Today";
      } else {
        daysStr = `${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? "s" : ""} overdue`;
      }

      const icons = ["emoji_events", "star", "rocket_launch"];
      const colors = ["primary", "tertiary", "secondary"];

      return {
        _id: p._id,
        label: p.title,
        days: daysStr,
        pct: p.progress,
        icon: icons[i % icons.length],
        color: colors[i % colors.length],
      };
    });

  return (
    <AppLayout>
      <div className="p-4 md:p-8">
        <div className="max-w-container-max mx-auto space-y-6 md:space-y-8">
          {/* Header */}
          <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-on-surface">Study Plan</h2>
              <p className="text-on-surface-variant text-sm mt-1">
                Plan your preparation, track progress and stay consistent.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              New Plan
            </button>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-1 lg:col-span-8 space-y-6 md:space-y-8">
              {/* Plans grid */}
              {loadingPlans ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-xl border border-outline-variant/30 shadow-sm animate-pulse"
                    >
                      <div className="w-10 h-10 bg-surface-container rounded-lg mb-4" />
                      <div className="h-3 bg-surface-container rounded w-1/2 mb-2" />
                      <div className="h-4 bg-surface-container rounded w-3/4 mb-4" />
                      <div className="h-2 bg-surface-container rounded w-full" />
                    </div>
                  ))}
                </div>
              ) : fetchError ? (
                <div className="bg-error/10 text-error text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">
                    error
                  </span>
                  {fetchError}
                </div>
              ) : plans.length === 0 ? (
                <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-10 text-center">
                  <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 mb-3 block">
                    menu_book
                  </span>
                  <h3 className="font-bold text-on-surface mb-1">
                    No study plans yet
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Create your first plan to start tracking your prep.
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition"
                  >
                    Create Plan
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {plans.map((plan) => (
                    <PlanCard
                      key={plan._id}
                      plan={plan}
                      onEdit={setEditingPlan}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              )}

              {/* Today's tasks */}
              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
                <div className="px-4 md:px-6 py-4 flex justify-between items-center border-b border-outline-variant/20">
                  <div>
                    <h3 className="font-bold text-on-surface">Today's Plan</h3>
                    <p className="text-[11px] text-on-surface-variant font-medium">
                      {new Date().toLocaleDateString("en-IN", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <button className="text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors border border-primary/20">
                    View Calendar
                  </button>
                </div>
                <div className="divide-y divide-outline-variant/20">
                  {plans.length === 0 ? (
                    <p className="text-sm text-on-surface-variant p-6 text-center">
                      No tasks for today. Create a study plan to get started!
                    </p>
                  ) : (
                    plans.map((plan) => (
                      <div
                        key={plan._id}
                        className="px-4 md:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-surface-container-low/30 transition-colors"
                      >
                        <button
                          onClick={() => toggleTask(plan._id, plan.status)}
                          className={`w-6 h-6 border-2 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                            plan.status === "Completed"
                              ? "border-tertiary bg-tertiary/10"
                              : "border-outline-variant"
                          }`}
                        >
                          {plan.status === "Completed" && (
                            <span className="material-symbols-outlined text-tertiary text-lg">
                              check
                            </span>
                          )}
                        </button>
                        <div className="flex-1">
                          <h4
                            className={`text-sm font-bold ${
                              plan.status === "Completed"
                                ? "text-on-surface-variant line-through"
                                : "text-on-surface"
                            }`}
                          >
                            {plan.title}
                          </h4>
                          <p className="text-xs text-on-surface-variant">
                            Target Date: {new Date(plan.targetDate).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          {plan.status === "Completed" ? (
                            <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded">
                              Done
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                              {plan.progress}% Completed
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Plan Timeline */}
              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-4 md:p-6">
                <h3 className="font-bold text-on-surface mb-6">
                  Plan Timeline
                </h3>
                {plans.length === 0 ? (
                  <p className="text-sm text-on-surface-variant text-center py-4">
                    Create study plans to build a timeline.
                  </p>
                ) : (
                  <div className="relative space-y-0">
                    <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-outline-variant/30" />
                    {sortedPlans.map((plan, index) => {
                      const isCompleted = plan.status === "Completed";
                      const isCurrent = index === firstActiveIndex;
                      const formattedDate = new Date(plan.targetDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      });

                      return (
                        <div
                          key={plan._id}
                          className={`relative flex items-center justify-between pb-8 last:pb-0 pl-10 ${
                            !isCompleted && !isCurrent ? "opacity-60" : ""
                          }`}
                        >
                          <div
                            className={`absolute left-2.5 top-1.5 w-2.5 h-2.5 rounded-full ring-4 ${
                              isCompleted
                                ? "bg-tertiary ring-tertiary/20"
                                : isCurrent
                                  ? "bg-primary ring-primary/20"
                                  : "bg-outline-variant ring-surface-container"
                            }`}
                          />
                          {isCurrent ? (
                            <div className="bg-primary/5 p-3 rounded-lg w-full mr-12 -ml-2">
                              <div className="flex items-center gap-2 mb-0.5">
                                <h4 className="text-sm font-bold text-primary">
                                  {formattedDate}
                                </h4>
                                <span className="text-[9px] uppercase font-bold bg-primary text-white px-1.5 py-0.5 rounded">
                                  Current
                                </span>
                              </div>
                              <p className="text-[11px] text-on-surface-variant font-medium">
                                {plan.title}
                              </p>
                            </div>
                          ) : (
                            <div>
                              <h4
                                className={`text-sm font-bold ${isCompleted ? "text-on-surface" : "text-on-surface-variant"}`}
                              >
                                {formattedDate}
                              </h4>
                              <p className="text-[11px] text-on-surface-variant font-medium">
                                {plan.title}
                              </p>
                            </div>
                          )}
                          <span
                            className={`text-sm font-bold absolute right-0 top-1.5 ${
                              isCompleted
                                ? "text-tertiary"
                                : isCurrent
                                  ? "text-primary"
                                  : "text-on-surface-variant"
                            }`}
                          >
                            {plan.progress}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="col-span-1 lg:col-span-4 space-y-6">
              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-outline-variant/20 flex items-center justify-between">
                  <h3 className="font-bold text-on-surface text-sm">
                    Upcoming Milestones
                  </h3>
                  <button className="text-on-surface-variant hover:text-on-surface cursor-pointer">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </div>
                <div className="p-4 md:p-6 space-y-6">
                  {upcomingMilestones.length === 0 ? (
                    <p className="text-xs text-on-surface-variant text-center py-4">
                      No upcoming milestones. All caught up! 🎉
                    </p>
                  ) : (
                    upcomingMilestones.map((m) => (
                      <div key={m._id}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-lg bg-${m.color}/10 flex items-center justify-center`}>
                            <span className={`material-symbols-outlined text-${m.color} text-xl`}>
                              {m.icon}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xs font-bold text-on-surface">
                              {m.label}
                            </h4>
                            <p className="text-[10px] text-on-surface-variant">
                              {m.days}
                            </p>
                          </div>
                          <span className={`text-[11px] font-bold text-${m.color}`}>
                            {m.pct}%
                          </span>
                        </div>
                        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`bg-${m.color} h-full rounded-full`}
                            style={{ width: `${m.pct}%` }}
                          />
                        </div>
                      </div>
                    ))
                  )}
                  <button className="w-full py-2.5 text-xs font-bold text-primary hover:bg-primary/5 border border-primary/20 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    View All Milestones
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-4 md:p-6">
                <h3 className="font-bold text-on-surface text-sm mb-6">
                  Study Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Total Plans", plans.length.toString()],
                    [
                      "Active",
                      plans
                        .filter((p) => p.status === "Active")
                        .length.toString(),
                    ],
                    [
                      "Completed",
                      plans
                        .filter((p) => p.status === "Completed")
                        .length.toString(),
                    ],
                    [
                      "Avg Progress",
                      plans.length
                        ? `${Math.round(plans.reduce((s, p) => s + p.progress, 0) / plans.length)}%`
                        : "0%",
                    ],
                  ].map(([l, v]) => (
                    <div
                      key={l}
                      className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/20"
                    >
                      <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                        {l}
                      </p>
                      <p className="text-lg font-bold text-on-surface">{v}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2.5 text-xs font-bold text-primary hover:bg-primary/5 flex items-center justify-center gap-2 transition-colors rounded-lg">
                  View Detailed Analytics
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {showModal && (
        <CreatePlanModal
          onClose={() => setShowModal(false)}
          onCreate={handleCreate}
        />
      )}

      {editingPlan && (
        <EditPlanModal
          plan={editingPlan}
          onClose={() => setEditingPlan(null)}
          onUpdate={handleUpdate}
        />
      )}

      {/* Custom Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteConfirmationModal
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedPlanId(null);
          }}
          onConfirm={confirmDelete}
        />
      )}
    </AppLayout>
  );
}

export default StudyPlan;
