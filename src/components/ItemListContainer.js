import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const url = name
      ? query(productsCollection, where("category", "==", name))
      : productsCollection;
    getDocs(url).then((data) => {
      const productList = data.docs.map((prod) => {
        return { ...prod.data(), id: prod.id };
      });
      setProducts(productList);
    });
  },[name]);
  return (
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
  );
};
export const styles = {
  letters: {
    color: "white",
    justifySelf: "center",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gridAutoFlow: "column",
    gap: "2em",
  },
};

export default ItemListContainer;
