import { grid } from "@mui/system";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {name}=useParams()
  const url= name ? `https://fakestoreapi.com/products/category/${name}` : `https://fakestoreapi.com/products` 
  
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data)
      console.log(data);
    }
    getProducts()
  },[name])

  return(
  <>
  <div style={styles.wrapper}>
    {products.length ? (
      <>
      <ItemList products={products} />
      </>
    ) : (
      <h1 style={styles.letters}>Cargando...</h1>
    )}
    </div>
  </>
)}
export const styles = {
  letters: {
    color: "white",
    justifySelf: "center",
  },
  wrapper:{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gridAutoFlow: "column",
    gap: "2em"
  }
};

export default ItemListContainer;
