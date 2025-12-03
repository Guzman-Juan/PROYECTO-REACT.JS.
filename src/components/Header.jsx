import NavBar from './NavBar';
import { FaUser, FaShoppingBag, FaUserTie } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useBusqueda } from '../context/BusquedaContext.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import { GoPasskeyFill } from "react-icons/go";
import { CarritoContext } from '../context/CarritoContex';
import { useContext } from 'react';


const BagIcon = () => <FaShoppingBag size={24} />;
const TieIcon = () => <FaUserTie size={28} />;
const AdminIcon = () => <GoPasskeyFill size={30} />;

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const contadorEnCarrito = carrito.reduce((total, producto) => total + (producto.cantidad || 1), 0);
  const { busqueda, setBusqueda } = useBusqueda();
  const { estaLogiado, logout, usuario } = useAuthContext();
  const navigate = useNavigate();
  const EsAdmin = usuario === 'admin';
  const manejarLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <header className='d-flex justify-content-around align-items-center p-3 bg-dark text-white'
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000
        }}
      >
        {/* MENU HAMBURGUESA (MÓVIL) */}
        <button
          className="btn btn-outline-light d-lg-none me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuMovil"
        >
          ☰
        </button>
        {/* Seccion Izquierda: Logo */}
        <div className='fs-3 fw-bold me-3'>
          <Link to="/" className="text-white text-decoration-none">Zeus.Com</Link>
        </div>
        {/* Seccion Central: Componente NavBar */}
        <div className='d-none d-md-block'>
          <NavBar />
        </div>
        {/* Seccion Central-2: Barra de Busqueda */}
        <div className='flex-grow-1 mx-4'>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ width: "250px" }}
          />
        </div>

        {/* Seccion Derecha: Iconos */}
        <div className='d-flex align-items-center gap-4'>
          {/* Icono de Usuario */}
          <div className='me-5 d-flex align-items-center'>
            {estaLogiado ? (
              <>
                <p className='me-3 mb-0'>Hola!!!, {usuario}</p>
                <button
                  onClick={manejarLogout}
                  className='btn btn-outline-light d-flex  align-items-center'>
                  <TieIcon />
                  Cerrar Sesión
                </button>
                {EsAdmin ? (
                  <Link to="/admin" className='ms-3 text-white text-decoration-none d-flex align-items-center'>
                    <AdminIcon />
                    ADMIN
                  </Link>
                ) : (
                  <Link to="/carrito" className='ms-3 text-white text-decoration-none d-flex align-items-center'>
                    <BagIcon />
                    {contadorEnCarrito > 0 && (
                      <span className='ms-1 badge rounded-pill bg-danger'
                        style={{ fontSize: '0.75rem' }}>
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
      {/* MENU HAMBURGUESA (MÓVIL) */}
      <button
        className="btn btn-outline-light d-lg-none me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#menuMovil"
      >
        ☰
      </button>
      {/* OFFCANVAS (MENÚ MÓVIL) */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="menuMovil"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menú</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">

          {/* NAVBAR MOBILE */}
          <div className="navbar-mobile mb-3">
            <NavBar />
          </div>



          <hr className="border-secondary" />

          {/* BUSCADOR MOBILE */}
          <input
            type="text"
            placeholder="Buscar productos..."
            className="form-control mb-3"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

          {/* ICONOS MOBILE */}
          <div className="mt-3">
            {estaLogiado ? (
              <>
                <p>Hola, {usuario}</p>

                <button
                  onClick={manejarLogout}
                  className="btn btn-outline-light w-100 mb-3"
                >
                  <TieIcon /> Cerrar Sesión
                </button>

                {EsAdmin ? (
                  <Link to="/admin" className="btn btn-outline-light w-100 mb-3">
                    <AdminIcon /> Admin
                  </Link>
                ) : (
                  <Link to="/carrito" className="btn btn-outline-light w-100 mb-3">
                    <BagIcon /> Carrito ({contadorEnCarrito})
                  </Link>
                )}
              </>
            ) : (
              <Link to="/login" className="btn btn-outline-light w-100">
                <TieIcon /> Iniciar Sesión
              </Link>
            )}
          </div>

        </div>
      </div>
    </>
  );
};
export default Header;
