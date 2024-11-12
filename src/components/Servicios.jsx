//Insertar carousel´slider de servicios + cards (imagen + texto)
import { Carousel } from 'react-bootstrap';

function Servicios() {
  return (
    <div className='row'>
    <div id="services" className="container">
      <h2>Servicios</h2>
      <Carousel>
        <Carousel.Item>
          <img src="/path/to/image1.jpg" alt="Servicio 1" className="d-block w-100" />
          <Carousel.Caption><p>Descripción del servicio 1</p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/path/to/image2.jpg" alt="Servicio 2" className="d-block w-100" />
          <Carousel.Caption><p>Descripción del servicio 2</p></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default Servicios;
