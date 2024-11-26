//Insertar carousel´slider de servicios + cards (imagen + texto)
//Insertar background de sección --> figuras geométricas
//Probar a sustituir con row + col los divs para centrar el borde / O provar disminuir box-shadow del div 

//New trial
// import { useState } from 'react'; //Last trial working
import { useState, useEffect } from 'react'; //Last trial working
// import { useState, useEffect, useRef } from 'react'; //Trial
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
    //Prueba medida pantalla
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  //Prueba medidas carta
  // const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  // const firstCardRef = useRef(null); // Referencia para medir la primera carta

  // const handleSelect = (selectedIndex) => setIndex(selectedIndex); //Controla la diapositiva activa (se actualiza con el estado) -> WORKING!!

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
  //Tomar medidas de una carta como referencia (trial)
  // useEffect(() => {
  //   if (firstCardRef.current) {
  //     // Obtiene las dimensiones de la primera carta
  //     const { width, height } = firstCardRef.current.getBoundingClientRect();
  //     setCardSize({ width, height });
  //   }
  // }, []);
  //Tomar medidas referencia img5filter
  // useEffect(() => {
  //   const img = new Image();
  //   img.src = img5filter;
  //   img.onload = () => setCardSize({ width: img.width, height: img.height });
  // }, []);

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

      {/* Botones de navegación */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <Button variant="outline-dark" onClick={handlePrev} className="rounded-circle p-2">
          ⬅️
        </Button>
        <div className='rounded-5 border border-black px-4 py-2 fw-semibold'>Desliza</div>
        <Button variant="outline-dark" onClick={handleNext} className="rounded-circle p-2">
          ➡️
        </Button>
      </div>

      {/* Slider */}
      <Carousel
        // fade
        className='custom-carousel'
        activeIndex={index}
        // onSelect={handleSelect} //WORKING!!
        // indicators={true} //WORKING!!
        // interval={null} // Desactiva el autoplay (para hacer pruebas, luego volver a habilitar) -> WORKING!!
        onSelect={setIndex}
        indicators={true}
        controls={false} // Oculta controles prev y next por defecto
        interval={null} // Desactiva el autoplay (para hacer pruebas, luego volver a habilitar)
      >
        {/* {services.map((service, idx) => ( */}
        {services.map((_, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-center gap-3">
              {services
                // .slice(idx, idx + 3) // Toma tres elementos consecutivos
                // .concat(services.slice(0, Math.max(0, idx + 3 - services.length))) // Cicla si se pasa
                // .slice(idx, idx + (isSmallScreen ? 1 : 3)) //Medidas pantalla (working)
                // .concat(services.slice(0, Math.max(0, idx + (isSmallScreen ? 1 : 3) - services.length))) //Medidas pantalla (working)
                .slice(index, index + (isSmallScreen ? 1 : 3)) //Medidas pantalla (correr solo 1 card)
                .concat(services.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - services.length))) //Medidas pantalla (correr solo 1 card)
                // .map((service, subIdx) => (
                .map((service, subIdx) => {
                  // Identifica la carta central para el efecto hover
                  const isCenterCard = subIdx === 1;

                  return (
                    <Card
                      // className='text-center mb-5'
                      // className={`text-center mb-5 mt-2 ${isCenterCard && hoveredCard === subIdx ? 'hovered' : ''}`} //Working
                      // className={`text-center mb-5 ${subIdx === (isSmallScreen ? 0 : 1) ? 'highlight-hover' : ''}`} //Screen size trial working!!
                      className={`text-center mb-5 ${isCenterCard && hoveredCard === subIdx ? 'hovered' : ''}`} //Correcting slider trial
                      key={subIdx}
                      // ref={subIdx === 0 ? firstCardRef : null} // Ref solo para la primera carta (medidas)
                      // style={{
                      //   width: cardSize.width ? `${cardSize.width}px` : '18rem',
                      //   height: cardSize.height ? `${cardSize.height}px` : 'auto',
                      //   width: `${cardSize.width}px`,
                      //   height: `${cardSize.height}px`,
                      // }}
                      style={{ width: '18rem', transition: 'transform 0.3s' }}
                      // onMouseEnter={() => isCenterCard && setHoveredCard(subIdx)} // Working
                      onMouseEnter={() => setHoveredCard(subIdx === (isSmallScreen ? 0 : 1) ? subIdx : null)} //Screen size trial
                      onMouseLeave={() => setHoveredCard(null)}
                    // style={{ width: '18rem' }}
                    // onMouseEnter={() => setHoveredCard(idx)}
                    // onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card.Img
                        variant="top"
                        // src={hoveredCard === idx ? service.imgHover : service.imgDefault}
                        src={isCenterCard && hoveredCard === subIdx ? service.imgHover : service.imgDefault} //WORKING!!
                        // src={hoveredCard === subIdx ? service.imgHover : service.imgDefault} //Correcting slider trial
                        alt={service.title}
                      />
                      <Card.Body>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                        <Button variant="outline-warning bg-dark">Ver más</Button>
                      </Card.Body>
                    </Card>
                  );
                  // ))}
                })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='custom-hr rounded w-75 mb-4 mt-4'></div>
      {/* Animación para elevar la carta central -> styled-jsx */}
      <style jsx>{`
        .hovered {
          transform: translateY(-10px); /* Eleva la carta central al hacer hover */
        }
      `}</style>
    </div>
  );
}

export default ServiciosCarousel;

//Last TRIAL working (problemas con SLIDER INDIVIDUAL
// // import { useState } from 'react'; //Last trial working
// import { useState, useEffect } from 'react'; //Last trial working
// // import { useState, useEffect, useRef } from 'react'; //Trial
// import { Carousel, Button, Card } from 'react-bootstrap';
// import img1 from '../images/img1.jpg';
// import img1filter from '../images/img1filter.jpg';
// import img2 from '../images/img2.jpg';
// import img2filter from '../images/img2filter.jpg';
// import img3 from '../images/img3.jpg';
// import img3filter from '../images/img3filter.jpg';
// import img4 from '../images/img4.jpg';
// import img4filter from '../images/img4filter.jpg';
// import img5 from '../images/img5.jpg';
// import img5filter from '../images/img5filter.jpg';

// function ServiciosCarousel() {
//   const [index, setIndex] = useState(0);
//   const [hoveredCard, setHoveredCard] = useState(null);
//     //Prueba medida pantalla
//     const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
//   //Prueba medidas carta
//   // const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
//   // const firstCardRef = useRef(null); // Referencia para medir la primera carta

//   // const handleSelect = (selectedIndex) => setIndex(selectedIndex); //Controla la diapositiva activa (se actualiza con el estado) -> WORKING!!

//   // Información de cada carta
//   const services = [
//     {
//       title: "Soluciones legales.",
//       description: "Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.",
//       imgDefault: img1filter,
//       imgHover: img1
//     },
//     {
//       title: "Soluciones de negocio y backoffice.",
//       description: "Ofrecemos soluciones de negocio y backoffice diseñadas para impulsar el crecimiento diario de tu empresa, optimizando operaciones y fortaleciendo cada área clave para tu éxito.",
//       imgDefault: img2filter,
//       imgHover: img2
//     },
//     {
//       title: "Comunicaciones estratégicas.",
//       description: "Brindamos soluciones de comunicación estratégica que fortalecen tu imagen y marca, mejoran tu reputación y anticipan riesgos legales y regulatorios.",
//       imgDefault: img3filter,
//       imgHover: img3
//     },
//     {
//       title: "Capacitación y coach empresarial.",
//       description: "Ofrecemos capacitación y coaching empresarial personalizados para potenciar habilidades, mejorar la comunicación y transformar la cultura organizacional.",
//       imgDefault: img4filter,
//       imgHover: img4
//     },
//     {
//       title: "Sostenibilidad y RCE.",
//       description: "Potenciamos la sostenibilidad empresarial y el trabajo pro bono, impulsando un impacto positivo en comunidades y promoviendo prácticas responsables.",
//       imgDefault: img5filter,
//       imgHover: img5
//     }
//   ];
//   //Tomar medidas de la pantalla (trial)
//   useEffect(() => {
//     const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   //Tomar medidas de una carta como referencia (trial)
//   // useEffect(() => {
//   //   if (firstCardRef.current) {
//   //     // Obtiene las dimensiones de la primera carta
//   //     const { width, height } = firstCardRef.current.getBoundingClientRect();
//   //     setCardSize({ width, height });
//   //   }
//   // }, []);
//   //Tomar medidas referencia img5filter
//   // useEffect(() => {
//   //   const img = new Image();
//   //   img.src = img5filter;
//   //   img.onload = () => setCardSize({ width: img.width, height: img.height });
//   // }, []);

//   // Manejo de navegación manual
//   const handlePrev = () => setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
//   const handleNext = () => setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));


//   return (
//     <div id='services' className="container">
//       <h2 className='col-md-2 offset-md-5'>Servicios</h2>
//       <div className='custom-border-box text-center col-md-8 offset-md-2 mb-4'>
//         <div className="left-corner"></div>
//         <div className="right-corner"></div>
//         <p className='text-muted'>En AM5 ofrecemos soluciones estratégicas para personas, startups y empresas que buscan
//           apoyo integral en el mundo legal, de negocios y comunicación pública. Nos especializamos en:</p>
//       </div>

//       {/* Botones de navegación */}
//       <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
//         <Button variant="outline-dark" onClick={handlePrev} className="rounded-circle p-2">
//           ⬅️
//         </Button>
//         <div className='rounded-5 border border-black px-4 py-2 fw-semibold'>Desliza</div>
//         <Button variant="outline-dark" onClick={handleNext} className="rounded-circle p-2">
//           ➡️
//         </Button>
//       </div>

//       {/* Slider */}
//       <Carousel
//         // fade
//         className='custom-carousel'
//         activeIndex={index}
//         // onSelect={handleSelect} //WORKING!!
//         // indicators={true} //WORKING!!
//         // interval={null} // Desactiva el autoplay (para hacer pruebas, luego volver a habilitar) -> WORKING!!
//         onSelect={setIndex}
//         indicators={true}
//         controls={false} // Oculta controles prev y next por defecto
//         interval={null} // Desactiva el autoplay (para hacer pruebas, luego volver a habilitar)
//       >
//         {/* {services.map((service, idx) => ( */}
//         {services.map((_, idx) => (
//           <Carousel.Item key={idx}>
//             <div className="d-flex justify-content-center gap-3">
//               {services
//                 // .slice(idx, idx + 3) // Toma tres elementos consecutivos
//                 // .concat(services.slice(0, Math.max(0, idx + 3 - services.length))) // Cicla si se pasa
//                 // .slice(idx, idx + (isSmallScreen ? 1 : 3)) //Medidas pantalla (working)
//                 // .concat(services.slice(0, Math.max(0, idx + (isSmallScreen ? 1 : 3) - services.length))) //Medidas pantalla (working)
//                 .slice(index, index + (isSmallScreen ? 1 : 3)) //Medidas pantalla (correr solo 1 card)
//                 .concat(services.slice(0, Math.max(0, index + (isSmallScreen ? 1 : 3) - services.length))) //Medidas pantalla (correr solo 1 card)
//                 // .map((service, subIdx) => (
//                 .map((service, subIdx) => {
//                   // Identifica la carta central para el efecto hover
//                   const isCenterCard = subIdx === 1;

//                   return (
//                     <Card
//                       // className='text-center mb-5'
//                       // className={`text-center mb-5 mt-2 ${isCenterCard && hoveredCard === subIdx ? 'hovered' : ''}`} //Working
//                       // className={`text-center mb-5 ${subIdx === (isSmallScreen ? 0 : 1) ? 'highlight-hover' : ''}`} //Screen size trial working!!
//                       className={`text-center mb-5 ${isCenterCard && hoveredCard === subIdx ? 'hovered' : ''}`} //Correcting slider trial
//                       key={subIdx}
//                       // ref={subIdx === 0 ? firstCardRef : null} // Ref solo para la primera carta (medidas)
//                       // style={{
//                       //   width: cardSize.width ? `${cardSize.width}px` : '18rem',
//                       //   height: cardSize.height ? `${cardSize.height}px` : 'auto',
//                       //   width: `${cardSize.width}px`,
//                       //   height: `${cardSize.height}px`,
//                       // }}
//                       style={{ width: '18rem', transition: 'transform 0.3s' }}
//                       // onMouseEnter={() => isCenterCard && setHoveredCard(subIdx)} // Working
//                       onMouseEnter={() => setHoveredCard(subIdx === (isSmallScreen ? 0 : 1) ? subIdx : null)} //Screen size trial
//                       onMouseLeave={() => setHoveredCard(null)}
//                     // style={{ width: '18rem' }}
//                     // onMouseEnter={() => setHoveredCard(idx)}
//                     // onMouseLeave={() => setHoveredCard(null)}
//                     >
//                       <Card.Img
//                         variant="top"
//                         // src={hoveredCard === idx ? service.imgHover : service.imgDefault}
//                         src={isCenterCard && hoveredCard === subIdx ? service.imgHover : service.imgDefault} //WORKING!!
//                         // src={hoveredCard === subIdx ? service.imgHover : service.imgDefault} //Correcting slider trial
//                         alt={service.title}
//                       />
//                       <Card.Body>
//                         <Card.Title>{service.title}</Card.Title>
//                         <Card.Text>{service.description}</Card.Text>
//                         <Button variant="outline-warning bg-dark">Ver más</Button>
//                       </Card.Body>
//                     </Card>
//                   );
//                   // ))}
//                 })}
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//       <div className='custom-hr rounded w-75 mb-4 mt-4'></div>
//       {/* Animación para elevar la carta central -> styled-jsx */}
//       <style jsx>{`
//         .hovered {
//           transform: translateY(-10px); /* Eleva la carta central al hacer hover */
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ServiciosCarousel;

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