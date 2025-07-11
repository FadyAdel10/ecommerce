import ProductType from "./product";

/**
 * Represents an item in the cart, extending product with an amount.
 */

export default interface CartItemType extends ProductType{
    amount: number,
}
