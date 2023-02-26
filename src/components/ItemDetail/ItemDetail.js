import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)

    const [contador, setContador] = useState(1)
    const stock = 4
    
    return (
        <div width="200" className="product">
            <img alt={product.title} src={`/images/${product.imageId}`} width="200" />
            <h2> Estos productos estan listos para tu carrito {contador}</h2>
            <h2>{product.title}</h2>
            <h3>{product.categoryId}</h3>
            <h3>{product.description}</h3>
            <ItemCount 
                contador={contador}
                actualizaValor={setContador}
                stock={product.stock}
                 
            />
         {    <div>
                <button onCLick={() => addItem(product, contador)}>
                    Agregar al carrito</button>
            </div> }

        </div>
    )
}

export default ItemDetail;