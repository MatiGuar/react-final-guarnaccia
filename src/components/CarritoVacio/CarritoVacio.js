import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CarritoVacio = () => {
  return (
    <div className="d-flex row m-5">
      <div>
        <h1 className="m-5 p-5 text-center">
          No hay productos seleccionados en el carrito
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <NavLink to="/">
          <Button className="border-3 border-dark border" size="lg">
            Agregar Productos
          </Button>
        </NavLink>

      </div>
   </div>
  );
};

export default CarritoVacio;