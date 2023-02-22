import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const ItemDetail = ({prod}) => {
const add=1

  return (
    <div>
        <Card  style={{ width: '18rem' }}>
           <Card.Img variant="top" src={prod.image} />
           <Card.Body style={styles.cardBody}>
             <Card.Title style={styles.letters}>{prod.title}</Card.Title>
             <Card.Text style={styles.letters}>
             Price: ${prod.price}
             <span>{prod.description}</span>
             </Card.Text>
             <Button  variant="outline-light">-</Button>{' '}
             <span style={styles.letters}>{add}</span>
             <Button variant="outline-light">+</Button>{' '}
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