import React, {useMemo} from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Icono para eliminar, si usas React Icons
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContex';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const navigate= useNavigate();
  const IconoEliminar = () => <FaTrashAlt className='me-1'/>;
  const { carrito, eliminarDelCarrito, actualizarCantidad} = useContext(CarritoContext);
  const productosEnCarrito = carrito;

  //calcular subtotal
  const subtotal = productosEnCarrito.reduce((suma, producto) => { 
     const cantidad = producto.cantidad || 1;
      return suma + (producto.price * cantidad);
  },0);


      const envio = 0; // Puedes ajustar el costo de envío según tus necesidades 
      const total = subtotal + envio;

      //manejar cantidad
       const manejarCantidad = (indice, operacion) => {
        const producto = productosEnCarrito[indice];
        const cantidadActual = producto.cantidad;

        //definimos la nueva cantidad
        const cambios = {
          incrementar: 1,
          decrementar: - 1
        };
        const nuevaCantidad = cantidadActual + cambios [operacion];

        //si la cantidad llega a 0, eliminamos el producto
        if (nuevaCantidad < 1) { eliminarDelCarrito(indice);
        } else {
          actualizarCantidad(indice, nuevaCantidad);
        }
      };
       //Eliminar producto del carrito
       const manejarEliminar = (indice) => {
        eliminarDelCarrito(indice);
       };


  return (
    <div id="seccion-carrito" className="container my-5">
      <h2 className="text-center mb-4 border-bottom pb-2">
        🛒 Tu Carrito de Compras ({productosEnCarrito.length} {productosEnCarrito.length === 1 ? 'artículo' : 'artículos'})
      </h2>

      {productosEnCarrito.length === 0 ? (
        // Mensaje si el carrito está vacío
        <div className="alert alert-info text-center" role="alert">
          Tu carrito está vacío. ¡Añade algunos productos!
        </div>
      ) : (
        // Contenido del carrito
        <div className="row">
          {/* Columna de Productos (Ocupa 8 o 7/12 del ancho) */}
          <div className="col-lg-8">
            <div className="list-group">
              {productosEnCarrito.map((producto, indice) => (
                <div 
                  key={indice} 
                  className="list-group-item d-flex align-items-center justify-content-between p-3 mb-2 shadow-sm rounded-3"
                >
                  <div className="d-flex align-items-center">
                    {/* Imagen del Producto */}
                    <img 
                      src={producto.image} 
                      alt={producto.title} 
                      className="img-thumbnail me-3"
                      style={{ height: '80px', width: '80px', objectFit: 'cover' }} 
                    />
                    
                    {/* Detalles del Producto */}
                    <div>
                      <h5 className="mb-1 fw-bold">{producto.title}</h5>
                      <p className="mb-0 text-muted">Precio: ${producto.price.toFixed(2)}</p>
                    </div>
                       {/* Controles de Cantidad */}
                      <div className="d-flex items-center gap-2">
                        <span className="text-muted me-2 d-none d-sm-inline">Cantidad:</span>
                        <div className="input-group input-group-sm" style={{ minWidth: '120px' }}>
                          <button 
                            onClick={() => manejarCantidad(indice, 'decrementar')}
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            −
                          </button>
                          <span className="imput-group-text px-3">
                            {producto.cantidad || 1}
                          </span>
                          <button 
                            onClick={() => manejarCantidad(indice, 'incrementar')}
                            className="btn btn-outline-secondary"
                          >
                            +
                          </button>
                        </div>
                      </div>
                  </div>
                   {/*total por producto */}
                   <div className="d-flex flex-column align-items-end me-3">
                    <p className="mb-1 fw-bold mt-2 d-none d-sm-inline">  
                      Total: ${(producto.price * (producto.cantidad || 1)).toFixed(2)}
                    </p>
                   </div> 
                  
                  {/* Botón Eliminar */}
                  <button 
                    className="btn btn-outline-danger btn-sm" 
                    onClick={() => manejarEliminar(indice)}
                  >
                    {IconoEliminar()}
                    <span className="d-none d-sm-inline">Eliminar</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de Resumen (Ocupa 4 o 5/12 del ancho) */}
          <div className="col-lg-4">
            <div className="card shadow-lg sticky-top " style={{ top: '120px' }}>
              <div className="card-body">
                <h3 className="card-title mb-3 border-bottom pb-2">Resumen de Compra</h3>
                <div className="d-flex justify-content-between fs-5 fw-bold text-success">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span> 
                  {/* toFixed(2) para mostrar dos decimales */}
                </div>
                <div className="d-grid mt-4">
                  <button className="btn btn-primary btn-lg"
                  onClick={() => navigate('/factura')}>
                    finalizar Compra
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;