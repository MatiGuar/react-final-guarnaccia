import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect (() => {
    setTotal (
      cart?.reduce((prev, curr) => {
      return prev + curr.quantity
    }, 0)
  ) 
  },[cart])
    
  
  return (
      <div  className="icon-carrito d-flex">
          🛒 
          <h5 className="cant-carrito">{total}</h5>
      </div>
    )
  }
  
  export default CartWidget