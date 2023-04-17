import React, {useContext} from "react"
import CartIcon from "./CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../../context/CartContext"

const HeaderCartButton = (props)=>{
  const cartContext = useContext(CartContext)
  return <React.Fragment>  
    <button className={classes.button} onClick={props.onCartHandler}>
      <span className={classes.icon}><CartIcon/></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartContext.count}</span>
    </button >
  </React.Fragment>
}

export default HeaderCartButton