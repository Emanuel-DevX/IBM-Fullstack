// src/pages/ProductsPage.jsx
import Navbar from "./components/Navbar";
import PlantCard from "./components/PlantCard";
import { plants } from "./plants";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navbar */}
      <Navbar cartCount={itemsCount} />
      {/* Main Content Placeholder */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 mx-auto text-center">
          Our Plants
        </h2>

        {/* Product cards will go here later */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <PlantCard key={plant.title} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
