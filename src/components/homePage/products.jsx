import Product from "./product";

function Products({products}){

    return(
        <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 ">
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }
        </div>
    );
}

export default Products;