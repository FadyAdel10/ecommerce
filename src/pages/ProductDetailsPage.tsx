import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../utilities/store/products/productsContext";
import LoadingIcon from "../assets/spinner_loader_black.svg";
import ProductType from "../types/product";
import Header from "../components/homePage/header";
import ProductDetails from "../components/productDetailsPage/productDetails";
import SideBar from "../components/homePage/sideBar";

/**
 * ProductDetailsPage Component
 * - Renders product detail view based on route param `id`
 * - Displays loading spinner if product is not found
 */
const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const products: ProductType[] = useContext(ProductsContext);

  // Find the product by ID from the context
  const requiredProduct: ProductType | undefined = products.find(
    (product) => product.id === Number(id)
  );

  return (
    <div>
      <Header />
      <SideBar />

      {/* Product content or loading spinner */}
      {!requiredProduct ? (
        <div className="flex justify-center h-[73vh] items-center">
          <img
            src={LoadingIcon}
            className="w-24 sm:w-48"
            alt="Loading spinner"
          />
        </div>
      ) : (
        <ProductDetails product={requiredProduct} />
      )}
    </div>
  );
};

export default ProductDetailsPage;
