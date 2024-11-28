//Home section - Servicios
//Pedir iconos flecha botones slider!!

import { useState, useEffect } from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import img1 from '../images/img1.jpg';
import img1filter from '../images/img1filter.jpg';
import img2 from '../images/img2.jpg';
import img2filter from '../images/img2filter.jpg';
import img3 from '../images/img3.jpg';
import img3filter from '../images/img3filter.jpg';
import img4 from '../images/img4.jpg';
import img4filter from '../images/img4filter.jpg';
import img5 from '../images/img5.jpg';
import img5filter from '../images/img5filter.jpg';

function ServiciosCarousel() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Información de cada carta
  const services = [
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

  //Tomar medidas de la pantalla (trial)
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Manejo de navegación manual
  const handlePrev = () => setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));


  return (
    <div id='services' className="container">
      <h2 className='col-md-2 offset-md-5'>Servicios</h2>
      <div className='custom-border-box text-center col-md-8 offset-md-2 mb-4'>
        <div className="left-corner"></div>
        <div className="right-corner"></div>
        <p className='text-muted'>En AM5 ofrecemos soluciones estratégicas para personas, startups y empresas que buscan
          apoyo integral en el mundo legal, de negocios y comunicación pública. Nos especializamos en:</p>
      </div>

      {/* Botones de navegación con iconos */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <Button variant="dark" onClick={handlePrev} className="rounded-circle p-2" id='carousel-btn-back'>
          <i className="bi bi-skip-start"></i>
        </Button>
        <div className='rounded-5 border border-black px-4 py-2 fw-semibold'>Desliza</div>
        <Button variant="dark" onClick={handleNext} className="rounded-circle p-2" id='carousel-btn-next'>
          <i className="bi bi-skip-end"></i>
        </Button>
      </div>

      {/* Slider */}
      <div className='carousel-container'>
        <Carousel
          fade
          className='custom-carousel'
          activeIndex={index}
          onSelect={setIndex}
          indicators={true}
          controls={false} // Oculta controles prev y next por defecto
        // interval={null} // Desactiva el autoplay (para hacer pruebas, luego volver a habilitar)
        >
          {services.map((_, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex justify-content-center gap-3">
                {services
                  .slice(index, index + (isSmallScreen ? 1 : 3)) //Medidas pantalla
                  .concat(services.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - services.length))) //Medidas pantalla
                  .map((service, subIdx) => {

                    return (
                      <Card
                        className={`text-center mb-5 ${hoveredCard === subIdx ? 'hovered' : ''}`} //Correcting slider trial
                        key={subIdx}
                        style={{ width: '18rem', transition: 'transform 0.3s' }}
                        onMouseEnter={() => setHoveredCard(subIdx)} // Marca la carta en hover
                        onMouseLeave={() => setHoveredCard(null)}  // Restablece el estado
                      >
                        <Card.Img
                          variant="top"
                          src={hoveredCard === subIdx ? service.imgHover : service.imgDefault}
                          alt={service.title}
                        />
                        <Card.Body>
                          <Card.Title>{service.title}</Card.Title>
                          <Card.Text>{service.description}</Card.Text>
                          <Button variant="outline-warning bg-dark">Ver más</Button>
                        </Card.Body>
                      </Card>
                    );
                  })}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='custom-hr rounded w-75 mb-4 mt-4'></div>
      {/* Animación para elevar la carta central */}
      <style>{`
        .hovered {
          transform: translateY(-10px); /* Eleva la carta al hacer hover */
        }
      `}</style>
    </div>
  );
}

export default ServiciosCarousel;
