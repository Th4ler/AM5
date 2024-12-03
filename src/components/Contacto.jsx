//Crear formulario de contacto + submit (linkado a email?)
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className='col-md-2 offset-md-5 mb-5'>Contacto</h2>
        <div className="form-container bg-light mb-5">
          <div className="custom-form-border mx-3">
            <div className="left-corner"></div>
            <div className="right-corner"></div>
            <Form className="m-3">
              <Row>
                <h3 className="mb-3">Hablemos!</h3>
                {/* Columna Izquierda */}
                <Col md={6}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3 ms-3">
                        <Form.Label>Nombre:</Form.Label>
                        <InputGroup className="custom-input-group">
                          <Form.Control
                            type="text"
                            placeholder="Andrés"
                          />
                          <InputGroup.Text className="custom-icon"> 
                            <i className="bi bi-person-circle"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>

                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3 ms-3">
                        <Form.Label>Apellido:</Form.Label>
                        <InputGroup className="custom-input-group">
                          <Form.Control
                            type="text"
                            placeholder="Madariaga"
                          />
                          <InputGroup.Text className="custom-icon">
                            <i className="bi bi-person-circle"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3 ms-3">
                    <Form.Label>Correo Electrónico:</Form.Label>
                    <InputGroup className="custom-input-group">
                    <Form.Control type="email" placeholder="ejemplo1@am5.com" />
                    <InputGroup.Text className="custom-icon"> 
                            <i className="bi bi-envelope"></i>
                          </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3 ms-3">
                    <Form.Label>Teléfono:</Form.Label>
                    <InputGroup className="custom-input-group">
                    <Form.Control type="text" placeholder="+56608747213" />
                    <InputGroup.Text className="custom-icon">
                            <i className="bi bi-telephone"></i>
                          </InputGroup.Text>
                    </InputGroup>
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
                <Col md={{ span: 2 }} className="text-center ms-3">
                  <Button type="submit" className="submit-btn text-dark">
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
      <div className='custom-hr rounded w-75 mt-4'></div>
    </section>
  );
};

export default ContactForm;