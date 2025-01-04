//Home: Logo + NavMenu
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/am5-logo.png';

function Header() {
    return (
        <Navbar sticky="top" bg="white" expand="lg" className="Navbar">
            <Navbar.Brand href="/" className="logo">
                <img src={logo} alt="Imagen del logo de la start-up AM5 con su característico toque de color amarillo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav defaultActiveKey="#inicio" className="ms-auto custom-underline-color" style={{ borderBottom: 'none' }}>
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
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