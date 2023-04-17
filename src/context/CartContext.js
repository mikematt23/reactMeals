import React,{useState, useEffect} from 'react'

const CartContext = React.createContext({
  cartCount :0,
  onAddItem : ()=>{},
  onRemoveItem: ()=>{},
  meals:[],
  total:0
})

export const CartContextProvider = (props)=>{
  const [cartItems, setCartItems] = useState([])
  const [total,setTotal] = useState(0)
  const [count,setCount] =useState(0)
 
  const onSetTotal = (price)=>{
      setTotal((prev)=>{
        const amount = price + prev
        return amount
      })
  }
  const updateCartTotal = (id, quantity)=>{
    setTotal(0)
    setCount(0)
    cartItems.forEach((item)=>{    
      if(item.id === id){
        item.quantity = quantity
      }
      onSetTotal(item.price*item.quantity)
      onSetCartCount(parseInt(item.quantity))
    })
  }

  const onSetCartCount = (quantity)=>{
    setCount((prev)=>{
      return quantity + prev
    })
  }

  const addItem = (item)=>{
    let inCart =false
    cartItems.forEach((cartItem)=>{
      if(item.id === cartItem.id){
        inCart =true
        cartItem.quantity = cartItem.quantity + parseInt(item.quantity)
      }
    })
    if(!inCart){
      setCartItems((prevState )=>{
        return [item,...prevState]
      })
    }
   
  }

  const removeItem = (id)=>{
    const newCartItems = cartItems.filter((cartItem)=>{
      if(cartItem.id != id){
        return cartItem
      }
    })
    setTotal(0)
    setCount(0)
    newCartItems.forEach((cartItem)=>{
      onSetTotal(cartItem.price*cartItem.quantity)
      onSetCartCount(parseInt(cartItem.quantity))
    })
    setCartItems(newCartItems)
  }

  return (
    <CartContext.Provider value={{removeItem:removeItem ,onAddItem: addItem, count: count, meals:cartItems, total: total,onSetTotal:onSetTotal, onSetCartCount: onSetCartCount, updateCartTotal:updateCartTotal}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext