//Insertar las diferentes secciones + rutas (blog, contenidos, redes) + iconos redes
function Contenidos() {
    return (
        <div className='row'>
      <div id="contenidos" className="container">
        <h2 className='col-md-3 offset-md-5'>Contenidos</h2>
        <div className="d-flex">
          <div className="card me-3" style={{ backgroundImage: 'url(/path/to/blog.jpg)' }}>
            <a href="#blog" className="overlay">Blog</a>
          </div>
          <div className="card me-3" style={{ backgroundImage: 'url(/path/to/content.jpg)' }}>
            <a href="#content" className="overlay">Contenidos</a>
          </div>
          <div className="card" style={{ backgroundImage: 'url(/path/to/social.jpg)' }}>
            <a href="#social" className="overlay">Redes</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Contenidos;