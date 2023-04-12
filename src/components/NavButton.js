import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CustomContext } from './CustomContext';


const NavButton = () => {
  const { totals } = useContext(CustomContext);
  return (
    <Link style={styles.buttonDisplay} to="/cart">
      <ShoppingCartIcon style={styles.color}
      sx={{ fontSize: 23}}
       /> {totals.qty > 0 && <p>{totals.qty}</p>}
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