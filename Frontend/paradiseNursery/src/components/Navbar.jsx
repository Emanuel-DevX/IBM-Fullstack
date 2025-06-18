// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav className="w-full px-6 py-4 bg-zinc-800 shadow-md flex justify-between items-center sticky top-0 z-50">
      {/* Logo / App Name */}
      <Link to="/">
        <h1 className="text-cyan-400 text-2xl md:text-3xl font-bold font-mono tracking-widest">
          Paradise Nursery
        </h1>
      </Link>

      {/* Cart Icon */}
      <Link to="/cart" className="relative">
        <FiShoppingCart className="text-white text-2xl md:text-3xl" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
