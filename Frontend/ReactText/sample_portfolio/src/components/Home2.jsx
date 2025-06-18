// Home.jsx
import EmanuelImg from '/image.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaComments, FaLaptopCode, FaTerminal, FaUser, FaPenNib, FaTools, FaCode, FaBlog } from 'react-icons/fa';
import AppLauncherNavbar from './Navbar';
import { useState } from 'react';

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
              className="object-cover w-full h-full scale-110 grayscale hover:grayscale-0 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10" />
          </div>

          {/* Info */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Emanuel Molla
            </h1>
            <h2 className="text-lg md:text-2xl text-zinc-300 font-medium">
              Backend Developer · Data Engineer
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-md">
              Building robust APIs and efficient data pipelines. Passionate about solving real-world problems with clean code and scalable systems.
            </p>
            <div className="flex gap-4 justify-center md:justify-start text-2xl">
              <a href="https://github.com/Emanuel-DevX" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/emanuel-molla" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:emanuelmolla@outlook.com">
                <FaEnvelope />
              </a>
            </div>
            <button className="mt-4 px-4 py-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition rounded-full">
              Resume
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen App View */}
      {activeApp && (
        <div className="absolute inset-0 bg-zinc-900 z-40 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
          <button
            onClick={() => setActiveApp(null)}
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-500"
          >
            Close
          </button>
          <h1 className="text-3xl font-bold mb-4">{activeApp}</h1>
          <p>This is the {activeApp} app screen.</p>
        </div>
      )}

      <AppLauncherNavbar onAppClick={handleAppClick} appIcons={appIcons} activeApp={activeApp} />

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
      `}</style>
    </div>
  );
}

export default Home;
