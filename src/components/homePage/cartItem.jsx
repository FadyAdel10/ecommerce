import { useContext } from "react";
import { FaTimes , FaPlus ,FaMinus  } from "react-icons/fa";
import CartContext from "../../utilities/store/cart/cartContext";

function CartItem({cartItem}){
    const { incrementCartItemAmount,decrementCartItemAmount,removeFromCart } = useContext(CartContext);
    return(
        <div className=" border-b h-200 w-full flex p-2 gap-4">
            <div>
                <img className=" w-[80px]" src={cartItem.image} alt="Loading" />
            </div>
            <div className="flex flex-col w-full gap-4">
                <div className="flex justify-between gap-4">
                    <p className="font-medium">{cartItem.title}</p>
                    <div onClick={() => {removeFromCart(cartItem.id)}} className="cursor-pointer hover:text-red-600 transition-all duration-300">
                        <FaTimes />
                    </div>
                </div>
                <div className="flex w-full justify-between items-center">
                    <div className="flex border w-[75px] px-2 py-1 justify-between items-center">
                        <FaMinus onClick={() => {decrementCartItemAmount(cartItem.id)}} className="cursor-pointer hover:text-white hover:bg-red-600 transition-all duration-300"/>
                        <p>{cartItem.amount}</p>
                        <FaPlus onClick={() => {incrementCartItemAmount(cartItem.id)}} className="cursor-pointer hover:text-white hover:bg-green-500 transition-all duration-300"/>
                    </div>
                    <p className="opacity-50">$ {cartItem.price}</p>
                    <p>$ {(cartItem.price * cartItem.amount).toFixed(2)}</p>
                </div>
            </div>
            
        </div>
    );
}

export default CartItem;