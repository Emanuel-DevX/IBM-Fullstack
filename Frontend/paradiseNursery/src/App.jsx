import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";
import ProductsPage from "./Products";
import CartPage from './Cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  );
}

export default App;
