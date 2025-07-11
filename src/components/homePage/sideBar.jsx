import { useContext } from "react";
import SideBarContext from "../../utilities/store/sidebar/sideBarContext";
import { FaArrowRight,FaTrash } from "react-icons/fa";
import Cart from "./cart";
import CartContext from "../../utilities/store/cart/cartContext";

function SideBar(){
    const {isOpen,handleCloseSideBar} = useContext(SideBarContext);
    const {totalAmount,totalPrice,clearCart} = useContext(CartContext);
    return(
        <aside className={`fixed w-[80vw] z-50 sm:w-[400px] xl:w-[500px]  shadow-2xl overflow-x-hidden bg-white h-full top-0 ${isOpen? 'right-0':'-right-full'} transition-all duration-300 px-4 md:px-8 `}>
            <div className="flex justify-between my-2 py-3 items-center border-b">
                <p className="uppercase font-semibold">
                    Shopping bag({totalAmount})
                </p>
                <div onClick={handleCloseSideBar} className="cursor-pointer">
                    <FaArrowRight />
                </div>
            </div>
            {/* Cart */}
            <Cart />
            {/* Total price and clear cart */}
            <div className="w-full flex justify-between">
                <p className="font-semibold">Total: $ {totalPrice}</p>
                <div onClick={clearCart} className="text-white bg-red-600 p-2 rounded-md cursor-pointer ">
                    <FaTrash />
                </div>
            </div>
            <button className="bg-gray-400 w-full text-center py-3 cursor-pointer">
                Veiw cart
            </button>
            <button className="bg-black w-full text-center text-white py-3 cursor-pointer">
                Checkout
            </button>
        </aside>
    );
}

export default SideBar;