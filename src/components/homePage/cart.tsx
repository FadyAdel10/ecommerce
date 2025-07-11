import { useContext } from "react";
import CartContext from "../../utilities/store/cart/cartContext";
import CartItem from "./cartItem";

/**
 * Cart component
 * Renders a scrollable list of items currently in the user's cart.
 * Uses CartContext to retrieve cart state.
 */
const Cart: React.FC = () => {
  // Access the cart array from context
  const { cart } = useContext(CartContext);

  return (
    // Container for cart items with vertical scroll and spacing
    <div className="flex flex-col gap-1 items-center h-[450px] overflow-y-auto">
      {/* Render each item in the cart */}
      {cart.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
