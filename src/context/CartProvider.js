import { CartContext } from "./CartContext";
import { useState } from "react";
import Swal from "sweetalert2";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {

        let newCart;
        let product = cart.find((prod) => prod.id === item.id);
        if (product) {
          product.quantity += quantity;
          if(product.quantity > product.stock){
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'No hay mas productos en stock!',
            })
            return;
          }
          newCart = [...cart];
        } else {
          product = {
            id: item.id,
            name: item.title,
            price: item.price,
            description: item.description,
            quantity: quantity,
            image: item.imageId,
            category: item.categoryId,
            stock: item.stock
          };
          newCart = [...cart, product];
          console.log(cart);
        }
        setCart(newCart);
      };
    
      const clear = () => {
        setCart([]);
      };
    
      const deleteItem = (id) => {
        setCart(cart.filter((product) => product.id !== id));
      };
    
      return (
        <CartContext.Provider
          value={{ cart, addItem, clear, deleteItem }}
        >
          {children}
        </CartContext.Provider>
      );
    };
    

export default CartProvider