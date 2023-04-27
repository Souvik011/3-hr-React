import { useContext,Fragment } from "react";
import CartContext from "../Context/cart-context";
import CandyContext from "../Context/Candy-Context";

import axios from "axios";

const Product = props => {
    const Ctx = useContext(CartContext);
    const CandyCtx = useContext(CandyContext);
    let arr = [];
    for(var i = 0 ;i<Ctx.products.length;i++){
        arr.push(Ctx.products[i]);
    }
    // const submitHandler = () => {};
    const AddHandler = async(item) => {

        
    const obj = {
        name: item.name,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
    };

    const res= await axios.post(`https://crudcrud.com/api/9cc43f052e0e4ab7ada1c04c6dc40bbd/cart`,obj);
    const data= await res.data;
    console.log(data);
    CandyCtx.addCandy(obj);
        
      };

        
        
        
        
      
    return(<Fragment>
        {arr.map(product=> {
            let li = `[${product.name}]----[${product.description}]----[ ${product.price}Rs]    `;
           return(<div key={product.id}>
            {li}
        <button onClick={()=>AddHandler({...product,quantity:1})}>Add 1</button>
        <button onClick={()=>AddHandler({...product,quantity:2})}>Add 2</button>
           </div>)
        })}
    </Fragment>);
};

export default Product;