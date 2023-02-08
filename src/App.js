import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./logo_glitch.png.png";
import NavButton from "./components/NavButton";
import ItemListContainer from "./components/ItemListContainer";


const App = () => {
  const greeting="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  including versions of Lorem Ipsum."
  return (
    <>
      <Navbar  id="0">
        <NavButton />
      </Navbar>
      <main style={styles.firstContent}>
        <div className="message" style={styles.message}>
          <h2 style={styles.title}>
            A new <span style={styles.brand}>Brand</span> is here
          </h2>
          <h3 style={styles.title}>Just make the difference</h3>
          <p style={styles.letters}></p>
          <ItemListContainer greetings={greeting} />
        </div>
        <div className="logoContainer">
          <img style={styles.logo} src={Logo} alt="" />
        </div>
      </main>
      
    </>
  );
};

export default App;
export const styles = {
  firstContent: {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "space-between",
    margin: "50px",
    padding: "0px 50px"
  },
  message: {
    padding: "100px 0px 0px 100px",
    width:"500px",
  },
  title: {
    margin: "0px",

    color: "white",
    fontSize: "42px",
  },
  brand: {
    color: "rgba(0,165,255,100)",
    fontSize: "50px",
  },
  logo: {
    width: "500px",
    padding:"0px 100px 0px 0px",
    

  },
  letters:{
    color:"white"
  },
};
