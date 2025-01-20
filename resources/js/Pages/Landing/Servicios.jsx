//Home section - Servicios
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Carousel } from 'react-bootstrap';
import { BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid';
import img1 from '../../../../public/images/img1.jpg';
import img1filter from '../../../../public/images/img1filter.jpg';
import img2 from '../../../../public/images/img2.jpg';
import img2filter from '../../../../public/images/img2filter.jpg';
import img3 from '../../../../public/images/img3.jpg';
import img3filter from '../../../../public/images/img3filter.jpg';
import img4 from '../../../../public/images/img4.jpg';
import img4filter from '../../../../public/images/img4filter.jpg';
import img5 from '../../../../public/images/img5.jpg';
import img5filter from '../../../../public/images/img5filter.jpg';
import backgroundImage from '../../../../public/images/bg-services-section.webp';

function ServiciosCarousel() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const estilo = {
    backgroundImage: `url(${backgroundImage})`,
  };

  // Información de cada carta
  const services = [
    {
      title: "Soluciones legales.",
      description: "Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.",
      imgDefault: img1filter,
      imgHover: img1,
      route: "legales"
    },
    {
      title: "Soluciones de negocio",
      description: "Ofrecemos soluciones de negocio diseñadas para impulsar el crecimiento diario de tu empresa, optimizando operaciones y fortaleciendo cada área clave para tu éxito.",
      imgDefault: img2filter,
      imgHover: img2,
      route: "negocios"
    },
    {
      title: "Asuntos Públicos.",
      description: "Brindamos soluciones de comunicación estratégica que fortalecen tu imagen y marca, mejoran tu reputación y anticipan riesgos legales y regulatorios.",
      imgDefault: img3filter,
      imgHover: img3,
      route: "comunicaciones"
    },
    {
      title: "Capacitaciones",
      description: "Ofrecemos capacitación y coaching empresarial personalizados para potenciar habilidades, mejorar la comunicación y transformar la cultura organizacional.",
      imgDefault: img4filter,
      imgHover: img4,
      route: "coach"
    },
    {
      title: "Sostenibilidad y RCE.",
      description: "Potenciamos la sostenibilidad empresarial y el trabajo pro bono, impulsando un impacto positivo en comunidades y promoviendo prácticas responsables.",
      imgDefault: img5filter,
      imgHover: img5,
      route: "sostenibilidad"
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
    <div id='services' className="bg-white flex flex-col px-10">

      <div className="flex justify-center text-center pt-8 pb-10">
        <h2 className="am5-border p-3 pe-5 2xl:text-3xl text-2xl text-gray-600">Servicios</h2>
      </div>

      <div className='self-center max-w-4xl text-center px-0 pb-10'>
        <div className="overflow-hidden relative p-10 bg-white">
          {/* Esquina superior izquierda */}
          <div className="absolute top-0 left-0 md:w-1/12 w-1/4 h-4 bg-gray-600"></div>
          {/* Esquina inferior derecha */}
          <div className="absolute bottom-0 right-0 md:w-1/12 w-1/4 h-4 bg-gray-600"></div>
          {/* Línea vertical en el lado izquierdo */}
          <div className="absolute top-0 left-0 top-0 md:h-1/2 h-1/4 w-4 bg-gray-600"></div>
          {/* Línea vertical en el lado derecho */}
          <div className="absolute bottom-0 right-0 md:h-1/2 h-1/4 w-4 bg-gray-600"></div>

          <p className="text-gray-700 md:text-center text-justify">
            En AM5 nos enfocamos en brindar soluciones para personas y empresas que buscan
            apoyo integral en el mundo legal, de negocios y comunicación pública. Nos especializamos en:
          </p>
        </div>
      </div>

      {/* Contenedor principal del carousel y botones */}
      <div className="relative max-w-screen-2xl mx-auto w-full">
        {/* Botón previo */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-full md:-translate-x-1/3 -translate-x-1/2 z-10 rounded-full p-2 bg-gray-600 hover:bg-gray-800 transition-colors md:flex"
          id='carousel-btn-back'
        >
          {/* ChevronLeftIcon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="md:size-8 size-6 text-[#FFFF29]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Carousel */}
        <div className='carousel-container px-6 md:px-12'>
          <Carousel
            fade
            className='custom-carousel'
            activeIndex={index}
            onSelect={setIndex}
            indicators={true}
            controls={false}
            interval={null}
          >
            {services.map((_, idx) => (
              <Carousel.Item key={idx}>
                <div className="flex justify-center gap-12 max-w-screen-2xl mx-auto">
                  {services
                    .slice(index, index + (isSmallScreen ? 1 : 3))
                    .concat(services.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - services.length)))
                    .map((service, subIdx) => {
                      const isHovered = !isSmallScreen && hoveredCard === subIdx;

                      return (
                        <div
                          className={`carousel-card md:h-auto h-full bg-white rounded-3xl overflow-hidden shadow-xl text-center mb-12 ${hoveredCard === subIdx ? 'hovered' : ''
                            }`}
                          key={subIdx}
                          style={{ width: '25rem', transition: 'transform 0.3s' }}
                          onMouseEnter={() => !isSmallScreen && setHoveredCard(subIdx)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <img
                            className="card-img-top w-full h-full object-cover"
                            variant="top"
                            src={isSmallScreen ? service.imgHover : (isHovered ? service.imgHover : service.imgDefault)}
                            alt={service.title}
                          />
                          <div className="p-4">
                            <h5 className="text-xl text-gray-900 mb-4">{service.title}</h5>
                            {/* <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p> */}
                            <Link
                              href={route(service.route)}
                              className="custom-btn-carousel px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 font-bold"
                            >
                              Ver
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Botón siguiente */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-full md:translate-x-1/3 translate-x-1/2 z-10 rounded-full p-2 bg-gray-600 hover:bg-gray-800 transition-colors md:flex"
          id='carousel-btn-next'
        >
          {/* ChevronRightIcon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="md:size-8 size-6 text-[#FFFF29]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </div>
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