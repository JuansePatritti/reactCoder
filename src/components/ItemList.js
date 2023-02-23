import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

  const ItemList = ({products}) => { 
  return (
   
    <>
    
        {products.map((prod) => (
          <div key={prod.id} style={styles.elements}>
           <Card  style={{ width: '18rem' }}>
           <Card.Img variant="top" src={prod.image} />
           <Card.Body style={styles.cardBody}>
             <Card.Title style={styles.letters}>{prod.title}</Card.Title>
             <Card.Text style={styles.letters}>
             Price: ${prod.price}
             <Link to={`/product/${prod.id}`}>See details</Link>
             </Card.Text>
             <Button variant="outline-light">Add to cart</Button>{' '}
           </Card.Body>
         </Card>
         </div>

        ))}
    </>
  );
};
export default ItemList;

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
