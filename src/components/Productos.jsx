import './styles/Productos.css'
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import { PuffLoader } from 'react-spinners';

    const supabaseUrl = 'https://vctltdhuiskueyxoksyx.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdGx0ZGh1aXNrdWV5eG9rc3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2ODQ1MTUsImV4cCI6MjAxMTI2MDUxNX0.4t1nROcWCJrJ8apCpzZbmRmAsXsksXZCA1vWQVHnbjM'
    const supabase = createClient(
                    supabaseUrl, 
                    supabaseKey
                    )

const Productos = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [productos, setproductos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => { //En esta funcion obtengo la carga de datos para mis card y tambien un spinner de carga que durara 15s o hasta que carge lo necesario

        const fakeLoadingTimeout = setTimeout(() => {
                  setIsLoading(false);
                }, 15000);
  
          async function fetchData() {
              try{
                  const {data, error } = await supabase //Conectandose a la base de datos
                  .from('productos')
                  .select('*');
                  if(error) {
                      setError(error.message)
                      return;
                  }
                  setproductos(data);
                  } catch (error){
                      setError(error.message)
          }finally {
            clearTimeout(fakeLoadingTimeout);
            setIsLoading(false);
          }
          }
          fetchData();
      }, []);

    return(
        
        <div className='proyecto-main'>
        {isLoading ? (
          <PuffLoader color="rgba(54, 55, 214, 1)" cssOverride={{}} loading size={65} speedMultiplier={1}/> 
        ) : error ? (
            <p>{error}</p> ) : (
          <div className='grid-container'>
            {productos.map((productos) => (
              <div className="item" key={productos.id}>
                <div>
                  <img className='imagen-proyectos' src={"data:image/jpeg;base64," + productos.img} alt={productos.namecurse} />
                </div>
                <h2 className='item-nombre'>{productos.name}</h2>
                <p>Fecha inicio: {productos.stock}</p>
                <p>Fecha Finalizado: {productos.price}</p>
                <p>Descripcion:</p>
                <p>{productos.description.length > 150 ? productos.description.slice(0, 150) + '...' : productos.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );

}

export default Productos;