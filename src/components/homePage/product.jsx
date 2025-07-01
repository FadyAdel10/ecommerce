import { useContext } from 'react';
import { FaPlus, FaEye } from 'react-icons/fa';
import CartContext from '../../utilities/store/cart/cartContext';

function Product({product}) {
    const {addToCart} = useContext(CartContext);
    return(
    <div className="">
        <div className="relative w-[200px]  p-4 border-2 group">
            <div className="group-hover:scale-110 transition-all duration-300">
                <img src={product.image} alt="Loading" />
            </div>
            <div className="absolute cursor-pointer top-2 -right-full group-hover:right-2 bg-red-300 border w-10 h-16 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div onClick={() => {addToCart(product)}} className='w-full flex-1 flex justify-center items-center hover:bg-red-600 hover:text-white transition-all duration-300'>
                    <FaPlus />
                </div>
                <div className='w-full flex-1 flex justify-center items-center hover:bg-red-600 hover:text-white transition-all duration-300'>
                    <FaEye />                    
                </div>
                
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