import NavBar from './NavBar';
import { FaUser, FaShoppingBag, FaUserTie } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {useBusqueda} from '../context/BusquedaContext.jsx'; 
import { useAuthContext } from '../context/AuthContext.jsx';
import { GoPasskeyFill } from "react-icons/go";

const BagIcon = () => <FaShoppingBag size={24} />;
const TieIcon = () => <FaUserTie size={28} />; 
const AdminIcon = () => <GoPasskeyFill size={30} />;
const Header = ({contadorEnCarrito = 0}) => {

  const { busqueda, setBusqueda } = useBusqueda();
  const { estaLogiado, logout, usuario } = useAuthContext();
  const navigate = useNavigate();
  const EsAdmin = usuario === 'admin';
  const manejarLogout = () => {
    logout();
    navigate('/login');
  };

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
      {/* Seccion Central-2: Barra de Busqueda */}
      <div className='flex-grow-1 mx-4'>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Buscar productos..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{width: "250px"   }}  
        />
      </div>

      {/* Seccion Derecha: Iconos */}
      <div className='d-flex align-items-center gap-4'>
        {/* Icono de Usuario */}
        <div className='me-5 d-flex align-items-center'>
          {estaLogiado ? (
            <>
            <button
              onClick={manejarLogout}
              className='btn btn-outline-light d-flex  align-items-center'>
              <TieIcon />
              Cerrar Sesión
            </button>
            {EsAdmin ? ( 
              <Link to="/admin" className='ms-3 text-white text-decoration-none d-flex align-items-center'>
                <AdminIcon />
                Admin
              </Link>
          ) : (
            <Link to= "/carrito" className='ms-3 text-white text-decoration-none d-flex align-items-center'>
            <BagIcon />
            {contadorEnCarrito > 0 && (
              <span className='ms-1 badge rounded-pill bg-danger'
              style={{fontSize: '0.75rem'}}>
                {contadorEnCarrito}
              </span>
            )}
            </Link>
          )}
            </>
          ) : (
            <Link to="/login" className='text-white text-decoration-none d-flex align-items-center'>
              <TieIcon />
              Iniciar Sesión
            </Link>
          )}
        </div>
       </div>
       </header>
  );
}; 
export default Header;
