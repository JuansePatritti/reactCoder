import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDoc, collection, query, where, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
const [prod,setProd]=useState({})
const {id} = useParams()

useEffect(() => {
  const productsCollection= collection(db, "products")
  const refDoc=doc(productsCollection,id)
  getDoc(refDoc).then(
    (data)=>{
      setProd({
        id:data.id,
        ...data.data(),
      });
    }
  )

  //  let getInfo = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProd(data)
      
  //   }
  //   getInfo()
  },[])
  return (
    <>
    { <ItemDetail prod={prod} />} 
    </>
    )
}

export default ItemDetailContainer