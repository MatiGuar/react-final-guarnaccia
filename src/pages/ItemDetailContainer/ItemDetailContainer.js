import {useEffect, useState} from 'react'
import DetalleProducto from '../../components/DetalleProducto/DetalleProducto'
import {useParams} from 'react-router-dom'
import './itemDetailContainer.css'
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState({})
    const {id} = useParams()

    const getProducts = () => {
      const dataBase = getFirestore();
      const querySnapshot = doc(dataBase, "products", id);
  
      getDoc(querySnapshot)
        .then((response) => {
          console.log(response.data());
          setDetalleProducto({ id: response.id, ...response.data() });
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getProducts();
    }, []);
  return (
    <div>
       <DetalleProducto producto={detalleProducto} />
       
    </div>
  )
}

export default ItemDetailContainer 