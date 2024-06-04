import { Link } from "react-router-dom";

function Category () { 
    return (
        <ul className="categorias-list">
            <li><Link to="/productos/indumentaria">indumentaria</Link></li>
            <li><Link to="/productos/tecnologia">tecnologia</Link></li>
            <li><Link to="/productos/electrodomesticos">electrodomesticos</Link></li>
        </ul>



    ); 
}

export default Category; 