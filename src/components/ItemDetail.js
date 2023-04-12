import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CustomContext } from "./CustomContext";

const ItemDetail = ({ prod }) => {
  const stock = 5;
  const [quantity, setQuantity] = useState(0);
  const [isPressedButton, setIsPressedButton]= useState(false)
  const {addToCart}= useContext(CustomContext)
 
  const addProd = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const addAProductToCart=()=>{
      addToCart(prod,quantity)
      setIsPressedButton(true)
      console.log(prod, quantity);

    }
  const removeProd = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    
  };
  return (
     <div style={styles.elements}>
           {isPressedButton? (
            <div>
             <Card style={{ width: "18rem" }}>
             <Card.Img variant="top" src={prod.image} />
             <Card.Body style={styles.cardBody}>
               <Card.Title style={styles.letters}>{prod.title}</Card.Title>
               <Card.Text style={styles.letters}>
                 Price: ${prod.price}
                 <span>{prod.description}</span>
               </Card.Text>
               </Card.Body>
               </Card>

            <Link to="/cart">
            <Button  variant="outline-light">
              Ver Carrito
            </Button>{" "}
            </Link>
            <Link to={"/"}>
            <Button  variant="outline-light">
              Seguir comprando
            </Button>{" "}
            </Link>
            </div>
          ):(
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body style={styles.cardBody}>
          <Card.Title style={styles.letters}>{prod.title}</Card.Title>
          <Card.Text style={styles.letters}>
            Price: ${prod.price}
            <span>{prod.description}</span>
          </Card.Text>
     
        
          <div style={styles.cardButtons}>
            <Button onClick={removeProd} variant="outline-light">
              -
            </Button>{" "}
            <span style={styles.letters}>{quantity}</span>
            <Button onClick={addProd} variant="outline-light">
              +
            </Button>{" "}
          </div>
          <div style={styles.cardAddProduct}>
            <Button onClick={addAProductToCart}variant="outline-light">Add to cart</Button>{" "}
          </div>
        </Card.Body>
      </Card>)}
    </div>
  );
};
export const styles = {
  elements: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  cardBody: {
    backgroundColor: "rgb(13, 53, 98)",
  },
  cardButtons: {
    display: "flex",
    alignItems: "center",
    gap: "1em",
    marginTop: "1em",
    justifyContent: "center",
  },
  cardAddProduct: {
    display:"flex",
    justifyContent: "center",
    marginTop:"1em"
  },
  h4: {
    color: "white",
  },
  letters: {
    color: "white",
    margin: "0",
  },
  prodImg: {
    width: "40%",
  },
};

export default ItemDetail;
