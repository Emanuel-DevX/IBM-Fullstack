// Home.jsx
import EmanuelImg from "/image.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaComments,
  FaLaptopCode,
  FaTerminal,
  FaUser,
  FaPenNib,
  FaTools,
  FaCode,
  FaBlog,
} from "react-icons/fa";
import AppLauncherNavbar from "./Navbar";
import { useState } from "react";

import ChatApp from "../apps/ChatApp";
import TerminalApp from "../apps/TerminalApp";
import AboutApp from "../apps/AboutApp";
import ProjectsApp from "../apps/ProjectsApp";
import BlogApp from "../apps/BlogApp";
import TechApp from "../apps/TechApp";

const AppWindow = ({ app, icon, onClose, children }) => (
  <div className="absolute inset-0  max-w-screen-2xl mx-auto z-40 flex flex-col max-h-screen mb-20  animate-fade-in border-1 rounded-lg  border-zinc-800">
    <div className="flex justify-between items-center p-4 border-b border-zinc-700 bg-zinc-800/90">
      <div className="flex items-center gap-2 text-white text-lg">
        <div className="text-xl">{icon}</div>
        <span>{app}</span>
      </div>
      <button
        onClick={onClose}
        className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-500"
      >
        Close
      </button>
    </div>
    <div className="flex-1 overflow-auto scrollbar-hide bg-zinc-950 rounded-xl p-6">
      {children}
    </div>
  </div>
);

function Home() {
  const appIcons = {
    Chat: <FaComments />,
    Projects: <FaCode />,
    Terminal: <FaTerminal />,
    About: <FaUser />,
    Blog: <FaBlog />,
    Tech: <FaTools />,
  };

  const [activeApp, setActiveApp] = useState(null);

  const handleAppClick = (app) => {
    setActiveApp(app);
  };

  const renderActiveApp = () => {
    switch (activeApp) {
      case "Chat":
        return <ChatApp />;
      case "Projects":
        return <ProjectsApp />;
      case "Terminal":
        return <TerminalApp />;
      case "About":
        return <AboutApp />;
      case "Blog":
        return <BlogApp />;
      case "Tech":
        return <TechApp />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden relative">
      {/* Landing Page Section */}
      {!activeApp && (
        <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 animate-fade-in">
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 rounded-full overflow-hidden shadow-lg ring-4 ring-cyan-500/40 animate-pulse-slow">
            <img
              src={EmanuelImg}
              alt="Emanuel"
              className="object-cover w-full h-full  transition duration-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10" />
          </div>

          {/* Info */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-600 to-red-600 bg-clip-text text-transparent">
              Emanuel Molla
            </h1>
            <h2 className="text-lg md:text-2xl text-zinc-300 font-medium">
              Backend Developer · Data Engineer
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-md">
              Building robust APIs and efficient data pipelines. Passionate
              about solving real-world problems with clean code and scalable
              systems.
            </p>
            <ul className="text-xs md:text-sm text-zinc-400 list-disc pl-5">
              <li>3+ years of academic experience in information systems</li>
              <li>IBM & Google certified in full-stack and data analysis</li>
              <li>Fluent in JavaScript, Python, C++, SQL, and more</li>
            </ul>
            <div className="flex gap-4 justify-center md:justify-start text-2xl">
              <a
                href="https://github.com/Emanuel-DevX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/emanuel-molla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:emanuelmolla@outlook.com">
                <FaEnvelope />
              </a>
            </div>
            {/* <button className="mt-4 px-4 py-2 border-2 hover:border-gradient-to-r from-yellow-400 via-red-600 to-red-600 border-cyan-500 text-cyan-400  hover:text-white transition rounded-full">
              Resume
            </button> */}
            <div className="relative inline-block mt-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-red-600 p-2"></div>
              <button className="relative m-[1px] px-4 py-2 rounded-full bg-zinc-900 text-cyan-400 hover:text-white transition">
                <h3 className="bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
                  Resume
                </h3>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* App Window */}
      {activeApp && (
        <AppWindow
          app={activeApp}
          icon={appIcons[activeApp]}
          onClose={() => setActiveApp(null)}
        >
          {renderActiveApp()}
        </AppWindow>
      )}

      <AppLauncherNavbar
        onAppClick={handleAppClick}
        appIcons={appIcons}
        activeApp={activeApp}
      />
      {/* <div className="md:hidden border-2 border-white fixed bottom-1 left-1/2 -translate-x-1/2 w-20 rounded-full"></div> */}

      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Home;
