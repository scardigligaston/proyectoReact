import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget () {

    const { cantidadEnCarrito } = useContext(CartContext); 


     return ( 
        <>
        <Link className="menu-link" to="/carrito">
            carrito
            <span>  {cantidadEnCarrito()}</span>
            </Link>
        </>
     )
}


export default CartWidget; 