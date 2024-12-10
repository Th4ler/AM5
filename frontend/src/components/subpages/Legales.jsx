// //Service Page - Soluciones legales
// https://www.npmjs.com/package/reactjs-flip-card
//PATH TESTING -> WORKING
const Legales = () => {
    return (
      <div className="text-center mt-5">
        <h2>Testing</h2>
      </div>
    );
  };
  
  export default Legales;
// import Header from '../Header'
// import logo from '../subpages/assets/am5-logo.png';
// import FlipCard from "reactjs-flip-card";
// // import ReactFlipCard from 'reactjs-flip-card'
// import { useState } from 'react'
// import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// import legalImage from "../images/legal-bg.jpg"; // Imagen de fondo encabezado
// import cardImage from "../images/card-img.jpg"; // Ejemplo de imagen para las cartas

// const Legales = () => {
//     const [isExpanded, setIsExpanded] = useState(false); // Estado para el botón colapsable
//     const navigate = useNavigate(); // Hook para redirigir a la página anterior
  
//     // Lista de enlaces
//     const links = [
//       { name: "Legales", path: "/legales" },
//       { name: "Negocios", path: "/negocios" },
//       { name: "Comunicaciones", path: "/comunicaciones" },
//       { name: "Coach", path: "/coach" },
//       { name: "Sostenibilidad", path: "/sostenibilidad" },
//     ];
  
//     return (
//       <>
//         {/* Header fijo */}
//         <Header />
  
//         {/* Sección decorativa */}
//         <div className="decorative-section d-flex" id="legales">
//           <div className="left-section w-66" style={{ backgroundImage: `url(${legalImage})` }} />
//           <div className="right-section w-33 p-4 d-flex flex-column align-items-center">
//             <h2>Soluciones legales</h2>
//             <Button
//               variant="dark"
//               className="rounded-pill mt-4 collapsible-btn d-flex align-items-center"
//               onClick={() => setIsExpanded(!isExpanded)}
//             >
//               Ver más
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="yellow"
//                 viewBox="0 0 16 16"
//                 className={`ms-2 arrow-icon ${isExpanded ? "up" : "down"}`}
//               >
//                 <path d="M8 4l4 4H4l4-4z" />
//               </svg>
//             </Button>
//             {isExpanded && (
//               <div className="links-list mt-3">
//                 {links.map((link, idx) => (
//                   <p key={idx}>
//                     <a href={link.path} className="text-decoration-none text-warning">
//                       {link.name}
//                     </a>
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
  
//         {/* Sección de grid */}
//         <div className="cards-grid my-5 container">
//           <div className="row g-4">
//             {[...Array(6)].map((_, idx) => (
//               <div className="col-md-4" key={idx}>
//                 <FlipCard>
//                   <div className="card-front">
//                     <img src={cardImage} alt="Front" className="w-100" />
//                     <div className="card-info bg-light p-3 text-center">
//                       <img src={logo} alt="Logo" className="mb-2" style={{ height: "50px" }} />
//                       <h5>Título {idx + 1}</h5>
//                     </div>
//                   </div>
//                   <div className="card-back d-flex flex-column align-items-center justify-content-center">
//                     <div className="highlight-box p-2 mb-3 text-warning">
//                       <h5>Detalles</h5>
//                     </div>
//                     <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
//                   </div>
//                 </FlipCard>
//               </div>
//             ))}
//           </div>
//         </div>
  
//         {/* Botón para volver */}
//         <div className="back-button-section text-center mb-5">
//           <OverlayTrigger
//             placement="top"
//             overlay={<Tooltip id="tooltip-back">Atrás</Tooltip>}
//           >
//             <Button
//               variant="dark"
//               className="rounded-circle back-btn d-flex align-items-center justify-content-center"
//               onClick={() => navigate(-1)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="yellow"
//                 viewBox="0 0 16 16"
//                 width="24"
//                 height="24"
//               >
//                 <path d="M11 1.5 5.5 8 11 14.5V10H3V6h8V1.5z" />
//               </svg>
//             </Button>
//           </OverlayTrigger>
//         </div>
//       </>
//     );
//   };
  
//   export default Legales;
