const Jumbotron = () => {
  return (
    <div className="bg-secondary text-white rounded-3 py-5">
      <div className="container">
        {/* Contenido pegado a la izquierda */}
        <h1 className="display-5 fw-bold text-start">Bienvenido a mi sitio</h1>
        <p className="fs-4 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem et asperiores, repellat tempore repudiandae praesentium libero iste labore officia vero adipisci ea, laudantium facere.
        </p>
        <button className="btn btn-primary btn-lg text-start d-inline-block" type="button">
          ¡Saber más!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;

