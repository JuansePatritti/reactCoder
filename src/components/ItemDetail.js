import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const ItemDetail = ({prod}) => {
const stock=5
const [quantity, setQuantity]=useState(0)
const addProd = ()=>{
if (quantity<stock) {
    setQuantity(quantity+1)
}
    
}
const removeProd = ()=>{
    if (quantity>0) {
        setQuantity(quantity-1)
    }
        
    }
  return (
    <div style={styles.elements}>
        <Card  style={{ width: '18rem' }}>
           <Card.Img variant="top" src={prod.image} />
           <Card.Body style={styles.cardBody}>
             <Card.Title style={styles.letters}>{prod.title}</Card.Title>
             <Card.Text style={styles.letters}>
             Price: ${prod.price}
             <span>{prod.description}</span>
             </Card.Text>
             <Button onClick={removeProd} variant="outline-light">-</Button>{' '}
             <span style={styles.letters}>{quantity}</span>
             <Button onClick={addProd} variant="outline-light">+</Button>{' '}
           </Card.Body>
         </Card>
    </div>
  )
}
export const styles={
    elements:{
      width: "30%",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
    },
    cardBody:{
      backgroundColor: "rgb(13, 53, 98)"
    },
    h4:{
        color: "white"
    },
      letters: {
        color: "white",
        margin:"0"
        
      },
      prodImg:{
        width:"40%"
      }
    };


export default ItemDetail