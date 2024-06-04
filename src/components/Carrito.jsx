import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Carrito () { 

    const { carrito, precioTotalCarrito, vaciarCarrito } = useContext(CartContext);
    

    const handleVaciar =() => { 
        vaciarCarrito()
    }

    return ( 
        <div> 

             <h1>Carrito</h1>
        <div> 
            {
              carrito.map( (prod) => 
              
           <div className="card-producto-container" key={prod.id}>
                <h2>{prod.nombre}</h2>
                <img src={prod.img} className="card-img" />
                 <p>Precio: $ {prod.precio}</p>
                 <p>Cant: {prod.cantidad} </p>
                 <p>Total: {prod.precio * prod.cantidad}</p>
                         
            </div>    
            
       )}
       </div>
       <hr />
       <br />
       <br />
       {carrito.length < 0 && <h2>Precio total: $ {precioTotalCarrito()}</h2>}
       <button onClick={handleVaciar}>Vaciar Carrito</button>
       <Link to="/checkout" style={{color:"black"}}>Finalizar Compra</Link>
      
        </div>
    )
}


export default Carrito; 
