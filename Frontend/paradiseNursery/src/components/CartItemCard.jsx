// src/components/CartItemCard.jsx
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../cartSlice";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const { title, img, price, quantity } = item;

  const subtotal = (price * quantity).toFixed(2);

  return (
    <div className="flex items-center justify-between bg-zinc-800 rounded-lg p-4 mb-4 shadow-md text-white">
      {/* Image & title */}
      <div className="flex items-center gap-4 w-full md:w-1/2">
        <img
          src={img}
          alt={title}
          className="w-24 h-24 object-cover rounded-md border border-zinc-700"
        />
        <div className="flex flex-col md:flex-row md:justify-between md:min-w-full md:pr-10">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-400">${price.toFixed(2)} each</p>
          </div>
          {/* Quantity controls */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={() => dispatch(decrementQuantity(title))}
              className="px-3 py-1 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              onClick={() => dispatch(incrementQuantity(title))}
              className="px-3 py-1 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Subtotal and delete */}
      <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
        <p className="text-cyan-400 font-semibold">${subtotal}</p>
        <button
          onClick={() => dispatch(removeFromCart(title))}
          className="text-red-400 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
