import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <nav>
      <ul className= "list-unstyled d-flex mb-0 ">
        <li className="mx-4">
          <Link to="/" className= "text-white text-decoration-none">Inicio</Link> 
          </li>
          <li className="mx-4">
          <Link to="/tecnologia" className= "text-white text-decoration-none">Tecnologia</Link>
           </li>
          <li className="mx-4">
          <Link to="/moda" className= "text-white text-decoration-none">Moda</Link> 
          </li>
          <li className="mx-4">
          <Link to="/joyas" className= "text-white text-decoration-none"> Joyas</Link>
          </li>
          <li className="mx-4">
          <Link to="/contacto" className= "text-blue text-decoration-none"> Contacto</Link> 
        </li> 
      </ul>
    </nav>
  );
}

export default NavBar;