import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";
import { useSidebar } from "./SidebarContext";
/* ─── nav items ─────────────────────────────────────────────────────────── */
const NAV_MAIN = [
  { to: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { to: "/mock-interview", icon: "video_chat", label: "AI Mock Interview" },
  { to: "/resume-analyzer", icon: "description", label: "Resume Analyzer" },
  { to: "/coding-practice", icon: "code", label: "Coding Practice" },
  { to: "/progress", icon: "trending_up", label: "Progress" },
  { to: "/question-bank", icon: "inventory_2", label: "Question Bank" },
  { to: "/study-plan", icon: "event_note", label: "Study Plan", fill: true },
];

const NAV_BOTTOM = [
  { to: "/profile", icon: "person", label: "Profile" },
  { to: "/settings", icon: "settings", label: "Settings" },
  { to: "/help-support", icon: "help", label: "Help Center" },
];

/* ─── Tooltip ─────────────────────────────────────────────────────────── */
function Tooltip({ label, children }) {
  return (
    <div className="relative group/tip">
      {children}
      <div
        className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3
                   bg-inverse-surface text-inverse-on-surface text-xs font-medium
                   px-2.5 py-1.5 rounded-lg whitespace-nowrap
                   opacity-0 group-hover/tip:opacity-100 scale-95 group-hover/tip:scale-100
                   transition-all duration-150 z-[100] shadow-md"
      >
        {label}
      </div>
    </div>
  );
}

/* ─── NavLink ────────────────────────────────────────────────────────── */
function NavItem({ to, icon, label, fill, collapsed }) {
  const { pathname } = useLocation();
  const active = pathname === to;

  const base =
    "flex items-center gap-3 py-3 rounded-lg transition-all duration-200 cursor-pointer";
  const activeClass =
    "bg-primary-container text-on-primary-container font-semibold";
  const inactiveClass =
    "text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20";

  const inner = (
    <Link
      to={to}
      className={`${base} ${active ? activeClass : inactiveClass} ${
        collapsed ? "justify-center px-0 w-full" : "px-4"
      }`}
    >
      <span
        className="material-symbols-outlined shrink-0"
        style={
          fill || active ? { fontVariationSettings: "'FILL' 1" } : undefined
        }
      >
        {icon}
      </span>
      <span
        className={`font-label-md whitespace-nowrap overflow-hidden transition-all duration-300 ${
          collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
        }`}
      >
        {label}
      </span>
    </Link>
  );

  return collapsed ? <Tooltip label={label}>{inner}</Tooltip> : inner;
}

/* ─── AppLayout ─────────────────────────────────────────────────────── */
export default function AppLayout({ children }) {
  const { user } = useAuth();
  const {
    isSidebarOpen,
    isMobileOpen,
    isMobile,
    collapsed,
    toggleSidebar,
    setIsMobileOpen,
  } = useSidebar();

  const [searchQuery, setSearchQuery] = useState("");

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const overlayRef = useRef(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");
  };
  const sidebarWidth = collapsed ? "w-20" : "w-72";
  const mainMargin = isMobile ? "ml-0" : collapsed ? "ml-20" : "ml-72";

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* ── Sidebar ── */}
        <aside
          className={`
            h-screen fixed left-0 top-0
            bg-surface-container-lowest dark:bg-inverse-surface
            border-r border-outline-variant dark:border-outline
            shadow-sm flex flex-col py-6 z-50 overflow-y-auto overflow-x-hidden
            transition-[width] duration-300 ease-in-out
            ${sidebarWidth}
            ${
              isMobile
                ? `${isMobileOpen ? "translate-x-0" : "-translate-x-full"} w-72 transition-transform`
                : "translate-x-0"
            }
          `}
        >
          {/* Logo */}
          <div
            className={`flex items-center mb-8 px-2 ${collapsed ? "justify-center" : "gap-3 pl-4"}`}
          >
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center shrink-0">
              <span
                className="material-symbols-outlined text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
            </div>
            <div
              className={`text-left overflow-hidden transition-all duration-300 ${
                collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              }`}
            >
              <h1 className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed-dim whitespace-nowrap">
                PrepPilot
              </h1>
              <p className="text-[10px] font-label-md text-secondary-fixed-dim uppercase tracking-widest whitespace-nowrap">
                AI Career Coach
              </p>
            </div>
          </div>

          {/* Main nav */}
          <nav
            className={`flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar space-y-1.5 ${collapsed ? "px-2" : "px-4"}`}
          >
            {NAV_MAIN.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                collapsed={collapsed && !isMobile}
              />
            ))}

            <div className="pt-4 mt-4 border-t border-outline-variant space-y-1.5">
              {NAV_BOTTOM.map((item) => (
                <NavItem
                  key={item.to}
                  {...item}
                  collapsed={collapsed && !isMobile}
                />
              ))}
            </div>
          </nav>

          {/* Logout */}
          <div className={`mt-auto ${collapsed ? "px-2" : "px-4"}`}>
            {collapsed && !isMobile ? (
              <Tooltip label="Log Out">
                <Link
                  to="/"
                  className="text-error hover:bg-error-container/20 transition-colors duration-200 py-3 rounded-lg flex items-center justify-center w-full"
                >
                  <span className="material-symbols-outlined">logout</span>
                </Link>
              </Tooltip>
            ) : (
              <button
                onClick={handleLogout}
                className="text-error hover:bg-error-container/20 transition-colors duration-200 px-4 py-3 rounded-lg flex items-center gap-3 w-full"
              >
                <span className="material-symbols-outlined">logout</span>
                <span
                  className={`font-label-md whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                  }`}
                >
                  Log Out
                </span>
              </button>
            )}
          </div>
        </aside>

        {/* Mobile overlay */}
        {isMobile && isMobileOpen && (
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* ── Main content ── */}
        <main
          className={`flex-1 flex flex-col h-screen overflow-hidden transition-[margin] duration-300 ease-in-out ${mainMargin}`}
        >
          {/* Navbar */}
          <header className="flex justify-between items-center px-4 md:px-8 w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
            <div className="flex items-center gap-3 flex-1 max-w-xl">
              {/* Sidebar toggle — left_panel_open / left_panel_close */}
              <button
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
                className="text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded-lg p-1.5 transition-colors duration-200 shrink-0"
              >
                <span className="material-symbols-outlined">
                  {isMobile
                    ? "menu"
                    : isSidebarOpen
                      ? "left_panel_close"
                      : "left_panel_open"}
                </span>
              </button>

              {/* Search */}
              <div
                className={`relative w-full transition-transform duration-200 ${
                  isSearchFocused ? "scale-[1.02]" : ""
                }`}
              >
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-body-md focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                  placeholder="Search anything..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>

            {/* Right: notifications + profile */}
            <div className="flex items-center gap-4 md:gap-6">
              <button className="relative text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-4 h-4 bg-error text-white text-[10px] rounded-full flex items-center justify-center font-bold border-2 border-surface-bright">
                  3
                </span>
              </button>
              <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-outline-variant">
                <div className="hidden sm:block text-right">
                  <p className="font-bold text-on-surface text-sm">
                    {user?.name}
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    {user?.email}
                  </p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="user details"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLrPT_yqX5LpLoVMY5D1-zozMZZgmOejC34ZHdh2niVx2vPlu7hcOY13GNvlFQOYpZ6QwgCzYAtedNIOWLXndwYMD-AMVj5SKcbV8Vm4s2ZUA1bQrXn7RZakbk1D-XMlgEqv_Un0IVpCHol-J33_TrsZFXB-_Dw8IB_Lr_BFCbrZPKcWuSo44OjfbQxniN8wX1Q8OtYahGxmGCkvfb5c16X2EAgzAvQXOQGKR6qxRtGYAUvZ7wnLy-lqeORv5nGabvBbUwroMHuFU"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 custom-scrollbar">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
