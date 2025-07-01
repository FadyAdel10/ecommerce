import { useContext } from "react";
import ProductsContext from "../utilities/store/products/productsContext";
import Products from "../components/homePage/products";
import Header from "../components/homePage/header";
import SideBar from "../components/homePage/sideBar";

function HomePage() {
    const products = useContext(ProductsContext);
    const filteredProducts = products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing");
    console.log('use3');
    return(
        <div className="flex flex-col relative gap-5 overflow-x-hidden">
            <Header />
            <main className="container">
                <Products products={filteredProducts} />
            </main>
            <SideBar />
        </div>
    );
}

export default HomePage;