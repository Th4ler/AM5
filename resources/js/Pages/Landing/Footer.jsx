//Migración footer bootstrap -> tailwind
import logo from '../../../../public/am5-logo.png';
import { MapPinIcon } from '@heroicons/react/24/outline'  
import { PhoneIcon } from '@heroicons/react/24/outline'  
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline'  

function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center md:text-left">

          {/* Columna 1: QR */}
          <div className="w-full md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
            <img 
              src={logo} 
              alt="QR que conduce a la página de inicio de AM5" 
              className="max-w-[150px]"
            />
          </div>

          {/* Columna 2: Contactos */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4">Contacto</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPinIcon className="size-6 text-[#FFFF29] mr-2" /> 
                <span>Antonio Bellet 193, Oficina 1210, Providencia, RM</span>
              </li>
              <li className="flex items-start">
              <PhoneIcon className="size-6 text-[#FFFF29] mr-2" />
              <span>+569 6344 1988</span>
              </li>
              <li className="flex items-start">
              <EnvelopeOpenIcon className="size-6 text-[#FFFF29] mr-2" />
              <span>contacto@claimy.cl</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4">Redes Sociales</h5>
            <div className="flex flex-wrap justify-center md:justify-start">
              <ul className="w-1/2 space-y-2">
                <li>
                  <a 
                    href="https://spotify.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-yellow-500"
                  >
                    <i className="bi bi-spotify mr-2"></i>Spotify
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-yellow-500"
                  >
                    <i className="bi bi-instagram mr-2"></i>Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-yellow-500"
                  >
                    <i className="bi bi-facebook mr-2"></i>Facebook
                  </a>
                </li>
              </ul>
              <ul className="w-1/2 space-y-2">
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-yellow-500"
                  >
                    <i className="bi bi-linkedin mr-2"></i>LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-yellow-500"
                  >
                    <i className="bi bi-youtube mr-2"></i>YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-yellow-500"
                  >
                    <i className="bi bi-tiktok mr-2"></i>TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 4: Logo */}
          <div className="w-full md:w-1/4 flex justify-center items-center">
            <img 
              src={logo} 
              alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo" 
              className="max-w-[100px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//Footer made with bootstrap
// import logo from '../../../../public/am5-logo.png';
// // import qr from '../assets/am5-qr.png'; //Pedir qr

// function Footer() {
//   // New trial 
//   return (
//     <footer id='footer' className="footer mb-3"> {/* Cambiar mb-3 general por mb-individual en cada div?? -> mejora version mobil */}
//       <div className="container">
//         {/* <div className="custom-border-top mx-auto"></div> */}
//         <div className="row text-center text-md-start">
//           {/* Columna 1: QR */}
//           <div className="col-md-3 d-flex justify-content-center align-items-center mb-3">
//             <img src={logo} alt="QR que conduce a la página de inicio de AM5" className="img-fluid" style={{ maxWidth: "150px" }} />
//           </div>

//           {/* Columna 2: Contactos */}
//           <div className="col-md-3 mb-3">
//             <h5>Contacto</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2">
//                 <i className="bi bi-geo pulse-icon"></i>
//                 Antonio Bellet 193, Oficina 1210, Providencia, RM
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-telephone pulse-icon"></i>
//                 +569 6344 1988
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-envelope-paper pulse-icon"></i>
//                 contacto@claimy.cl
//               </li>
//             </ul>
//           </div>

//           {/* Columna 3: Redes Sociales */}
//           <div className="col-md-3 mb-3">
//             <h5>Redes Sociales</h5>
//             <div className="row">
//               <div className="col">
//                 <ul className="list-unstyled">
//                   <li className='mb-2'><i className="bi bi-spotify pulse-icon"></i><a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-muted">Spotify</a></li> {/* Prueba pulse animation -> pulse-icon */}
//                   <li className='mb-2'><i className="bi bi-instagram pulse-icon"></i><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted">Instagram</a></li>
//                   <li><i className="bi bi-facebook pulse-icon"></i><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted">Facebook</a></li>
//                 </ul>
//               </div>
//               <div className="col">
//                 <ul className="list-unstyled">
//                   <li className='mb-2'><i className="bi bi-linkedin pulse-icon"></i><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted">LinkedIn</a></li>
//                   <li className='mb-2'><i className="bi bi-youtube pulse-icon"></i><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted">YouTube</a></li>
//                   <li><i className="bi bi-tiktok pulse-icon"></i><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted">TikTok</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Columna 4: Logo */}
//           <div className="col-md-3 d-flex justify-content-center align-items-center mb-3">
//             <img src={logo} alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo" className="img-fluid" style={{ maxWidth: "100px" }} />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;