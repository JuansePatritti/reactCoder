import React from "react";
import NavCategories from "./NavCategories";
import Logo from "../brand_logo.png";
import { Link } from "react-router-dom";

const Navbar=({message, children})=>{
return(
    
    <header style={styles.header}>
        <Link to={"/"}>
            <img style={styles.logo} src={Logo} alt="" />
        </Link>
        <nav style={styles.nav}>
           <NavCategories />
           {children}
        </nav>
        
    </header>
)
}
export const styles = {
    header:{
        display: "grid",
        backgroundColor: "rgb(13, 53, 98)",
        margin: "10px",
        padding: "10px 100px",
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,.3)"

    },
    nav:{
        display:"flex",
        alignItems: "center"
    },
    logo:{
        height:"70px",
    },
}
export default Navbar
