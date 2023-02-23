import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./logo_glitch.png.png";
import NavButton from "./components/NavButton";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <NavButton />
        </Navbar>
        <main style={styles.firstContent}>
          <div className="message" style={styles.message}>
            <h2 style={styles.title}>
              A new <span style={styles.brand}>Brand</span> is here
            </h2>
            <h3 style={styles.secondaryTitle}>Just make the difference</h3>
            <p style={styles.letters}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type including versions of Lorem
              Ipsum.
            </p>
          </div>
          <div className="logoContainer">
            <img style={styles.logo} src={Logo} alt="" />
          </div>
        </main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} /> //home
          <Route path="/category/:name" element={<ItemListContainer />} /> //cat
          <Route path="/product/:id" element={<ItemDetailContainer />}/> //prod
          <Route path="/cart" element={<Cart />} /> //cart
        </Routes>
      </BrowserRouter>
    </>
  );
};
{
  /* 
         */
}
export default App;
export const styles = {
  firstContent: {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "space-between",
    margin: "50px",
    padding: "0px 50px",
    borderBottom: "1px solid rgba(255,255,255,.3)",
  },
  message: {
    padding: "100px 0px 0px 100px",
    width: "500px",
  },
  title: {
    margin: "0px",
    fontWeight: "700",
    color: "white",
    fontSize: "42px ",
  },
  secondaryTitle: {
    margin: "0px",
    fontWeight: "700",
    color: "white",
    fontSize: "32px ",
  },
  brand: {
    color: "rgba(0,165,255,100)",
    fontSize: "40px",
    fontWeight: "700",
  },
  logo: {
    width: "500px",
    padding: "0px 100px 0px 0px",
  },
  letters: {
    color: "white",
  },
};
