import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../firebase/config";


export default function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    

    useEffect(() => { 

      const docDataB = doc(dataBase, "productos", id);

      getDoc(docDataB)
              .then((resp) => { 
               setItem(
                  {...resp.data(), id : resp.id}
                );
              })

    },[id])

      return (
    <>
        { item && <ItemDetail item ={item} /> }
    </>
  )
}
