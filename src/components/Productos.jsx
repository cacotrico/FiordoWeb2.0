import './styles/Productos.css'
import { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import supabase from './lib/Supabase';


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
                <div className='sector-description'>
                  <h2 className='item-nombre'>{productos.name}</h2><br />
                  <p>Stock: {productos.stock}</p>
                  <p>Precio: {productos.price}</p><br />
                  <p>{productos.description.length > 150 ? productos.description.slice(0, 150) + '...' : productos.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );

}

export default Productos;