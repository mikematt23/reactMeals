import React, {useState, useContext} from "react"
import classes from "./Meal.module.css"
import MealForm from "./MealForm"
import CartContext from "../../../context/CartContext"

const Meal = (props)=>{
  const cartContext = useContext(CartContext) 
  const [quantity,setQuantity] = useState(1)
  const price = `$${props.price.toFixed(2)}`
  const ID = props.id
  const quantityNumber = parseFloat(quantity)
  const priceNumber = parseFloat(price.split("$").pop())
  

  const handleQuantity =(updated)=>{
    setQuantity(updated)
  }
  const onSubmit =()=>{
    cartContext.onSetTotal(priceNumber*quantityNumber)
    cartContext.onSetCartCount(quantityNumber)
    cartContext.onAddItem({name:props.name,price:priceNumber*quantityNumber,quantity:quantity,id:ID})
  }

  return(
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
     <div>
      <MealForm id = {props.id} onSetQuantity = {handleQuantity} onSubmit={onSubmit}/>
     </div>
    </li>
  )
}


export default Meal