//Home section - Media: rutas hacia Noticias, Contenidos y RRSS
/* NEW DESING MEDIA COMPONENT -> 3 cards + link routes */
import { useState, useEffect } from "react";
import { Carousel, Button, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import mediaNews from "../images/media-noticias-img.webp";
import mediaContenidos from "../images/media-contenidos-img.webp";
import mediaRedes from "../images/media-rrss-img.webp";

function MediaCarousel() {
  const [index, setIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Actualizar tamaño de pantalla dinámicamente
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Información de las cartas
  const mediaItems = [
    {
      title: "Noticias",
      imgDefault: mediaNews,
      imgHover: mediaNews,
      link: "/noticias",
    },
    {
      title: "Contenidos",
      imgDefault: mediaContenidos,
      imgHover: mediaContenidos,
      link: "/contenidos",
    },
    {
      title: "Redes Sociales",
      imgDefault: mediaRedes,
      imgHover: mediaRedes,
      link: "/rrss",
    },
  ];

  // // Control de navegación del carousel
  // const handlePrev = () => setIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  // const handleNext = () => setIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));

  return (
    <div id="media" className="d-flex flex-column">
      <div className="d-flex justify-content-center text-center py-4">
        <h2 className="p-3">Media</h2>
      </div>

      {/* Botones de navegación */}
      {/* <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <Button variant="dark" onClick={handlePrev} className="rounded-circle p-2" id="carousel-btn-back">
          <i className="bi bi-skip-start"></i>
        </Button>
        <div className="rounded-5 border border-black px-4 py-2 fw-semibold">Desliza</div>
        <Button variant="dark" onClick={handleNext} className="rounded-circle p-2" id="carousel-btn-next">
          <i className="bi bi-skip-end"></i>
        </Button>
      </div> */}

      {/* Slider */}
      <div className="carousel-container">
        <Carousel
          fade
          className="custom-carousel"
          activeIndex={index}
          onSelect={setIndex}
          indicators={true}
          controls={false}
        >
          {mediaItems.map((_, idx) => (
            <Carousel.Item key={idx}>
              <div className="d-flex justify-content-center gap-3">
                {mediaItems
                  .slice(index, index + (isSmallScreen ? 1 : 3))
                  .concat(
                    mediaItems.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - mediaItems.length))
                  )
                  .map((item, subIdx) => (
                    <Card
                      className="text-center mb-5 media-card"
                      key={subIdx}
                      onMouseEnter={() => setHoveredCard(subIdx)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Imagen que ocupa toda la carta */}
                      <Card.Img
                        className="media-card-img"
                        src={hoveredCard === subIdx ? item.imgHover : item.imgDefault}
                        alt={item.title}
                      />
                      {/* Botón superpuesto */}
                      <Card.Body className="media-card-overlay">
                        <Button
                          as="a"
                          href={item.link}
                          className="media-card-btn"
                        >
                          {item.title}
                        </Button>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='custom-hr rounded w-75 mb-4 mt-4'></div>
    </div>
    
  );
}

export default MediaCarousel;