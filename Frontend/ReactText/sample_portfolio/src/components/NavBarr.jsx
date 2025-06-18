// AppLauncherNavbar.jsx
import React from "react";

const AppLauncherNavbar = ({ onAppClick, appIcons }) => {
  const apps = ["Chat", "Projects", "Terminal", "About", "Blog", "Tech"];

  return (
    <nav className="w-full bg-black/30 backdrop-blur-sm shadow-md fixed bottom-0 left-0 max-w-6xl z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 overflow-x-auto scrollbar-hide space-x-4">
        {apps.map((app) => (
          <button
            key={app}
            onClick={() => onAppClick(app)}
            className="flex flex-col items-center justify-center text-white hover:scale-105 transition-transform duration-200"
          >
            <div className="text-2xl mb-1">{appIcons[app]}</div>
            <span className="text-sm font-semibold">{app}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default AppLauncherNavbar;
