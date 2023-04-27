import { useReducer } from "react";
import CandyContext from "./Candy-Context";

const defaultState = {
    candy:[],
    totalCandy:0
    
};

const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        
        let updatedCandyArr = state.candy.concat(action.value);
        let updatedNumber = state.totalCandy + action.value.quantity;


        return({
            candy:updatedCandyArr,
            totalCandy:updatedNumber
            
        })

    }
}

const CandyProvider = props => {
const [state,dispatchFn] = useReducer(cartReducer,defaultState);

const addCandyHandler = (candy) => {
    dispatchFn({
      type: "ADD",
      value: candy
    });
    
  };


    const Cart ={
        Candy:state.candy,
        totalCandy:0,
        addCandy:addCandyHandler
    };
    return (
        <CandyContext.Provider value={Cart}> {props.children} </CandyContext.Provider>
      );
};

export default CandyProvider;