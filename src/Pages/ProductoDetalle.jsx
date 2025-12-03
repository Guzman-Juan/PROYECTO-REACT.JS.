import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TarjetaDetalle from "../components/TarjetaDetalle";  
import { useProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContex";

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate= useNavigate();
  //const [producto, setProducto] = useState(null);
  //const {cargando, setCargando} = useState (true);
  const {productos, cargando, error} = useProductosContext();
  const {agregarAlCarrito} = useContext(CarritoContext);
  const [cantidad, setCantidad] = useState (1);
  const [agregado, setAgregado] = useState (false);
  const producto = productos.find( p => p.id === id); // Buscar el producto por id

//handlers de interaccion
  const handleAgregarAlCarrito = () => {
    for (let i = 0; i < cantidad; i++) {
      agregarAlCarrito(producto);
    }
    setAgregado(true);
    setTimeout(() => 
      setAgregado(false), 2000);
  };
  if (cargando) {
     return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Cargando producto...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return ( 
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.414 1.414M21 12h-3M6 12H3m15.364 6.364l-1.414-1.414M6.343 6.343L4.929 4.929M16.95 7.05l-1.414-1.414M7.05 16.95l-1.414-1.414" />
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Error al cargar el producto</h2>
          <p className="text-gray-600">Por favor, intenta nuevamente más tarde.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
          >Volver al inicio</button>
          </div>
        </div>
    );
  } if (!producto) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <svg className="mx-auto h-16 w-16 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    </svg>
          <h2 className="text-2xl font-semibold mb-2">Producto no encontrado</h2>
          <p className="text-gray-600">El producto que buscas no existe o ha sido eliminado.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
          >Volver al inicio</button>
        </div>
      </div>
    );
  }

  return(
    <>
    <div className="max-w-5xl mx-auto p-4 sm:px-8 lg:p-8 pt-6 pib-12">
      <TarjetaDetalle 
      producto={producto}
      agregado={agregado}
      onAgregar={handleAgregarAlCarrito}
      onVerCarrito={() => navigate('/carrito')} 
      />  
    </div>
    </>
  );
}; 

export default ProductoDetalle;
