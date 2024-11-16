import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex items-center bg-white p-6 rounded-lg shadow-md mb-4">
    {/* Image Section */}
    <img
      src={item.image}
      alt={item.title}
      className="w-24 h-54 object-cover rounded-md"
    />

    {/* Text Content Section */}
    <div className="flex-1 ml-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
      {/* Description */}
      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      {/* Price and Delete Button Row */}
      <div className="flex items-center justify-between mt-4">
        {/* Price */}
        <p className="text-lg font-bold text-green-600">${item.price}</p>
        {/* Delete Button */}
        <button
          onClick={removeFromCart}
          className="text-red-500 hover:text-red-600 text-2xl"
        >
          <FcDeleteDatabase />
        </button>
      </div>
    </div>
  </div>
  );
};

export default CartItem;
