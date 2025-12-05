const Contacto = () => {
  return (
    <>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">

        <h2>CONTACTO</h2>
        <h1 className="display-3 fw-bold"> Juan Gonzalez Guzman </h1>
        <h3 className="fw-normal text-muted mb-3"> Pre-Entrega REACT Talento-Tech </h3>
        <h3 className="fw-normal text-muted mb-3"> Tel: +54 221 378 3829</h3>
        <h3 className="fw-normal text-muted mb-3"> Email:JuYa#666Guz@hotmail.com </h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/EFmxPMdBqmU?si=esqwjKD_wgZG9BMs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <p className="lead fw-normal text-muted mb-3">Gracias por visitar mi sitio. Si tienes alguna pregunta, comentario o simplemente quieres saludar, no dudes en contactarme. Estoy aquí para ayudarte y responder a todas tus inquietudes. Puedes enviarme un correo electrónico o llamarme directamente. ¡Espero saber de ti pronto!</p>
        </div>
      </div>
    </>

  );
}

export default Contacto;
