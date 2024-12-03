//Home section - Media: rutas hacia Blog, Contenidos y Podcast
//Insertar las diferentes secciones + rutas (blog, contenidos, redes) + iconos redes
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import bossPic from '../images/mediaAndres.webp';
import roomPic from '../images/contenidosRoom.webp';
import cameraPic from '../images/cameraPic.webp';
import microPic from '../images/microphonePic.webp';
import smartphonePic from '../images/smartphonePic.webp';


const Media = () => {
  return (
    <section id="media" className="media-section">
      <Container>
        <h2 className="col-md-2 offset-md-5 mb-5">Media</h2>
        <Row>
          {/* Columna 1 */}
          <Col md={4} className="d-flex flex-column align-items-center">
            <div className="media-pic-box mb-3">
              <img
                src={bossPic}
                alt="Imagen de Andrés Madariaga"
                className="img-fluid"
              />
            </div>
            <div className="yellow-box position-relative">
              <Link to="/blog" className="vertical-btn">
                Blog
              </Link>
              <img
                src={cameraPic}
                alt="Imagen decorativa 2"
                className="zoom-img"
              />
            </div>
          </Col>

          {/* Columna 2 */}
          <Col md={4} className="d-flex flex-column align-items-center">
            <Link to="/contenidos" className="long-btn mb-3">
              Contenidos
            </Link>
            <img
              src={roomPic}
              alt="Imagen de la sala de un estudio de grabación de podcast"
              className="img-fluid"
            />
          </Col>

          {/* Columna 3 */}
          <Col md={4} className="d-flex flex-column align-items-center">
            <div className="yellow-box mb-3 position-relative">
              <Link to="/podcast" className="vertical-btn">
                Podcast
              </Link>
              <img
                src={microPic}
                alt="Micrófono"
                className="zoom-img"
              />
            </div>
            <div className="black-box d-flex justify-content-between align-items-center">
              <div className="social-icons">
                <ul>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </ul>
                <ul>
                  <li>Twitter</li>
                  <li>YouTube</li>
                  <li>TikTok</li>
                </ul>
              </div>
              <img
                src={smartphonePic}
                alt="Fotografía de un Smartphone"
                className="zoom-img smartphone"
              />
            </div>
          </Col>
          <div className='custom-hr rounded w-75 mt-4'></div>
        </Row>
      </Container>
    </section>
  );
};

export default Media;


//Old media
// function Contenidos() {
//   return (
//     <div className='row'>
//       <div id="media" className="container">
//         <h2 className='col-md-2 offset-md-5'>Media</h2>
//         <div className="d-flex">
//           <div className="card me-3" style={{ backgroundImage: 'url(/path/to/blog.jpg)' }}>
//             <a href="#blog" className="overlay">Blog</a>
//           </div>
//           <div className="card me-3" style={{ backgroundImage: 'url(/path/to/content.jpg)' }}>
//             <a href="#content" className="overlay">Contenidos</a>
//           </div>
//           <div className="card" style={{ backgroundImage: 'url(/path/to/social.jpg)' }}>
//             <a href="#social" className="overlay">Redes</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contenidos;