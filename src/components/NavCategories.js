import React from "react";

const NavCategories = ()=>{
     const navCategories=[{id:0,name:"Home",ref:""},{id:1,name:"Products",ref:""},{id:2,name:"Catalog",ref:""},{id:3,name:"Contact us",ref:""}]
    return (
        navCategories.map(({id,name,ref})=>{
            return( 
            <a key={id} href={ref} style={styles.list}>{name}</a>)
        })

    )
};

export const styles = {
    
    list:{
        color: "white",
        margin:"1em",
        listStyleType:"none",
        textDecoration:"none",
        fontFamily:"Jost",
        fontSize:"18px"
    }
}


export default NavCategories