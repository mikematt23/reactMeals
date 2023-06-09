import React from "react";
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";


const Header = (props)=>{
   return (
    <React.Fragment>
      <header className={classes.header}>
      <h1>React Meals</h1>
     <HeaderCartButton onCartHandler = {props.onCartHandler}/>
      </header>
      <div className={classes.mainImage}>
        <img src={mealsImage} alt="table of food"/>
      </div>
    </React.Fragment>
   )
}


export default Header

