import { useContext } from 'react';
import { FaPlus, FaEye } from 'react-icons/fa';
import CartContext from '../../utilities/store/cart/cartContext';
import { Link } from 'react-router-dom';
import ProductType from '../../types/product';

interface ProductProps {
  product: ProductType;
}

/**
 * Single Product Card Component
 * Displays the product image, title, category, price, and quick actions (Add to Cart, View Details).
 * Hover reveals action buttons in the top-right.
 */
const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Image Container with Hover Actions */}
      <div className="relative group flex justify-center items-center">
        <img
          className="w-[150px] h-[200px] object-contain group-hover:scale-110 transition-transform duration-300"
          src={product.image}
          alt={product.title}
        />

        {/* Hover Action Buttons */}
        <div className="absolute top-2 -right-10 z-20 group-hover:right-2 bg-red-300 border rounded-md flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          
          {/* Add to Cart Button */}
          <div
            onClick={() => addToCart(product)}
            className="p-3 flex justify-center items-center hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300"
            title="Add to Cart"
          >
            <FaPlus />
          </div>

          {/* View Details Link */}
          <Link to={`/products/${product.id}`} title="View Details">
            <div className="p-3 flex justify-center items-center hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300">
              <FaEye />
            </div>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <p className="text-gray-500 capitalize text-sm">{product.category}</p>
        <h3 className="font-semibold text-md line-clamp-1">{product.title}</h3>
        <p className="font-semibold text-blue-700 mt-1">$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
