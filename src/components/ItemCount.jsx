
function ItemCount ( {handleRestar, handleSumar, cantidad, handleAgregar} ) { 


    return (
        <>
        <h6>{cantidad}</h6>
       <button onClick={handleSumar}>sum</button>
       <button onClick={handleRestar}>rest</button> 
       <button className="btn-agregar" onClick={handleAgregar}>Agregar al carrito</button>
       </>
       
    )
}

export default ItemCount ;