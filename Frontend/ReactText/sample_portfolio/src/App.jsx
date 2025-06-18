import "./App.css";

import AppWindow from "./components/AppWindow";
import { useState } from "react";
import ChatApp from "./components/ChatApp";
import Home from "./components/Home";

function App() {
  const [activeApp, setActiveApp] = useState(null);
  const handleAppClick = (appName) => {
    setActiveApp(appName);
  };
  console.log("Active app:", activeApp);

  const renderApp = () => {
    switch (activeApp) {
      case "Chat":
        return (
          <AppWindow title="Chat" onMinimize={() => setActiveApp(null)}>
            <ChatApp />
          </AppWindow>
        );
      // case 'Projects': return <AppWindow title="Projects" onMinimize={() => setActiveApp(null)}><ProjectsApp /></AppWindow>;
      // case 'Terminal': return <AppWindow title="Terminal" onMinimize={() => setActiveApp(null)}><TerminalApp /></AppWindow>;
      default:
        return <Home onAppClick={handleAppClick} />;
    }
  };

  return renderApp();
}

export default App;
