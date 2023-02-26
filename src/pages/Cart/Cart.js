import './Cart.css'
import { useEffect, useState, useContext } from "react";
import { CartContext} from "../../context/CartContext";
import CarritoVacio from '../../components/CarritoVacio/CarritoVacio';
import {  collection,  addDoc,  getFirestore,  doc,  updateDoc} from "firebase/firestore";
import Swal from "sweetalert2";

const Cart = () => {

  const { cart, deleteItem, clear } = useContext(CartContext)
  const [order, setOrder] = useState({})
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });


  const dataBase = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: "",
        phone: "",
        email: "",
      },
      item: cart.map((product) => {
        const { name, price, id } = product;
        return { name, price, id };
      }),
      total: cart.reduce(
        (productPass, productNow) =>
          productPass + productNow.price * productNow.quantity,
        0
      ),
    });
  }, [cart]);


  if(cart.length === 0) {
    return <CarritoVacio />
  } 

  const createOrder = (event) => {
    event.preventDefault();
    console.log(formValue);
    const querySnapshot = collection(dataBase, "orders");

    const currentOrder = {
      ...order,
      buyer: formValue,
    };

    addDoc(querySnapshot, currentOrder)
      .then((response) => {
        updateStock();
        if( formValue.name === "" || formValue.phone === "" || formValue.email === "" ){
          Swal.fire("Rellena el Formulario", "Debes completar los campos vacios", "error");
        }else{
        Swal.fire(
          'Compra realizada con exito',
          ('Tu id de compra es: '+ response.id),
          'success',
        )};

      })
      .catch((error) => console.log(error));
  };

  const updateStock = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(dataBase, 'products', product.id)

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
      .then(() => {
        console.log('El producto actualizó su stock')
      })
      .catch((error) => console.log(error))
    });
    clear()
  }

  const handleInput = (event) =>{
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className='cart-items'>
      <ul className='cart-items-ul'>
        {cart.map((product) => (
          <li key={product.id}>
            <div className="cart-items-detail">
              <img alt={product.id} src={`/images/${product.image}`} width="50px" />
              <h6>{product.name}</h6>
              <h6>{product.category}</h6>
              <h6>{product.quantity}</h6>
              <h6>{product.price}</h6>

              <button 
              onClick={()=> deleteItem(product.id)} className="btn-eliminar-prod">
                 Eliminar del carrito 
                 </button>
            </div>
          </li>
        ))}
      </ul>

      <div className='vaciar-carrito'>
        <button onClick={() => clear()} className='btn-vaciar-carrito'> Vaciar carrito</button>
      </div>
      <div className='crear-orden'>
        <button onClick={createOrder} className='btn-crear-orden'> Crear orden</button>
      </div>
      <div className='contenedor-form'>
        <form className='formu'>
          <input 
            name="name" 
            type='text' 
            placeholder='name' 
            className='cuadro' 
            value={formValue.name}
            onChange={handleInput}
            />
          <input 
            name="phone" 
            type='text' 
            placeholder='phone' 
            className='cuadro'
            value={formValue.phone}
            onChange={handleInput}
          />
          <input 
            name="email"
            type='email' 
            placeholder='email' 
            className='cuadro'
            value={formValue.email}
            onChange={handleInput}
          />
        </form>
      </div>    
    </div>
  )
}

export default Cart

