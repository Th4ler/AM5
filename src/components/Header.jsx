//Logo + NavMenu / Insertar rutas navegacion
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/am5-logo.png';
// import '../App.css'

function Header() {
    return (
        <Navbar sticky="top" bg="light" expand="lg" className="px-3">
            <Navbar.Brand href="#home" className="logo">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="underline" defaultActiveKey="/" className="ms-auto custom-underline-color">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="#about">Sobre Mí</Nav.Link>
                    <Nav.Link href="#services">Servicios</Nav.Link>
                    <Nav.Link href="#contenidos">Contenidos</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

// function Header() {
//   return (
//     <Navbar bg="light" expand="lg" className="px-3">
//          <Navbar.Brand href="#home" className="logo">
//           <img src={logo} alt="Logo" />
//         </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto">
//           <Nav.Link href="#about">About Me</Nav.Link>
//           <Nav.Link href="#services">Servicios</Nav.Link>
//           <Nav.Link href="#contenidos">Contenidos</Nav.Link>
//           <Nav.Link href="#contact">Contacto</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

// function Header() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand logo" href="#">
//                 <img src={logo} alt="Logo" />
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div className="navbar-nav">
//                     <a className="nav-item nav-link" href="#">Sobre Mi</a>
//                     <a className="nav-item nav-link" href="#">Servicios</a>
//                     <a className="nav-item nav-link " href="#">Contenidos</a>
//                     <a className="nav-item nav-link" href="#">Contacto</a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Header;

//Pedir e insertar logo en SVG!
//Añadida linia img - logo --> modificar!!
//LAST WORKING - REACT BOOTSTRAP
// import { Navbar, Nav } from 'react-bootstrap';
// import logo from '../assets/am5-logo.png';
// import '../App.css'

