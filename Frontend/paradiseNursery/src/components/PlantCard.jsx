// src/components/PlantCard.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartSlice";

const PlantCard = ({ plant }) => {
  const { title, price, description, img, onSale } = plant;

  const dispatch = useDispatch();
  const addPlantToCart = () => {
    dispatch(addToCart(plant));
  };
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = cartItems.some((item) => item.title === title);

  return (
    <div className="relative bg-zinc-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* On Sale Badge */}
      {onSale && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          SALE
        </div>
      )}

      {/* Image */}
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-2 line-clamp-2">{description}</p>
        <div className="text-cyan-400 font-bold mb-4">${price.toFixed(2)}</div>

        <button
          onClick={addPlantToCart}
          disabled={isInCart}
          className={`w-full py-2 rounded-full font-semibold transition 
            ${
              isInCart
                ? "bg-gray-600 cursor-not-allowed text-gray-300"
                : "bg-cyan-600 hover:bg-cyan-500 text-white cursor-pointer"
            }
          `}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
