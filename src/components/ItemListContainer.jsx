import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {  collection, getDocs, query, where} from "firebase/firestore";
import { dataBase } from "../firebase/config";





function ItemListContainer () {

    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("Productos");

    const categoria = useParams().categoria;
    
   

    useEffect(() =>{
       const productosBaseDb = collection(dataBase, "productos"); 

       const search = categoria ? query(productosBaseDb, where("categoria", "==", categoria)) : productosBaseDb; 

       getDocs(search)
          .then((resp) => {
        
            setProductos(resp.docs.map((doc)=>{
                return { ...doc.data(), id: doc.id}
            }));
         


          })

    },[categoria])

    return (
        <>
       
        <ItemList productos ={productos} titulo={titulo}/>
        </>
 
    );
};

export default ItemListContainer; 