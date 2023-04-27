import React from 'react'

const CandyContext=React.createContext({
    Candy:[],
    totalCandy:0,
    addCandy:(candy)=>{}
});

export default CandyContext;

