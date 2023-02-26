import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";


const DetalleProducto = ({producto}) => {

  const { addItem } = useContext(CartContext);

  const [contador, setContador] = useState(0);
  const stock = 10;

  const getNumeroCualquiera = (numero) => {
    console.log('El numero es ' + numero)
}

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  return (
   
    <Card style={{ width: '18rem' }} className="d-flex align-item-center">
        <Card.Img variant="top" alt={producto.title} src={`/images/${producto.imageId}`} height="300px" />
        <Card.Body key={producto.id}>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.categoryId}</Card.Text>
          <Card.Text> {producto.description}</Card.Text>
          <ItemCount 
                contador={contador}
                actualizaValor={setContador}
                stock={producto.stock}
                getNumeroCualquiera={getNumeroCualquiera}            
            />
            <Button variant="success"  className="mt-3" onClick={() => 
                Toast.fire({
                  icon: 'success',
                  title: 'Producto agregado'
                }, addItem(producto, contador))}>
              Añadir al carrito
            </Button>
        </Card.Body>
      </Card>

  )
}

export default DetalleProducto