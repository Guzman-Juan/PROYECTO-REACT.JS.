import NavBar from './NavBar';
import { FaUser, FaShoppingBag, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const BagIcon = () => <FaShoppingBag size={24} />;
const TieIcon = () => <FaUserTie size={28} />; 
const Header = ({contadorEnCarrito = 5}) => {
  return (
    <header className='d-flex justify-content-around align-items-center p-3 bg-dark text-white'>
      {/* Seccion Izquierda: Logo */}
      <div className='fs-3 fw-bold me-3'>
        <Link to="/" className="text-white text-decoration-none">Zeus.Com</Link>
      </div>
      {/* Seccion Central: Componente NavBar */}
      <div className='d-none d-md-block'>
        <NavBar/>
      </div>
      {/* Seccion Derecha: Iconos */}
      <div className='d-flex align-items-center gap-4'>
        {/* Icono de Usuario */}
        <div className='me-3'>
          <TieIcon />
        </div>
        {/* Icono de Carrito con Contador */}
        <div className='position-relative'>
          <a href="#seccion-carrito" className='text-white text-decoration-none position-relative'>
          <BagIcon />
          {/* Renderiza el contador solo si es mayor que 0 */}
          {contadorEnCarrito > 0 && (
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {contadorEnCarrito}
            </span>
          )}
          </a>
          
        </div>
      </div>
    </header>   
  );
};

export default Header;
