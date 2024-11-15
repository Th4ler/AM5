//Insertar carousel´slider de servicios + cards (imagen + texto)
//Insertar background de sección --> figuras geométricas

//New trial
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from '../images/img1.jpg';
import img1filter from '../images/img1filter.jpg';
import img2 from '../images/img2.jpg';
import img2filter from '../images/img2filter.jpg';
import img3 from '../images/img3.jpg';
import img3filter from '../images/img3filter.jpg';
import img4 from '../images/img4.jpg';
import img4filter from '../images/img4filter.jpg';
import img5 from '../images/img4.jpg';
import img5filter from '../images/img4filter.jpg';

function ServiciosCarousel() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);
  
  // Información de cada carta
  const services = [
    // {
    //   title: "Soluciones legales.",
    //   description: "Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.",
    //   imgDefault: "../images/img1filter.jpg",
    //   imgHover: "../images/img1.jpg"
    // },
    {
      title: "Soluciones legales.",
      description: "Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.",
      imgDefault: img1filter,
      imgHover: img1
    },
    {
      title: "Soluciones de negocio y backoffice.",
      description: "Ofrecemos soluciones de negocio y backoffice diseñadas para impulsar el crecimiento diario de tu empresa, optimizando operaciones y fortaleciendo cada área clave para tu éxito.",
      imgDefault: img2filter,
      imgHover: img2
    },
    {
      title: "Comunicaciones estratégicas.",
      description: "Brindamos soluciones de comunicación estratégica que fortalecen tu imagen y marca, mejoran tu reputación y anticipan riesgos legales y regulatorios.",
      imgDefault: img3filter,
      imgHover: img3
    },
    {
      title: "Capacitación y coach empresarial.",
      description: "Ofrecemos capacitación y coaching empresarial personalizados para potenciar habilidades, mejorar la comunicación y transformar la cultura organizacional.",
      imgDefault: img4filter,
      imgHover: img4
    },
    {
      title: "Sostenibilidad y RCE.",
      description: "Potenciamos la sostenibilidad empresarial y el trabajo pro bono, impulsando un impacto positivo en comunidades y promoviendo prácticas responsables.",
      imgDefault: img5filter,
      imgHover: img5
    }
  ];

  return (
    <div className="container">
      <h2 >Servicios</h2>
      <div><p>En AM5 ofrecemos soluciones estratégicas para personas, startups y empresas que buscan apoyo integral en el mundo legal, de negocios y comunicación pública. Nos especializamos en:</p></div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {services.map((service, idx) => (
          <Carousel.Item key={idx}>
            <Card
              style={{ width: '18rem' }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card.Img
                variant="top"
                src={hoveredCard === idx ? service.imgHover : service.imgDefault}
                alt={service.title}
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ServiciosCarousel;

//Trial más complejo WORKING
// import { useState } from 'react';
// import { Carousel, Card, Button } from 'react-bootstrap';

// function ServiciosCarousel() {
//   const [index, setIndex] = useState(0);
//   const [hovered, setHovered] = useState(Array(3).fill(false)); // Array para manejar el estado de "hover" de cada tarjeta

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   // Función para cambiar el estado de "hover" de una tarjeta
//   const handleMouseEnter = (idx) => {
//     setHovered((prev) => {
//       const updated = [...prev];
//       updated[idx] = true;
//       return updated;
//     });
//   };

//   const handleMouseLeave = (idx) => {
//     setHovered((prev) => {
//       const updated = [...prev];
//       updated[idx] = false;
//       return updated;
//     });
//   };

//   return (
//     <div className="carousel-container">
//       <h2>Servicios</h2>
//       <Carousel
//         activeIndex={index}
//         onSelect={handleSelect}
//         indicators={false} // Ocultar indicadores para usar solo flechas de navegación
//         nextIcon={<Button variant="outline-dark">➡️</Button>} //Cambiar flechas por img-flecha negra-amarilla!!
//         prevIcon={<Button variant="outline-dark">⬅️</Button>} //Cambiar flechas por img-flecha negra-amarilla!!
//       >
//         {[0, 1, 2, 3, 4].map((slideIdx) => (
//           <Carousel.Item key={slideIdx}>
//             <Card
//               style={{ width: '18rem' }}
//               onMouseEnter={() => handleMouseEnter(slideIdx)}
//               onMouseLeave={() => handleMouseLeave(slideIdx)}
//             >
//               <Card.Img
//                 variant="top"
//                 src={
//                   hovered[slideIdx]
//                     ? `/path/to/hover-image${slideIdx + 1}.jpg`
//                     : `/path/to/default-image${slideIdx + 1}.jpg`
//                 }
//                 alt={`Slide ${slideIdx + 1}`}
//               />
//               <Card.Body>
//                 <Card.Title>{`Servicio ${slideIdx + 1}`}</Card.Title>
//                 <Card.Text>
//                   Descripción breve del servicio {slideIdx + 1}.
//                 </Card.Text>
//                 <Button variant="primary">Más detalles</Button>
//               </Card.Body>
//             </Card>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default ServiciosCarousel;

//trial simple working
// import { Carousel } from 'react-bootstrap';

// function Servicios() {
//   return (
//     <div className='row'>
//     <div id="services" className="container">
//       <h2>Servicios</h2>
//       <Carousel>
//         <Carousel.Item>
//           <img src="/path/to/image1.jpg" alt="Servicio 1" className="d-block w-100" />
//           <Carousel.Caption><p>Descripción del servicio 1</p></Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src="/path/to/image2.jpg" alt="Servicio 2" className="d-block w-100" />
//           <Carousel.Caption><p>Descripción del servicio 2</p></Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//     </div>
//   );
// }

// export default Servicios;