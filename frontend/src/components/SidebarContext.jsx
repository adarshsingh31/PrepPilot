import { createContext, useContext, useState, useEffect } from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") return window.innerWidth >= 1024;
    return true;
  });
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e) => {
      setIsMobile(e.matches);
      if (!e.matches) setIsMobileOpen(false);
    };
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  function toggleSidebar() {
    if (isMobile) {
      setIsMobileOpen((v) => !v);
    } else {
      setIsSidebarOpen((v) => !v);
    }
  }

  const collapsed = !isMobile && !isSidebarOpen;

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, isMobileOpen, isMobile, collapsed, toggleSidebar, setIsMobileOpen }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
