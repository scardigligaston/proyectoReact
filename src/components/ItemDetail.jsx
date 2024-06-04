import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";



export default function ItemDetail ({item}) { 


    const {carrito, agregarAlCarrito} = useContext(CartContext); 
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);


    
    const handleSumar = () => { 

      cantidad < item.stock  &&  setCantidad(cantidad + 1 ) 
        
    };

    const handleRestar = ()=> { 
    
        cantidad > 1 && setCantidad(cantidad - 1) 
    };


    
    return( 
        <>
         <div className="card-producto-container">

             <img className="card-img" src={item.img} alt={item.nombre}/>

             <div className="card-producto-info">
               <h4>{item.nombre}</h4>

               <p>Precio: $ {item.precio}</p>

               <ItemCount handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => { agregarAlCarrito(item, cantidad)}} cantidad={cantidad}/>
               
              </div>

       </div>

        </>
    )

}