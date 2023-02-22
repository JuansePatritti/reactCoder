import { grid } from "@mui/system";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data)
      console.log(data);
    }
    getProducts()
  },[])

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
