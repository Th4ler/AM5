//Logo + NavMenu /
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/am5-logo.png';

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
                    <Nav.Link href="#media">Media</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

//Pedir e insertar logo en SVG!