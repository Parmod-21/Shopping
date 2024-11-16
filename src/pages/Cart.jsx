import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row items-start justify-between max-w-4xl mx-auto space-x-5">
          {/* Left Section: Cart Items */}
          <div className="w-full lg:w-3/5 space-y-8">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Section: Summary */}
          <div className="w-full lg:w-2/5 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
              <p className="text-3xl font-bold text-green-500">Summary</p>
            </div>
            <p className="mb-4 text-lg font-medium">
              Total Items: <span className="text-gray-800">{cart.length}</span>
            </p>
            <p className="mb-6 text-lg font-bold">
              Total Amount: <span className="text-green-600">${totalAmount}</span>
            </p>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg text-lg hover:bg-green-600 transition">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">Cart Empty</h1>
          <Link to={"/"}>
            <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
