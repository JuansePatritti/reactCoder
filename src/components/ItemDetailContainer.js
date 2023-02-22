import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const [prod,setProd]=useState({})
useEffect(() => {
   let getInfo = async () => {
      const res = await fetch("https://fakestoreapi.com/products/1");
      const data = await res.json();
      setProd(data)
      console.log(data);
    }
    getInfo()
  },[])
  return (
    <>
    { <ItemDetail prod={prod} />} 
    <h4>Hola</h4>
    </>
    )
}

export default ItemDetailContainer