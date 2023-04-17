import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";



function App() {

  const [showCart, setShowCart] = useState(false)
  
  const CartHandler = ()=>{
    if(showCart === true){
     return setShowCart(false)
    }
    setShowCart(true)
  }
  return (
    <div>
      {showCart ? <Cart onCartHandler={CartHandler}/>: null}
      <Header onCartHandler = {CartHandler}/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
