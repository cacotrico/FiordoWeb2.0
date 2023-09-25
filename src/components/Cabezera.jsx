import './styles/Cabezera.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';


const Cabezera = () => {

  return (
    <div className='cabezera-dir'>
        <div className='cabezeras-div'>
          <FmdGoodOutlinedIcon className='iconphone'/>  <p>Ruta N°11 Km 84.300 - Santa Lucia</p>
        </div>
        <div className='cabezeras-div'>
            <p className='barrita'>/-/</p>
        </div>
        <div className='cabezeras-div'>
          <LocalPhoneOutlinedIcon className='iconphone'/><p>+598 99 858 286</p>
        </div>
    </div>
  )
}

export default Cabezera