import { createContext } from "react";
import ProductType from "../../../types/product";

/**
 * Default value for the ProductsContext.
 * Initially an empty array of ProductType.
 */
const defaultProductsvalue: ProductType[] = [];

/**
 * ProductsContext is a React context that holds an array of products.
 * It can be used across the application to access product data.
 */
const ProductsContext = createContext<ProductType[]>(defaultProductsvalue);

export default ProductsContext;
