import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const NavButton = (prop) => {
  let a=3
  return (
    <Link style={styles.buttonDisplay} to="/cart">
      <ShoppingCartIcon style={styles.color}
      sx={{ fontSize: 23}}
       /> {a}
      </Link>
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