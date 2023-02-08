import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavButton = (prop) => {
  let a=3
  return (
    <a style={styles.buttonDisplay} href="">
      <ShoppingCartIcon style={styles.color}
      sx={{ fontSize: 23}}
       /> {a}
      </a>
  )
}


export const styles={
    logo:{
        borderRadius:"10px"
    },
    color:{
      color:"white"
    },
    buttonDisplay:{
      display:"flex",
      color:"white",
      textDecoration:"none"
    }
}
export default NavButton