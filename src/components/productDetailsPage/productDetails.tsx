import React, { useContext } from "react";
import CartContext from "../../utilities/store/cart/cartContext";
import ProductType from "../../types/product";

interface ProductDetailsProps {
  product: ProductType;
}

/**
 * ProductDetails Component
 * Displays detailed view of a selected product including image, title, price, description,
 * and an "Add to Cart" button to add the item to the shopping cart.
 */
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="container flex flex-col md:flex-row md:gap-12 gap-3 h-screen py-56">
        {/* Product Image */}
        <div className="flex mx-auto md:block">
          <img className="max-w-[200px]" src={product.image} alt={product.title} />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-3">
          <p className="font-medium text-[22px] md:text-[30px]">
            {product.title}
          </p>
          <p className="text-[22px] font-medium text-red-600">
            $ {product.price}
          </p>
          <p className="text-gray-500">
            {product.description}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white text-center w-[150px] py-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
