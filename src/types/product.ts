/**
 * Represents the rating details of a product.
 */
export interface Rating {
  rate: number;
  count: number;
}

/**
 * Represents a product item in the catalog.
 */
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export default Product;