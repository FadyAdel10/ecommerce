import { useContext, useRef } from "react";
import ProductsContext from "../utilities/store/products/productsContext";
import Products from "../components/homePage/products";
import Header from "../components/homePage/header";
import SideBar from "../components/homePage/sideBar";
import Footer from "../components/homePage/footer";
import Hero from "../components/homePage/hero";

function HomePage() {
    const products = useContext(ProductsContext);
    const filteredProducts = products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing");
    const productsRef = useRef();
    const scrollToProducts = () => {
    if (productsRef.current) {
      const offset = 100; // offset above the section
      const top = productsRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
    return(
        <div className="flex flex-col relative overflow-x-hidden">
            <Header />
            <Hero scrollToProducts={scrollToProducts}/>
            <main ref={productsRef} className="container mt-20">
                <Products products={filteredProducts} />
            </main>
            <SideBar />
            <div className="mt-8">
                <Footer />
            </div>
            
        </div>
    );
}

export default HomePage;