import { Link } from "react-router-dom"
import "../styles/navBar.css"
import CartWidget from "./CartWidget"


function NavBar () {
    return (
      <header>
       <nav className="navbar-contenedor">
          <Link to="/" className="logo-contenedor"><img src={"/src/assets/react.svg"} alt="logo" /><h1>CUBICO</h1></Link>
        <ul className="menu-contenedor">
            <li><Link to="/" className="menu-link">Inicio</Link></li>
            <li><Link to="/productos" className="menu-link">Productos</Link></li>
            <li><Link to="/categorias" className="menu-link">Categorias</Link></li> 
            <li><Link to="/Contacto" className="menu-link">Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
        
       </nav>
       </header>
    )
}
export default NavBar 