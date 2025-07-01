import { useContext, useState } from "react"
import CartContext from "./cartContext";
import ProductsContext from "../products/productsContext";
import CartItem from "../../../components/homePage/cartItem";

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const products = useContext(ProductsContext);
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
        newCart = [...cart,{...product,amount:1}];
        setCart(newCart);
    }
    
    return (
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;