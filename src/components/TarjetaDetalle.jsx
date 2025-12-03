import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const TarjetaDetalle = ({
  producto,
  agregado,
  onAgregar,
  onVerCarrito,
  mostrarVerCarrito = true,

      }) => {
         const{usuario, estaLogiado} = useAuthContext();
  const puedeComprar = estaLogiado && usuario !== 'admin';

  return (
    // Usa la clase 'card' de Bootstrap
    <div className="card h-100">
      <h2 className="text-center my-4 card-title text-truncate">{producto.title}</h2>
      {/* Imagen */}
      <img 
        src={producto.image} 
        className="card-img-top p-3" // p-3 para un pequeño padding alrededor de la imagen
        alt={producto.title} 
        style={{ height: '200px', objectFit: 'contain' }} // Estilos inline para asegurar el tamaño
      />

      {/* Cuerpo de la Tarjeta */}
      <div className="card-body d-flex flex-column">
        
        {/* Título y Precio */}
        <h5 className='card-title fw-bold tex-truncate'>Detalles del Producto Nro {producto.id}</h5>
        <p className="card-text fw-bold mt-auto">${producto.price}</p> 
        <p className="card-text  mt-auto">${producto.description}</p> 
        {/* mt-auto para empujar el precio al fondo, y fw-bold para destacarlo */}

        {/* Categoria*/}
        {producto.category && (
          <span className="badge bg-secondary mb-3">{producto.category}</span>
        )}

        {/* Botones de Compra */}
        {puedeComprar && (
        <div className=" d-grid gap-2 mt-auto">
          <button
          onClick={onAgregar}
          className={ `btn ${agregado ? 'btn-success' : 'btn-primary'} btn-lg`}
          disabled={agregado}
          >
            {agregado ? 'Agregado al Carrito' : 'Agregar al Carrito'}
          </button>
          {mostrarVerCarrito && (
            <button
              onClick={onVerCarrito}
              className="btn btn-outline-success btn-lg"
            >
              Ver Carrito
            </button>
          )} 
        </div>
        )} 
      </div>
    </div> 
  );
};

export default TarjetaDetalle;