import { useContext } from 'react';
import { FaShoppingBag , FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarContext from '../../utilities/store/sidebar/sideBarContext';

function Header() {
    const {isOpen, setIsOpen} = useContext(SideBarContext);
    return(
    <header className="fixed bg-blue-500 w-full h-16 z-20 ">
        <div className="container h-full flex justify-between items-center">
            <Link to="/">
                <FaShoppingBag size={30}/>    
            </Link>
            <div onClick={() => {setIsOpen(!isOpen)}} className='cursor-pointer'>
                <FaShoppingCart size={30}/>
            </div>
        </div>
    </header>);
}

export default Header;