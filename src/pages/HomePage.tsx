import { useContext, useRef } from "react";
import ProductsContext from "../utilities/store/products/productsContext";
import ProductType from "../types/product";
import Products from "../components/homePage/products";
import Header from "../components/homePage/header";
import SideBar from "../components/homePage/sideBar";
import Footer from "../components/homePage/footer";
import Hero from "../components/homePage/hero";

/**
 * HomePage Component
 * - Displays the homepage with hero, product list, and cart sidebar
 * - Filters only clothing-related products
 * - Enables scroll to products section from Hero button
 */
const HomePage: React.FC = () => {
  const products: ProductType[] = useContext(ProductsContext);

  // Filter products by clothing categories
  const filteredProducts: ProductType[] = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );

  // Reference to scroll to products section
  const productsRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to product section with offset
  const scrollToProducts = () => {
    if (productsRef.current) {
      const offset = 100;
      const top =
        productsRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col relative overflow-x-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section with CTA */}
      <Hero scrollToProducts={scrollToProducts} />

      {/* Product List */}
      <main ref={productsRef} className="container mt-20">
        <Products products={filteredProducts} />
      </main>

      {/* Sidebar Cart */}
      <SideBar />

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
