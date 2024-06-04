import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

import ItemDetailContainer from "./components/ItemDetailContainer";
import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import {  CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import CheckOut from "./components/CheckOut";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {

  return (
<CartProvider>
    
    <BrowserRouter>
         <NavBar/> 
      <Routes>
 
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>  
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/categorias" element={<Category/>}/> 
         
          <Route path="/Contacto" element={<Contacto/>} /> 
          <Route path="/Carrito" element={<Carrito/>} /> 
          <Route path="/checkout" element={<CheckOut/>} /> 
         
      </Routes>
      <Footer/>
    </BrowserRouter>

  </CartProvider> 
  )
};

export default App
