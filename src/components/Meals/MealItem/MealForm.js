import classes from './MealForm.module.css'
import Input from "../../UI/Input"
import Button from "../../UI/Button"
import { useState } from 'react'

const MealForm = (props)=>{
  const [quantity,setQuantity] = useState(1)

  const update = (event)=>{
    setQuantity(event.target.value)
    props.onSetQuantity(event.target.value)
  }

  return(
    <form className = {classes.form}>
        <Input type="number" value ={quantity} label ="Amount" onChange = {update}/>
        <Button onClick ={props.onSubmit} className = {classes.Button}>Add</Button>
    </form>
  )
}

export default MealForm