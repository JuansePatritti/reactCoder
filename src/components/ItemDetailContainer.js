import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const [prod,setProd]=useState({})
const {id} = useParams()
const url= id? `https://fakestoreapi.com/products/${id}`: `https://fakestoreapi.com/products`

useEffect(() => {
   let getInfo = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProd(data)
      
    }
    getInfo()
  },[])
  return (
    <>
    { <ItemDetail prod={prod} />} 
    </>
    )
}

export default ItemDetailContainer