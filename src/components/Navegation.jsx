import { Link } from "react-router-dom"
import './styles/Navegation.css'

const Navegation = () => {
  
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 className="logomovimiento">Fiordo</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to='/'>INICIO</Link></li>
            <li><Link to='/productos'>PRODUCTOS</Link></li>
            <li><Link to='/contactanos'>CONTACTANOS</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navegation