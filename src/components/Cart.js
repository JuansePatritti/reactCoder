import React, { useContext, useState } from "react";
import { CustomContext } from "./CustomContext";
import { Toast } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, totals, removal, clear } = useContext(CustomContext);
  const [isReady, setIsReady] = useState(true);
  const [docId, setDocId] = useState("");
  const [compradorData, setCompradorData] = useState({
    name: "",
    direccion: "",
    mail: "",
  });

  const handleChange = (e) => {
    setCompradorData({
      ...compradorData,
      [e.target.name]: e.target.value,
    });
  };

const endBuy = () => {
  const newCollection = collection(db, "sells");
  addDoc(newCollection, {
    comprador: compradorData,
    productos: cart,
    total: totals.total,
    time: serverTimestamp(),
  }).then((docRef) => {
    setDocId(docRef.id);
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Gracias por tu compra",
        text: `Este es el ID del seguimiento de tu producto: ${docRef.id}`,
      }).then(() => {
        window.location.reload();
      });
    }, 1000);
  });
};
  const continueBuy = () => {
    setIsReady(false);
  };

  return (
    <div>
      {isReady ? (
        <div style={styles.all}>
          {cart.map((prod) => {
            return (
              <div style={styles.items} key={prod.id}>
                <div style={styles.itemss}>
                  <img style={styles.img} src={prod.image}></img>
                  <h1>{prod.title}</h1>
                </div>
                <div>
                  <h2>Precio: {prod.price}</h2>
                  <h2>Cantidad: {prod.quantity}</h2>
                  <Button onClick={() => removal(prod.id)}>Quitar producto</Button>
                </div>
              </div>
            );
          })}

          <h2 style={styles.total}>Total: ${totals.total}</h2>
          <div style={styles.botones}>
            <Button onClick={clear}>Vaciar carrito</Button>
            <Button onClick={continueBuy}>Continuar Compra</Button>
          </div>
        </div>
      ) : (
        <div>
          <Form style={styles.total}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
                value={compradorData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="direccion">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Direccion"
                name="direccion"
                onChange={handleChange}
                value={compradorData.direccion}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mail">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Mail"
                name="mail"
                onChange={handleChange}
                value={compradorData.mail}
              />
            </Form.Group>

            <Button onClick={endBuy} variant="primary">
              Finalizar Compra
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

const styles = {
  botones: {
    display: "flex",
    gap: "1em",
  },
  all: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  itemss: {
    display: "flex",
    alignItems: "center",
  },
  items: {
    display: "flex",
    borderBottom: "1px solid rgba(255,255,255,.3)",
    color: "white",
    flexDirection: "column",
    justifyItems: "center",
    margin: "2em",
  },
  img: {
    maxWidth: "100px",
  },
  total: {
    color: "white",
  },
};
export default Cart;
