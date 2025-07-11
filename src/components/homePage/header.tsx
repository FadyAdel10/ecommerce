import { useContext } from 'react';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarContext from '../../utilities/store/sidebar/sideBarContext';
import CartContext from '../../utilities/store/cart/cartContext';

/**
 * Header Component
 * Displays the logo and cart icon with item count badge.
 * Clicking the cart icon toggles the sidebar.
 */
const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { totalAmount } = useContext(CartContext);

  return (
    <header className="fixed bg-blue-500 w-full h-16 z-40">
      <div className="container h-full flex justify-between items-center">
        
        {/* Logo linking to homepage */}
        <Link to="/" title="Home">
          <FaShoppingBag size={30} />
        </Link>

        {/* Cart Icon with total item count badge */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative cursor-pointer"
          title="Open Cart"
        >
          <FaShoppingCart size={30} />
          
          {/* Cart Item Count */}
          <div className="absolute w-5 h-5 rounded-full bg-red-600 top-3 -right-2 text-white flex justify-center items-center text-xs">
            {totalAmount}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
