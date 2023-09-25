import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cabezera from './components/Cabezera'
import Navegation from './components/Navegation'
import Productos from './components/Productos'

const App = () => {


  return (
    <>
      <Cabezera />
      <Navegation />
      <Routes>
        <Route path='/' element='' />
        <Route path='/productos' Component={Productos} />
        <Route path='/contacto' element='' />
      </Routes>
    </>
  )
}

export default App
