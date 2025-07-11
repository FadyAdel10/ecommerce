import { useContext } from "react";
import CartContext from "../../utilities/store/cart/cartContext";
import CartItem from "./cartItem";

function Cart(){
    const {cart} = useContext(CartContext);
    console.log(cart);
    return(
        <div className="flex flex-col gap-1 items-center h-[450px] overflow-y-auto">
            {cart.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
        </div>
    );
}

export default Cart;