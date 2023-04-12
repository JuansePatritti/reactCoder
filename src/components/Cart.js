import React, { useContext,useState } from "react";
import { CustomContext } from "./CustomContext";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";
import NewForm from "./CheckOut";
import { style } from "@mui/system";

const Cart = () => {
  const { cart, totals, removeAProd, clear } = useContext(CustomContext);
  const [isReady,setIsReady]=useState(true)
  const removal= ()=>{
    cart.map((prod)=>{
      return(
        prod.id
      )
    })
    removeAProd()
    
  }
  const endBuy = () => {
    const newCollection = collection(db, "sells");
    addDoc(newCollection, {
      comprador,
      productos: cart,
      total: totals.total,
      time: serverTimestamp(),
    }).then((result) => result.id);
  };
   const controles = () => {
  //   const archive=[]
  //   cart.forEach(element => {
  //     archive.push({element})
  //     console.log(archive);
  //     return element
  setIsReady(false)

     }
    
  
    
  // };
  // const controlStock = (el) => {
  //   const docReference = doc(db,"products",)
  //   updateDoc(docReference,{stock:stock-el.quantity})
  // };
  const comprador = {
    name: "Juanse",
    apellido: "Patritti",
    mail: "juanse-patritti@hotmail.com",
    dni: 41782932,
  };
  return (
    <div>
      {isReady ? (
      <div style={styles.all}>
        
        {cart.map((prod) => {
          return (
            <div style={styles.items} key={prod.id}>
              <div style={styles.itemss}><img style={styles.img} src={prod.image}></img>
              <h1>{prod.title}</h1>
              </div>
              <div>
              <h2>Precio: {prod.price}</h2>
              <h2>Cantidad: {prod.quantity}</h2>
              </div>
            </div>
          );
        })}
     

      <h2 style={styles.total}>Total: ${totals.total}</h2>
      <div style={styles.botones}>
        <Button onClick={clear}>Vaciar carrito</Button>
        <Button onClick={endBuy}>Finalizar Compra</Button>
        <Button onClick={controles}>asd</Button>
         </div>
        </div>) : (<div>
        <NewForm />
        </div>
        )
      
    }
    </div>
    
  );
};

const styles={
  botones:{
    display: "flex",
    gap: "1em"
  },
  all:{
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  itemss:{
    display:"flex",
    alignItems:"center"
  },
  items:{
  display:"flex",
  borderBottom:"1px solid rgba(255,255,255,.3)",
    color:"white",
    flexDirection: "column",
    justifyItems:"center",
    margin:"2em"
},
img:{
  maxWidth:"100px"
},
total:{
  color:"white"
}
}
export default Cart;
