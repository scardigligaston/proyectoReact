import { Link } from "react-router-dom";
import "/src/styles/cardProducto.css"

function Item ( {producto} ) { 
    return (
        <div className="card-producto-container">

           <img className="card-img" src={producto.img} alt={producto.nombre}/>

           <ul className="card-producto-info">
                 <li>{producto.nombre}</li>
                 <li>Precio: $ {producto.precio}</li>
                 <li>
                    <Link className="btn-producto" to={`/item/${producto.id}`}>Ver más</Link>
                </li>
           </ul>
        
        </div>
    )
}

export default Item ; 
