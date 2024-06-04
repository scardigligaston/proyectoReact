import data from "../data/data.json"

export function pedirDatos () { 
     return new Promise ((resolve) => {
        setTimeout(()=>{
         resolve(data)
        }, 500)
     })
};


export function pedirItemPorId (id){ 


   return new Promise ((resolve,rejected) => { 
      
      const item = data.find((el) => el.id === id )

      if (item) { 
         resolve(item)

      }else { 
         rejected({
            error : " no se encontro el producto "
         })
         
      }
   })
};

