function CartItem(cartItem){
    console.log(cartItem)
    return(
        <div className="bg-slate-500 border-b">
            <img src={cartItem.image} alt="Loading" />
        </div>
    );
}

export default CartItem;