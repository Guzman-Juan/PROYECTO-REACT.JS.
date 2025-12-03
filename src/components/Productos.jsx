
import { useBusqueda } from '../context/BusquedaContext';
import Tarjeta from './Tarjeta';
import { useProductosContext } from '../context/ProductosContext';
import { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContex';

const Productos = () => {
    const { productos, cargando, error } = useProductosContext();
     const { busqueda } = useBusqueda();
     const { agregarAlCarrito } = useContext(CarritoContext);
     const [cantidad] = useState(1);
     const [agregarId, setAgregarId] = useState(null);

    // Filtrar productos según la búsqueda//
    const productosFiltrados = productos.filter((producto) =>
        producto.title.toLowerCase().includes(busqueda.toLowerCase())
    );
    
     //paginador
     const productosPorPagina = 8;
     const [paginaActual, setPaginaActual] = useState(1);

     //Reseteamos la página actual si los productos filtrados cambian
        useEffect(() => {
            setPaginaActual(1);
        }, [busqueda]);

        //handler de interaccion
        const handleAgregarAlCarrito = (producto) => {
            for (let i = 0; i < cantidad; i++) {
                agregarAlCarrito(producto);
            }   
            setAgregarId(producto.id);
            setTimeout(() => 
                setAgregarId(null), 2000);
        };
        
        // Manejo de estados de carga y error
           if (cargando) return '...Cargando productos...';
    if (error) return error;

        const indiceUltimoProducto = paginaActual * productosPorPagina;
        const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
        const productosPaginados = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

        // Calcular el total de páginas
        const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
        const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

    return (
        <div className="container my-4"> {/* Contenedor principal con margen vertical */}
            <h2 className="mb-4 text-center">Catálogo de Productos</h2>

            {/* Lista de Productos */}


            {/* Usamos la Grilla de Bootstrap:
        - row: Define una fila.
        - g-4: Define un "gutter" (espaciado) de 4 entre las columnas.
      */}
                
                { productosFiltrados.length > 0 ? (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                 {productosPaginados.map((producto) =>  (
                    < div key={producto.id} className="col" >

                        <Tarjeta
                            producto={producto}
                            
                            agregado= {agregarId === producto.id}
                            onAgregar={() => handleAgregarAlCarrito(producto)}
                        />
                    </div>
                ))}
                </div >
                ) : (
                    <div className="d-flex justify-content-center w-100 mt-5" >
                    <p class="alert alert-danger">No hay productos que coincidan con la búsqueda.</p>

                    </div >
                )}
            {/* Paginación */}
            <div className="d-flex justify-content-center mt-4">
                {Array.from({ length: totalPaginas }, (_, index) => ( 
                    <button
                        key={index + 1}
                        className={`btn btn-outline-primary mx-1 ${paginaActual === index + 1 ? 'active' : ''}`}
                        onClick={() => cambiarPagina(index + 1)}
                    >
                        {index + 1}
                    </button>    
                ))}
            </div>
        </div>
    );
}
export default Productos; 