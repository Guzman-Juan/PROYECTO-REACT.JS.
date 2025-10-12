const Footer = () => {
  
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-3">
      {/* Seccion de enlaces */}
      <ul className="list-unstyled mb-2 d-flex justify-content-center gap-4">
        <li className="mx-3">
          <a href="/contacto" className="text-white text-decoration-none" >Acerca de ZEUS.Com</a>
        </li>
        <li className="mx-3">
          <a href="#" className="text-while text-decoration-none" >Política de Privacidad</a>
        </li>
      </ul>
      {/* Seccion de Copyright */}
      <p className="mb-0"> 
        © {anioActual} One Push-Man. Derechos reservados // JUAN GUZMAN.
    
      </p>
    </footer>
  );
}

export default Footer;

