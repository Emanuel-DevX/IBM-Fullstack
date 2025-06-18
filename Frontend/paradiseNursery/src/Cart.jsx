// src/pages/ProductsPage.jsx
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemCard from "./components/CartItemCard";
import { FiShoppingCart } from "react-icons/fi";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const total = Math.floor(cartItems.reduce(
    (subTotal, item) => subTotal + item.price * item.quantity,
    0
  ) *100)/100;

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navbar */}
      <Navbar cartCount={itemsCount} />
      {/* Main Content Placeholder */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 mx-auto text-center ">
          <FiShoppingCart className="inline text-cyan-500" /> Cart
        </h2>
        {/* Product cards will go here later */}
        <div className="grid grid-cols-1  ">
          {cartItems.map((item) => (
            <CartItemCard item={item} key={item.title} />
          ))}
        </div>
        <div className="flex items-center justify-center my-5">
          <h3 className="font-bold text-xl ">
            Total <span className="text-cyan-400">${total}</span>
          </h3>
        </div>
        <div className="gap-3 flex justify-center">
          <Link to="/products">
            <button className="cursor-pointer bg-zinc-700 p-2 rounded-full px-3 font-bold">
              Back to Shop
            </button>
          </Link>
          <button className="cursor-pointer bg-cyan-500 font-bold p-2 rounded-full px-3">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
