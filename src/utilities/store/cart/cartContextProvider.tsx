import { useEffect, useState } from "react"
import CartContext from "./cartContext";
import CartItemType from "../../../types/cartItem";
import ProductType from "../../../types/product";

/**
 * CartContextProvider component that supplies cart-related state and functions
 * to all child components via React Context API.
 */
const CartContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    // Holds the list of cart items
    const [cart,setCart] = useState<CartItemType[]>([]);

    // Stores the total quantity of all items in the cart
    const [totalAmount, setTotalAmount] = useState<number>(0);

    // Stores the total price of all items in the cart
    const [totalPrice, setTotalPrice] = useState<number>(0);

    /**
     * Calculates total item amount and total price
     * whenever the cart state changes.
     */
    useEffect(() => {
        const newTotalAmount:number = cart.reduce((acc,curr) => acc+curr.amount,0);
        const newTotalPrice:number = cart.reduce((acc,curr) => acc+(curr.amount * curr.price),0);
        setTotalAmount(newTotalAmount);
        setTotalPrice(Number(newTotalPrice.toFixed(2)));
    },[cart]);

    /**
     * Adds a product to the cart.
     * If it already exists, increments the amount.
     */
    function addToCart(product: ProductType) {
        const matchedProduct: CartItemType | undefined = cart.find((carItem) => carItem.id === product.id);
        let newCart: CartItemType[];
        if(matchedProduct){
            newCart = cart.map((cartItem) => {
                if(cartItem.id === product.id){
                    return {...cartItem,amount: cartItem.amount+1};
                }
                return cartItem;
            })
        }
        else{
            newCart = [...cart,{...product,amount:1}];
        }
        setCart(newCart);
    }

    /**
     * Removes a specific item from the cart based on its ID.
     */
    function removeFromCart(id: number){
        const newCart: CartItemType[] = cart.filter((element) => element.id !== id);
        setCart(newCart);
    }

    /**
     * Increments the quantity of a cart item by its ID.
     */
    function incrementCartItemAmount(id: number){
        const matchedCartItem: CartItemType = cart.find((element) => element.id === id)!;
        addToCart(matchedCartItem);
    }

    /**
     * Decrements the quantity of a cart item.
     * If amount becomes less than 1, removes it from the cart.
     */
    function decrementCartItemAmount(id: number){
        const matchedItem: CartItemType = cart.find((element) => element.id === id)!;
        if(matchedItem.amount <2){
            removeFromCart(id);
        }
        else{
            let newCart: CartItemType[];
            newCart = cart.map((element) => {
            if(element.id === id){
                return {...element,amount: element.amount -1};
            }
            return element;
        })
        setCart(newCart);
        }
    }

    /**
     * Empties the entire cart.
     */
    function clearCart(){
        setCart([]);
    }

    // Provide context value to children
    return (
        <CartContext.Provider value={{cart,totalAmount,totalPrice,addToCart,incrementCartItemAmount,decrementCartItemAmount,removeFromCart,
        clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
