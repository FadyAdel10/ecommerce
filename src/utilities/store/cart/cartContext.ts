import { createContext } from "react";
import CartItemType from "../../../types/cartItem";
import ProductType from "../../../types/product";


/**
 * Defines the structure of the cart context value used across the application.
 */
export interface CartContextInterface {
  /** List of items currently in the shopping cart */
  cart: CartItemType[];

  /** Total number of items in the cart */
  totalAmount: number;

  /** Total price of all items in the cart */
  totalPrice: number;

  /**
   * Adds a product to the cart.
   * @param product - The product to be added.
   */
  addToCart: (product: ProductType) => void;

  /**
   * Increases the quantity of a specific cart item.
   * @param id - The ID of the product to increment.
   */
  incrementCartItemAmount: (id: number) => void;

  /**
   * Decreases the quantity of a specific cart item.
   * @param id - The ID of the product to decrement.
   */
  decrementCartItemAmount: (id: number) => void;

  /**
   * Removes an item from the cart.
   * @param id - The ID of the product to remove.
   */
  removeFromCart: (id: number) => void;

  /** Clears all items from the cart */
  clearCart: () => void;
}

/**
 * Default values for the cart context to prevent undefined behavior before initialization.
 */
const defaultCartContextValue: CartContextInterface = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
  addToCart: () => {},
  incrementCartItemAmount: () => {},
  decrementCartItemAmount: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
};

const CartContext = createContext<CartContextInterface>(defaultCartContextValue);

export default CartContext;