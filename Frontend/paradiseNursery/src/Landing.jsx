// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Welcome to Paradise Nursery
        </h1>
        <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-6">
          Where Nature Meets Tranquility
        </h2>

        <p className="max-w-3xl text-gray-300 mb-8">
          At Paradise Nursery, we bring nature closer to home. From
          air-purifying greens to fragrant blooms, we offer high-quality plants
          that beautify your space and boost well-being. Whether you're a
          beginner or a plant pro, we’re here to guide your green journey.
        </p>

        <Link to="/products">
          <button className="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
