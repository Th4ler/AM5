import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
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

function ServiciosCarousel() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

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

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));

  return (
    <div id="services" className="flex flex-col items-center">
      <div className="text-center py-4">
        <h2 className="p-3 text-2xl font-semibold">Servicios</h2>
      </div>

      <div className="container text-center">
        <div className="border-t-4 border-b-4 py-4 px-6 mx-auto">
          <p className="text-gray-500 mb-4">
            En AM5 ofrecemos soluciones estratégicas para personas, startups y empresas que buscan
            apoyo integral en el mundo legal, de negocios y comunicación pública. Nos especializamos en:
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mb-4">
        <button onClick={handlePrev} className="bg-dark rounded-full p-2 text-white" id="carousel-btn-back">
          <i className="bi bi-skip-start"></i>
        </button>
        <div className="rounded-xl border border-black px-4 py-2 font-semibold">Desliza</div>
        <button onClick={handleNext} className="bg-dark rounded-full p-2 text-white" id="carousel-btn-next">
          <i className="bi bi-skip-end"></i>
        </button>
      </div>

      <div className="carousel-container">
        <Carousel
          fade
          className="custom-carousel"
          activeIndex={index}
          onSelect={setIndex}
          indicators={true}
          controls={false}
        >
          {services.map((_, idx) => (
            <Carousel.Item key={idx}>
              <div className="flex justify-center gap-6">
                {services
                  .slice(index, index + (isSmallScreen ? 1 : 3))
                  .concat(services.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - services.length)))
                  .map((service, subIdx) => (
                    <div
                      key={subIdx}
                      className={`text-center mb-5 transition-all transform ${hoveredCard === subIdx ? 'translate-y-[-10px]' : ''}`}
                      onMouseEnter={() => setHoveredCard(subIdx)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="rounded-lg overflow-hidden shadow-lg w-72">
                        <img
                          src={hoveredCard === subIdx ? service.imgHover : service.imgDefault}
                          alt={service.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                          <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400">
                            Ver más
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="border-t-2 w-3/4 mx-auto mb-4 mt-4"></div>
    </div>
  );
}

export default ServiciosCarousel;