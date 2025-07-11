import { useContext } from 'react';
import { FaShoppingBag , FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarContext from '../../utilities/store/sidebar/sideBarContext';
import CartContext from '../../utilities/store/cart/cartContext';

function Header() {
    const {isOpen, setIsOpen} = useContext(SideBarContext);
    const {totalAmount} = useContext(CartContext);
    return(
    <header className="fixed bg-blue-500 w-full h-16 z-40">
        <div className="container h-full flex justify-between items-center">
            <Link to="/">
                    <FaShoppingBag size={30}/> 
                   
            </Link>
            <div onClick={() => {setIsOpen(!isOpen)}} className='relative cursor-pointer'>
                    
                <FaShoppingCart size={30}/>
                <div className="absolute w-5 h-5 rounded-full bg-red-600 top-3 -right-2 text-white flex justify-center items-center">
                    {totalAmount}
                </div>
            </div>
        </div>
    </header>);
}

export default Header;