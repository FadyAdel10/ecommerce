import { useContext } from 'react';
import { FaPlus, FaEye } from 'react-icons/fa';
import CartContext from '../../utilities/store/cart/cartContext';
import { Link } from 'react-router-dom';

function Product({product}) {
    const {addToCart} = useContext(CartContext);
    return(
    <div >
        <div className="relative p-4 border-2 group justify-center items-center flex">
            <img className='w-[150px] h-[200px] object-contain group-hover:scale-110 transition-all duration-300' src={product.image} alt="Loading" />
            <div className="absolute top-2 -right-10 z-20 group-hover:right-2 bg-red-300 border  flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div onClick={() => {addToCart(product)}} className=
                'p-3 flex justify-center items-center hover:bg-red-600 cursor-pointer hover:text-white transition-all duration-300'
                >
                    <FaPlus />
                </div>
                <Link to={`/products/${product.id}`}>
                    <div className='p-3 flex justify-center items-center hover:bg-red-600 cursor-pointer hover:text-white transition-all duration-300'>
                        <FaEye />                      
                    </div>
                </Link>
            </div>
        </div>
        <div className="text-gray-500 capitalize text-md">
            {product.category}
        </div>
        <div className="font-semibold">
            {product.title}
        </div>
        <div className="font-semibold">
            $ {product.price}
        </div>
    </div>);
}

export default Product;