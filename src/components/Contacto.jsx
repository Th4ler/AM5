//Crear formulario de contacto + submit (linkado a email?)
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className='col-md-2 offset-md-5 mb-5'>Contacto</h2>
        <div className="form-container">
          <Form>
            <Row>
              {/* Columna Izquierda */}
              <Col md={6}>
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control type="text" placeholder="Andrés" />
                </Form.Group>
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Apellidos:</Form.Label>
                  <Form.Control type="text" placeholder="Madariaga" />
                </Form.Group>
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Correo Electrónico:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo1@am5.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Teléfono:</Form.Label>
                  <Form.Control type="text" placeholder="+56608747213" />
                </Form.Group>
              </Col>

              {/* Columna Derecha */}
              <Col md={6}>
                <Form.Group className="mb-3 ms-3">
                  <Form.Label>Cuéntanos tu caso:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Escribe tu mensaje..."
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Botón Submit */}
            <Row>
              <Col md={{ span: 2, offset: 5 }} className="text-center">
                <Button type="submit" className="submit-btn text-dark">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
      <div className='custom-hr rounded w-75 mt-4'></div>
    </section>
  );
};

export default ContactForm;

//Old contact form
// import { Form, Button } from 'react-bootstrap';

// function Contacto() {
//   return (
//     <div className='row'>
//     <div id="contact" className="container">
//       <h2 className='col-md-2 offset-md-5'>Contacto</h2>
//       <Form className='bg-tertiary'>
//         <Form.Group controlId="formName">
//           <Form.Label>Nombre</Form.Label>
//           <Form.Control type="text" placeholder="Ingrese su nombre" />
//         </Form.Group>
//         <Form.Group controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Ingrese su email" />
//         </Form.Group>
//         <Form.Group controlId="formMessage">
//           <Form.Label>Mensaje</Form.Label>
//           <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="mt-3">Enviar</Button>
//       </Form>
//     </div>
//     <div className='custom-hr rounded w-75 mt-4'></div>
//     </div>
//   );
// }

// export default Contacto;
