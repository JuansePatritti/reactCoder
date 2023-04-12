import React, { useContext,useState } from "react";
import { CustomContext } from "./CustomContext";
import { Toast } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";



const Cart = () => {
  
  const { cart, totals,  clear } = useContext(CustomContext);
  const [isReady,setIsReady]=useState(true)

  const PaymentSuccess = ({Id}) => {
    const [show, setShow] = useState(true);
  
    return (
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={5000}
        autohide
        style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, 0)',
          minWidth: '250px',
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Pago exitoso</strong>
        </Toast.Header>
        <Toast.Body>¡Tu pago se ha realizado con éxito! ID de la operación: {Id}</Toast.Body>
      </Toast>
    );
  }

  const endBuy = () => {
    const newCollection = collection(db, "sells");
    addDoc(newCollection, {
      comprador,
      productos: cart,
      total: totals.total,
      time: serverTimestamp(),
    }).then((result)=> result.id)
    console.log(db);
  
    //PaymentSuccess(asd)
  };
   const continueBuy = () => {
  //   const archive=[]
  //   cart.forEach(element => {
  //     archive.push({element})
  //     console.log(archive);
  //     return element
  setIsReady(false)
  console.log();

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
        <Button onClick={continueBuy}>Continuar Compra</Button>

         </div>
        </div>) : (<div>
          
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="email" placeholder="Nombre" />
        <Form.Text className="text-muted" id="namee" >
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="email" placeholder="Direccion" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button onClick={endBuy} variant="primary">
        Finalizar Compra
      </Button>
    </Form>
  

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
