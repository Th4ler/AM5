//insertar foto / titulo / descripcion (card: quitar bordes --> only text +añadir underline bajo el nombre)
//accordion-inner-border-radius? (primary)
//Añadir disabled --> membresía
//Optimizar: 2 arrays --> right & left (2 columnas desplegables + mb-2)
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function AboutMe() {
  const aboutEducacion = {
    'Educación': [
      '- Abogado, Licenciado en Ciencias Jurídicas y Sociales.',
      '   Universidad Bernardo O\'Higgins (2015).',
      '- Master en Derecho de la Empresa y Negocios.',
      '   Pontificia Universidad Católica de Chile (2017).'
    ]
  };
  const aboutExperiencia = {
    'Experiencia': [
      '- Abogado en VTR (2015 - 2017).',
      '- Jefe Legal en Axity (2017 - 2019).',
      '- Coordinador Legal en CNTV (2021 - 2022).',
      '- Jefe Legal en Dafiti (2022 - 2023).',
      '- Profesor de Derecho en Universidad Autónoma de Chile (2021 - a la fecha).',
      '- Profesor de Derecho en Universidad Academia de Humanismo Cristiano (2023 - a la fecha).'
    ]
  }
  const aboutIdiomas = {
    'Idiomas': [
      '- Español: Nativo.',
      '- Inglés: Avanzado (C1).'
    ]
  };
  const aboutMembresia = {
    'Membresía': [
      '- Miembro del Colegio de Abogados.'
    ]
  }

  return (
    <Row>
      <Row id='about'>
        <Col md={{span:3, offset:5}}>
        <h2 className='mb-4'>Sobre Mí</h2>
        </Col>
      </Row>
      <Col xs={12} md={4}>
        <img src="/path/to/foto.jpg" alt="Foto del cliente" className="img-fluid" />
      </Col>
      <Col xs={12} md={8}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Subtitle className="mb-2 p-2 custom-underline-color">Andrés Madariaga</Card.Subtitle>
            <Card.Text className='text-muted'>
              Soy Andrés Madariaga, abogado, profesor de derecho y emprendedor. Tras más
              de 10 años asesorando a empresas internacionales, descubrí una gran necesidad
              en el mundo legal y de negocios: personas, startups y empresas que no
              encuentran soluciones legales realmente alineadas con sus desafíos. Muchas
              veces, los servicios legales se presentan como un "producto" despersonalizado
              que no entiende ni se adapta a las necesidades únicas de cada negocio, lo que
              genera confusión, sobrecostos y malos resultados.
            </Card.Text>
          </Card.Body>
        </Card>
        <Row>
          <Col xs={12} md={6} className="custom-accordion mb-4">
            <Accordion>
              {Object.keys(aboutEducacion).map((section, idx) => (
                <Accordion.Item eventKey={String(idx)} key={idx}>
                  <Accordion.Header>{section}</Accordion.Header>
                  <Accordion.Body className='text-muted'>
                    <ul>
                      {aboutEducacion[section].map((text, index) => (
                        <li key={index}>{text}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col xs={12} md={6} className="custom-accordion mb-4">
            <Accordion>
              {Object.keys(aboutExperiencia).map((section, idx) => (
                <Accordion.Item eventKey={String(idx + 2)} key={idx}>
                  <Accordion.Header>{section}</Accordion.Header>
                  <Accordion.Body className='text-muted'>
                    <ul>
                      {aboutExperiencia[section].map((text, index) => (
                        <li key={index}>{text}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col xs={12} md={6} className="custom-accordion mb-4">
            <Accordion>
              {Object.keys(aboutIdiomas).map((section, idx) => (
                <Accordion.Item eventKey={String(idx)} key={idx}>
                  <Accordion.Header>{section}</Accordion.Header>
                  <Accordion.Body className='text-muted'>
                    <ul>
                      {aboutIdiomas[section].map((text, index) => (
                        <li key={index}>{text}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col xs={12} md={6} className="custom-accordion mb-4">
            <Accordion className='acordion-membresia'>
              {Object.keys(aboutMembresia).map((section, idx) => (
                <Accordion.Item eventKey={String(idx + 2)} key={idx}>
                  <Accordion.Header>{section}</Accordion.Header>
                  <Accordion.Body className='text-muted'>
                    <ul>
                      {aboutMembresia[section].map((text, index) => (
                        <li key={index}>{text}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Col>
      <div className='custom-hr rounded w-75 mb-4 mt-4'></div>
      </Row>
  );
}

export default AboutMe;