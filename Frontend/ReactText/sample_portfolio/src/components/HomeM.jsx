import { useState, useEffect } from "react";
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
  FaChevronDown,
} from "react-icons/fa";
import EmanuelImg from "/image.jpg";

const AppLauncherNavbar = ({ onAppClick, appIcons, activeApp }) => (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
    <div className="flex gap-2 p-3 bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10">
      {Object.entries(appIcons).map(([app, icon]) => (
        <button
          key={app}
          onClick={() => onAppClick(app)}
          className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
            activeApp === app
              ? "bg-cyan-500 text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  </div>
);

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/20 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const AppWindow = ({ app, icon, onClose, children }) => (
  <div className="absolute inset-0 max-w-6xl mx-auto z-40 flex flex-col max-h-screen mb-20 animate-slide-up">
    <div className="flex justify-between items-center p-4 border-b border-zinc-700 bg-zinc-800/90 backdrop-blur-lg">
      <div className="flex items-center gap-2 text-white text-lg">
        <div className="text-xl">{icon}</div>
        <span>{app}</span>
      </div>
      <button
        onClick={onClose}
        className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-500 transition-all duration-200 hover:scale-105"
      >
        Close
      </button>
    </div>
    <div className="flex-1 overflow-auto scrollbar-hide p-6 bg-zinc-900/90 backdrop-blur-lg">
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleAppClick = (app) => {
    setActiveApp(app);
  };

  const renderActiveApp = () => {
    const AppContent = ({ title }) => (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">{title}</h2>
        <p className="text-zinc-300">
          This is a demo of the {title} app content.
        </p>
      </div>
    );

    switch (activeApp) {
      case "Chat":
        return <AppContent title="Chat" />;
      case "Projects":
        return <AppContent title="Projects" />;
      case "Terminal":
        return <AppContent title="Terminal" />;
      case "About":
        return <AppContent title="About" />;
      case "Blog":
        return <AppContent title="Blog" />;
      case "Tech":
        return <AppContent title="Tech Stack" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white overflow-hidden relative">
      {/* Dynamic Background with Mouse Interaction */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(6, 182, 212, 0.15) 0%, 
            rgba(147, 51, 234, 0.1) 25%, 
            rgba(236, 72, 153, 0.05) 50%, 
            transparent 70%)`,
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Landing Page Section */}
      {!activeApp && (
        <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-6 relative z-10">
          {/* Animated Profile Section */}
          <div
            className={`flex flex-col md:flex-row items-center justify-center transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Enhanced Profile Image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500  p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src={EmanuelImg}
                    alt="Emanuel"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20" />
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce">
                <FaCode className="text-black text-sm" />
              </div>
              <div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <FaLaptopCode className="text-white text-sm" />
              </div>
            </div>

            {/* Enhanced Info Section */}
            <div className="text-center md:text-left space-y-6 max-w-2xl">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    Emanuel Molla
                  </span>
                </h1>
                <h2 className="text-lg md:text-2xl text-zinc-300 font-medium">
                  <TypewriterText
                    text="Backend Developer · Data Engineer"
                    delay={80}
                  />
                </h2>
              </div>

              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                Building robust APIs and efficient data pipelines. Passionate
                about solving real-world problems with{" "}
                <span className="text-cyan-400 font-semibold">clean code</span>{" "}
                and
                <span className="text-purple-400 font-semibold">
                  {" "}
                  scalable systems
                </span>
                .
              </p>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-xs text-zinc-400">Years Experience</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">IBM</div>
                  <div className="text-xs text-zinc-400">Certified</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-pink-400">5+</div>
                  <div className="text-xs text-zinc-400">Languages</div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {[
                  {
                    icon: <FaGithub />,
                    href: "https://github.com/Emanuel-DevX",
                    color: "hover:text-gray-400",
                  },
                  {
                    icon: <FaLinkedin />,
                    href: "https://www.linkedin.com/in/emanuel-molla",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: <FaEnvelope />,
                    href: "mailto:emanuelmolla@outlook.com",
                    color: "hover:text-red-400",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className={`text-2xl p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg">
                  Download Resume
                </button>
                <button
                  onClick={() => handleAppClick("Projects")}
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-zinc-400">
              <span className="text-sm mb-2">Explore Apps</span>
              <FaChevronDown />
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

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .animate-blink {
          animation: blink 1s infinite;
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
