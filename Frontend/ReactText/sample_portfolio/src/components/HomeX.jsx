import EmanuelImg from "/image.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import {
  FaComments,
  FaLaptopCode,
  FaTerminal,
  FaUser,
  FaPenNib,
  FaTools,
} from "react-icons/fa";
import { FaCode, FaBlog } from "react-icons/fa";

import AppLauncherNavbar from "./Navbar";

import { useState } from "react";

function Home() {
  // const appIcons = {
  //     Chat: <FaComments className="text-6xl text-white/80 mx-auto mt-6" />,
  //     Projects: <FaLaptopCode className="text-6xl text-white/80 mx-auto mt-6" />,
  //     Terminal: <FaTerminal className="text-6xl text-white/80 mx-auto mt-6" />,
  //     About: <FaUser className="text-6xl text-white/80 mx-auto mt-6" />,
  //     Blog: <FaPenNib className="text-6xl text-white/80 mx-auto mt-6" />,
  //     Tech: <FaTools className="text-6xl text-white/80 mx-auto mt-6" />,
  //   };
  const appIcons = {
    Chat: <FaComments />,
    Projects: <FaCode />,
    Terminal: <FaTerminal />,
    About: <FaUser />,
    Blog: <FaBlog />,
    Tech: <FaTools />,
  };
  const [activeApp, setActiveApp] = useState(null); // ✅

  const handleAppClick = (app) => {
    setActiveApp(app); // ✅ open the app
  };
  console.log(activeApp);
  return (
    <>
      <div className="w-screen md:h-screen  bg-gray-800 text-green-200">
        <div className="max-w-6xl p-3 w-full h-full mx-auto shadow-2xl bg-black/10 flex flex-col pb-10 ">
          <header className="w-full h-screen  p-2 md:border-1 flex md:flex-row justify-center flex-col">
            <div className="flex flex-col items-center min-w-2/5 mb-10">
              <div className="h-30 w-30 overflow-clip rounded-full">
                <img src={EmanuelImg} alt="Emanuel" className="w-fill" />
              </div>

              <h1 className="text-5xl font-bold">Emanuel Molla</h1>
              <h2>Backend Developer | Data Engineer</h2>
              <p className="text-sm text-gray-500">📍 Vancouver, BC, Canada</p>

              <div className="flex gap-4 mt-2 text-2xl ">
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
            </div>

            <div className="flex flex-col items-center justify-end text-center">
              <p>
                {" "}
                Passionate backend developer with a focus on building robust
                APIs, efficient data pipelines, and scalable web applications. I
                love solving real-world problems with clean code and powerful
                tools like Node.js, MongoDB, and Python.
              </p>{" "}
              <button className="border-2 px-3 p-1 rounded-full mx-auto my-4">
                Resume
              </button>
            </div>
          </header>

          {/*  App Launcher */}

          {/* <div className='flex flex-col my-auto '>
         <div className='m-3  flex justify-between items-center gap-2'><h3 className='font-bold text-3xl inline-block'>#Apps</h3> <div className='w-full'><hr /></div></div>
      <div className="w-[80%]  py-10 mx-auto items-center  flex flex-wrap md:gap-6 gap-3">
      {['Chat', 'Projects', 'Terminal', 'About', 'Blog', 'Tech'].map(app => (
        <button
            key={app}
            onClick={() => onAppClick(app)}
            className="md:w-[30%] w-[46%] h-40 flex flex-col bg-black/20 rounded-xl overflow-clip shadow-md hover:scale-105 transition"
        >
            <div className="bg-zinc-900 text-white font-bold text-start px-3 p-1">
            {app}
            </div>
            <div className="flex-grow flex ">
            {appIcons[app]}
            </div>
        </button>
        ))}

      </div>
           </div> */}

          <AppLauncherNavbar onAppClick={handleAppClick} appIcons={appIcons} />
        </div>
      </div>
    </>
  );
}
export default Home;
