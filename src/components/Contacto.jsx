//Crear formulario de contacto + submit (linkado a email?)
import { Form, Button } from 'react-bootstrap';

function Contacto() {
  return (
    <div id="contact" className="container">
      <h2>Contacto</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Enviar</Button>
      </Form>
    </div>
  );
}

export default Contacto;
