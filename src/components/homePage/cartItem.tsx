import { useContext } from "react";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import CartContext from "../../utilities/store/cart/cartContext";
import CartItemType from "../../types/cartItem";

/**
 * CartItem component
 * Represents a single item in the shopping cart with ability to:
 * - increment/decrement item quantity
 * - remove item from the cart
 */
const CartItem: React.FC<{ cartItem: CartItemType }> = ({ cartItem }) => {
  const {
    incrementCartItemAmount,
    decrementCartItemAmount,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div className="border-b h-200 w-full flex p-2 gap-4">
      {/* Product image */}
      <div>
        <img className="w-[80px]" src={cartItem.image} alt="Loading" />
      </div>

      {/* Product details */}
      <div className="flex flex-col w-full gap-4">
        {/* Title and remove button */}
        <div className="flex justify-between gap-4">
          <p className="font-medium">{cartItem.title}</p>
          <div
            onClick={() => removeFromCart(cartItem.id)}
            className="cursor-pointer hover:text-red-600 transition-all duration-300"
            title="Remove item"
          >
            <FaTimes />
          </div>
        </div>

        {/* Quantity controls and pricing */}
        <div className="flex w-full justify-between items-center">
          {/* Quantity adjustment */}
          <div className="flex border w-[75px] px-2 py-1 justify-between items-center">
            <FaMinus
              onClick={() => decrementCartItemAmount(cartItem.id)}
              className="cursor-pointer hover:text-white hover:bg-red-600 transition-all duration-300"
              title="Decrease quantity"
            />
            <p>{cartItem.amount}</p>
            <FaPlus
              onClick={() => incrementCartItemAmount(cartItem.id)}
              className="cursor-pointer hover:text-white hover:bg-green-500 transition-all duration-300"
              title="Increase quantity"
            />
          </div>

          {/* Unit price and total price */}
          <p className="opacity-50">$ {cartItem.price}</p>
          <p>$ {(cartItem.price * cartItem.amount).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
