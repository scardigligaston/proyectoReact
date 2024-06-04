import { useForm } from "react-hook-form";

function Contacto ( ){ 

    const { register, handleSubmit} = useForm ();

    const enviar = (data) => { 
        console.log(data)
    }

    return ( 
        
        <div>
              <h1>Contacto</h1>
         <form onSubmit={handleSubmit(enviar)}>
               <input type="text" placeholder="ingresa tu nombre " {...register("nombre")}/>
               <input type="email" placeholder="ingresa tu email " {...register("email")}/>
               <button type="submit"> enviar </button>
        </form>
     </div>
       
        
       
    )
}
export default Contacto;
