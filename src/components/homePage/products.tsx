import React from "react";
import Product from "./product";
import ProductType from "../../types/product";

interface ProductsProps {
  products: ProductType[];
}

/**
 * Products Grid Component
 * Renders a responsive grid of Product cards.
 * Adjusts number of columns based on screen size.
 */
const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
