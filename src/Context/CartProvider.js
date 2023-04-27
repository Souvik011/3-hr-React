import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [product, setProduct] = useState([]);

  const addItemHandler = (item) => {
    console.log(item);
    setProduct(product.concat(item));
  };

 
  const Cart = { products: product, addItem: addItemHandler };

  return (
    <CartContext.Provider value={Cart}> {props.children} </CartContext.Provider>
  );
};

export default CartProvider;
