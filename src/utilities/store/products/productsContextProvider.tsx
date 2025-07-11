import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductsContext from "./productsContext";
import ProductType from "../../../types/product";

/**
 * ProductsContextProvider component
 * Fetches product data from an external API on mount and
 * provides the products array to its children via React Context.
 */
const ProductsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the list of products fetched from the API
  const [products, setProducts] = useState<ProductType[]>([]);

  /**
   * Fetch products when the component mounts.
   * Uses an IIFE inside useEffect for async/await support.
   */
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          // If the response is not OK, throw an error to be caught below
          throw new Error("Error while fetching products, please try again later");
        }
        const fetchedProducts: ProductType[] = await response.json();
        // Update state with the fetched products
        setProducts(fetchedProducts);
      } catch (error: unknown) {
        // Display an error toast with a unique toastId to prevent duplicates
        if (error instanceof Error) {
          toast.error(error.message, { toastId: error.message });
        } else {
          toast.error("An unknown error occurred.", { toastId: "unknown_error" });
        }
      }
    }

    fetchProducts();
  }, []);

  // Provide the products array to all child components
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
