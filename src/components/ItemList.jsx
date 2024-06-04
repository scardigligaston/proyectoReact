import Item from "./Item";
import "/src/styles/cardProducto.css"

function ItemList ({productos, titulo}){ 

    return ( 

       <>
        <div>
            <h2>{titulo}</h2>
        </div>
        <div className="productos-item-list">
           
           {productos.map((prod) => <Item producto = {prod} key={prod.id}/>)}
        
        </div>
        </>
     
    )

}

export default ItemList ; 