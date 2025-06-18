import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const SuperCoin = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [superCoins, setSuperCoins] = useState(0);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300 && totalAmount < 500) {
      setSuperCoins(30);
    } else if (totalAmount >= 500) {
      setSuperCoins(50);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return (
    <div className="super-coins" style={{ textAlign: "center" }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">
        You will earn {superCoins} super coins with this purchase.
      </p>
    </div>
  );
};
export default SuperCoin;
