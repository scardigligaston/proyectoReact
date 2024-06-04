import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebase/config";


function CheckOut () {

    const [pedidoId, setPedidoId] = useState(""); 



    const { carrito, precioTotalCarrito, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit} = useForm();

    const comprar = (data) => { 
        const pedido = { 
            cliente: data, 
            productos: carrito, 
            total:  precioTotalCarrito()
        }

        console.log(pedido);

        const pedidosRef = collection(dataBase, "pedidos"); 
        addDoc(pedidosRef, pedido)
             .then((doc) => { 
                setPedidoId(doc.id)
                vaciarCarrito();

             })

    }
    if(pedidoId){
        return(
        <>

<h2>Muchas Gracias por tu compra! </h2>
            <p>tu numero de pedido es: {pedidoId} </p>
        </>
         
        )
    }



     return ( 
        <>
        <h1>finalizar compra</h1>
        <hr />

        <div>
           
         <form onSubmit={handleSubmit(comprar)}>
               <input type="text" placeholder="ingresa tu nombre " {...register("nombre")}/>
               <input type="email" placeholder="ingresa tu email " {...register("email")}/>
               <button type="submit"> comprar </button>
        </form>
     </div>
       
        </>

     )
}

export default CheckOut; 
