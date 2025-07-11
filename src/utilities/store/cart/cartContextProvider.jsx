import { useContext, useEffect, useState } from "react"
import CartContext from "./cartContext";
import ProductsContext from "../products/productsContext";
import CartItem from "../../../components/homePage/cartItem";

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalAmount = cart.reduce((acc,curr) => acc+curr.amount,0);
        const newTotalPrice = cart.reduce((acc,curr) => acc+(curr.amount * curr.price),0);
        setTotalAmount(newTotalAmount);
        setTotalPrice(Number(newTotalPrice.toFixed(2)));
    },[cart]);

    function addToCart(product) {
        console.log('product',product)
        const matchedProduct = cart.find((carItem) => carItem.id === product.id);
        let newCart;
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
    function removeFromCart(id){
        const newCart = cart.filter((element) => element.id !== id);
        setCart(newCart);
    }
    function incrementCartItemAmount(id){
        const matchedCartItem = cart.find((element) => element.id === id);
        addToCart(matchedCartItem);
    }
    function decrementCartItemAmount(id){
        const matchedItem = cart.find((element) => element.id === id);
        let newCart;
        if(matchedItem.amount <2){
            removeFromCart(id);
        }
        else{
            newCart = cart.map((element) => {
            if(element.id === id){
                return {...element,amount: element.amount -1};
            }
            return element;
        })
        }
        setCart(newCart);
    }
    function clearCart(){
        setCart([]);
    }
    return (
        <CartContext.Provider value={{cart,totalAmount,totalPrice,addToCart,incrementCartItemAmount,decrementCartItemAmount,removeFromCart,
        clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;