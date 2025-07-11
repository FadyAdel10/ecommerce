import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import ProductsContext from "./productsContext";

const ProductsContextProvider = ({children}) => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                if(!response.ok){
                    throw new Error("Error wile fetching products, please try again later");
                }
                const fetchedProducts = await response.json();
                setProducts(fetchedProducts);
            }
            catch(error){
                toast.error(error.message(),{toastId:error.message});
            }
        }
        fetchProducts();
    },[])
    return (<ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>);
}

export default ProductsContextProvider;