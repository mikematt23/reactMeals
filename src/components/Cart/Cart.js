import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import classes from "./Cart.module.css" 
import Modal from "./Modal"
import Input from "../UI/Input"

const Cart =  (props)=>{
  const [quantity,setQuantity] = useState(false)
  
  const update = (event)=>{
    setQuantity(event.target.value)
  }

  
  const clickHAndler = (event)=>{
    if(!quantity){
      return console.log("no value new enter")
    }
    cartContext.updateCartTotal(event.target.id,quantity)
  }

  const onDelete = (event)=>{
     cartContext.removeItem(event.target.id)
  }

  const cartContext = useContext(CartContext)

  const cartItems = <ul className={classes['cart-itmes']}>{cartContext.meals.map((item)=>{
    return <li key={item.id}>
      <div  className={classes.cartItemHolder}>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <div>
          <p>Quantity:{item.quantity} Total: {item.quantity*item.price}</p>
          <Input type="number" placeholder={item.quantity}  label ="Update" onChange = {update}/>
        </div>
        <button className={classes.update} id={item.id} onClick={clickHAndler} >Update</button>
        <button className={classes.button} id={item.id} onClick={onDelete}>Delete</button>
      </div>
    </li>
  })}</ul>

  return <Modal onCartHandler = {props.onCartHandler}>
            {cartItems}
            <div className={classes.total}>
              <span>Amount</span>
              <span>${cartContext.total.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
              <button className={classes['button--alt']} onClick={props.onCartHandler} >Close</button>
              <button className={classes.button}>Order</button>
            </div>
          </Modal>
        }

export default Cart