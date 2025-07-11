import Header from "../components/homePage/header";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/productDetailsPage/productDetails";
import SideBar from "../components/homePage/sideBar";
import { useContext } from "react";
import ProductsContext from "../utilities/store/products/productsContext";
import LoadingIcon from "../assets/spinner_loader_black.svg";

function ProductDetailsPage(){
    const { id } = useParams();
    const products = useContext(ProductsContext);
    const requiredProduct = products.find((product) => product.id === Number(id));
    let content;
    if(!requiredProduct){
        content = <div className="flex justify-center h-[73vh] items-center">
                    <img src={LoadingIcon} className="w-24 sm:w-48" alt="loading spinner" />
                  </div>
    }
    else {
        content = <ProductDetails product={requiredProduct}/>
    }
    return(
    <div>
        <Header />
        <SideBar />
        {content}
    </div>
);
}

export default ProductDetailsPage;