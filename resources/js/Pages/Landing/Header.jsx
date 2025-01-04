//Menú sin funcionalidad pantallas pequeñas
import logo from '../../../../public/am5-logo.png';

function Header() {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <div className="max-w-screen-xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center logo">
                    <a href="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo" className="h-12" />
                    </a>
                    <button className="lg:hidden text-gray-600" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <nav className="hidden lg:flex space-x-6 font-normal">
                        <a href="#inicio" className="relative text-lg text-gray-700 hover: after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full header-nav-link">Inicio</a>
                        <a href="#about" className="relative text-lg text-gray-700 hover: after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full header-nav-link">Sobre Mí</a>
                        <a href="#services" className="relative text-lg text-gray-700 hover: after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full header-nav-link">Servicios</a>
                        <a href="#media" className="relative text-lg text-gray-700 hover: after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full header-nav-link">Media</a>
                        <a href="#contact" className="relative text-lg text-gray-700 hover: after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full header-nav-link">Contacto</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

//Prueba Menú-toggle pantallas pequeñas con lógica
// import { useState } from 'react';
// import logo from '../../../../public/am5-logo.png';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="sticky top-0 bg-white shadow-md z-50">
//       <div className="max-w-screen-xl mx-auto px-4 py-4">
//         <div className="flex justify-between items-center logo">
//           {/* Logo */}
//           <a href="/" className="flex items-center space-x-2">
//             <img
//               src={logo}
//               alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo"
//               className="h-12"
//             />
//           </a>

//           {/* Botón de menú (toggle) */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden text-gray-600"
//             aria-label="Toggle menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>

//           {/* Navegación */}
//           <nav
//             className={`${
//               isMenuOpen ? 'block' : 'hidden'
//             } lg:flex space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white shadow-lg lg:shadow-none font-sans font-normal`}
//           >
//             <a
//               href="#inicio"
//               className="block lg:inline-block relative text-lg text-gray-700 hover:after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full px-4 py-2 lg:py-0"
//             >
//               Inicio
//             </a>
//             <a
//               href="#about"
//               className="block lg:inline-block relative text-lg text-gray-700 hover:after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full px-4 py-2 lg:py-0"
//             >
//               Sobre Mí
//             </a>
//             <a
//               href="#services"
//               className="block lg:inline-block relative text-lg text-gray-700 hover:after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full px-4 py-2 lg:py-0"
//             >
//               Servicios
//             </a>
//             <a
//               href="#media"
//               className="block lg:inline-block relative text-lg text-gray-700 hover:after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full px-4 py-2 lg:py-0"
//             >
//               Media
//             </a>
//             <a
//               href="#contact"
//               className="block lg:inline-block relative text-lg text-gray-700 hover:after:content-[''] after:block after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full px-4 py-2 lg:py-0"
//             >
//               Contacto
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
