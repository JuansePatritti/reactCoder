import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart]=useState([{name:"manzana"},{name:"pera"}])

  const addToCart=(prod,q)=>{
    console.log(prod)
    console.log(q)
  }
  const removeAProd=(id)=>{
    console.log("esto elimina un prod");
  }
  const isInCart=(id)=>{
    console.log("chequea si esta en el carro");
  }
  const clear=()=>{
    setCart([])
  }
  return <>
  <CustomContext.Provider value={{clear,addToCart,removeAProd}}>
  {children}
  </CustomContext.Provider>
  </>;
};
