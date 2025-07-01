import { useContext } from "react";
import SideBarContext from "../../utilities/store/sidebar/sideBarContext";
import { FaArrowRight,FaTrash } from "react-icons/fa";
import Cart from "./cart";

function SideBar(){
    const {isOpen,handleCloseSideBar} = useContext(SideBarContext);

    return(
        <aside className={`absolute w-70vw z-30 sm:w-[400px] shadow-2xl bg-white h-full top-0 ${isOpen? 'right-0':'-right-full'} transition-all duration-300 px-4 md:px-6 flex flex-col gap-4`}>
            <div className="flex justify-between my-4 items-center border-b">
                <p className="uppercase font-semibold">
                    Shopping bag(0)
                </p>
                <div onClick={handleCloseSideBar} className="cursor-pointer">
                    <FaArrowRight />
                </div>
            </div>
            {/* Cart */}
            <Cart />
            {/* Total price and clear cart */}
            <div className="w-full flex justify-between">
                <p className="font-semibold">Total: $ 0</p>
                <div className="text-white bg-red-600 p-2 rounded-md cursor-pointer ">
                    <FaTrash />
                </div>
            </div>
            <div className="bg-gray-500 w-full text-center py-2 cursor-pointer">
                Veiw cart
            </div>
            <div className="bg-black w-full text-center text-white py-2 cursor-pointer">
                Checkout
            </div>
        </aside>
    );
}

export default SideBar;