import React from 'react'

const CartContext=React.createContext({
    products:[],
    addItem: (item) => {}
})

export default CartContext