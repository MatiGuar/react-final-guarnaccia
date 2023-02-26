import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  ItemList from '../../components/ItemList/ItemList'
import {  getFirestore,  getDocs,  collection,  query,  where} from "firebase/firestore";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {category} = useParams() 


    const getProducts = () => {
        const dataBase = getFirestore();
        const querySnapshot = collection(dataBase, "products");
    
        if (category) {
          const newQuery = query(
            querySnapshot,
            where("categoryId", "==", category)
          );
    
          getDocs(newQuery)
            .then((response) => {
              const data = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              });
              setProductos(data);
            })
            .catch((error) => console.log(error));
        } else {
          getDocs(querySnapshot)
            .then((response) => {
              const data = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              });
              setProductos(data);
            })
            .catch((error) => console.log(error));
        }
      };
    
      useEffect(() => { 
        getProducts();
      }, [category]);


  return (
    <div>
      
      
          <ItemList productos={productos} />
              
    </div> 
  )
}

export default ItemListContainer