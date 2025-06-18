// AppLauncherNavbar.jsx
import React from "react";

const AppLauncherNavbar = ({ onAppClick, appIcons, activeApp }) => {
  const apps = ["Chat", "Projects", "Terminal", "About", "Blog", "Tech"];

  //   const visibleApps = window.innerWidth < 768 ? apps.filter(app => app !== 'Terminal') : apps;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const visibleApps = isMobile
    ? apps.filter((app) => app !== "Terminal")
    : apps;

  return (
    <nav className="w-full max-w-2xl mx-auto fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
      <div className="relative bg-black/40 backdrop-blur-lg rounded-xl border-y-2 border-x-2 border-b-2 border-transparent animate-border-gradient overflow-x-auto flex justify-around items-center px-2 py-1 mx-2 md:py-3 space-x-1">
        {visibleApps.map((app) => (
          <button
            key={app}
            onClick={() => onAppClick(app)}
            className={`flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-1 md:py-2 rounded-md transition-transform duration-200 hover:scale-105 ${
              activeApp === app
                ? "md:bg-white/10 md:ring-2 md:ring-white/30 text-cyan-600"
                : "text-white"
            }`}
          >
            <div className="text-xl ">{appIcons[app]}</div>
            <span className="text-[10px] sm:text-sm font-semibold text-white text-center sm:text-left">
              {app}
            </span>
          </button>
        ))}
      </div>

      {/* Gradient border animation */}
      <style>{`
        @keyframes gradientBorder {
          0% { border-color: #06b6d4; }
          50% { border-color: #8b5cf6; }
          100% { border-color: #06b6d4; }
        }

        .animate-border-gradient {
          animation: gradientBorder 3s ease infinite;
        }
      `}</style>
    </nav>
  );
};

export default AppLauncherNavbar;
