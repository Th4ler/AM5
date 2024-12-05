//Home section - Sobre mí
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import aboutmePic from '../images/aboutmePic.webp';

function AboutMe() {
  const [activeKey, setActiveKey] = useState(null);
  const aboutSections = [
    {
      title: 'Educación',
      content: [
        '- Abogado, Licenciado en Ciencias Jurídicas y Sociales.',
        '  Universidad Bernardo O\'Higgins (2015).',
        '- Master en Derecho de la Empresa y Negocios.',
        '  Pontificia Universidad Católica de Chile (2017).'
      ]
    },
    {
      title: 'Experiencia',
      content: [
        '- Abogado en VTR (2015 - 2017).',
        '- Jefe Legal en Axity (2017 - 2019).',
        '- Coordinador Legal en CNTV (2021 - 2022).',
        '- Jefe Legal en Dafiti (2022 - 2023).',
        '- Profesor de Derecho en Universidad Autónoma de Chile (2021 - a la fecha).',
        '- Profesor de Derecho en Universidad Academia de Humanismo Cristiano (2023 - a la fecha).'
      ]
    },
    {
      title: 'Idiomas',
      content: [
        '- Español: Nativo.',
        '- Inglés: Avanzado (C1).'
      ]
    },
    {
      title: 'Membresía',
      content: ['- Miembro del Colegio de Abogados.'],
      isDisabled: true
    }
  ];

  return (
    <div className='d-flex flex-column'>
      <div id="about" className="d-flex justify-content-center text-center py-4">
        <h2 className="p-3">Sobre Mí</h2>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <Col xs={12} md={4} className='d-flex justify-content-center align-items-center'>
          <img src={aboutmePic} alt="Foto de Andrés Madariaga, CEO de la startup AM5" className="img-fluid" />
        </Col>
        <Col xs={12} md={8} className='p-5 pt-0'>
          <Card className="mb-4 custom-card">
            <Card.Body className='p-0'>
              
              <Accordion className='pt-4 pt-md-0'>
                <Accordion.Item eventKey="0" className='border-0'>
                  <Accordion.Header className='aboutme-button border-0 outline-0'>
                    <div className="custom-underline-color">Andrés Madariaga</div>
                  </Accordion.Header>
                  <Accordion.Body className='text-muted'>
                    <Card.Text className='text-muted'>
                      Soy Andrés Madariaga, abogado, profesor de derecho y emprendedor. Tras más de 10 años asesorando a empresas internacionales, descubrí una gran necesidad en el mundo legal y de negocios: personas, startups y empresas que no encuentran soluciones legales realmente alineadas con sus desafíos. Muchas veces, los servicios legales se presentan como un "producto" despersonalizado que no entiende ni se adapta a las necesidades únicas de cada negocio, lo que genera confusión, sobrecostos y malos resultados.
                    </Card.Text>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              
            </Card.Body>
          </Card>
          <Row>
            {aboutSections.map((section, idx) => (
              <Col xs={12} lg={6} className="custom-accordion mb-4" key={idx}>
                <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                  <Accordion.Item eventKey={String(idx)}>
                    <Accordion.Header as="button" disabled={section.isDisabled}>
                      {section.title}
                    </Accordion.Header>
                    <Accordion.Body className="text-muted">
                      <ul>
                        {section.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            ))}
          </Row>
        </Col>
      </div>
      <div className='custom-hr rounded w-75 mb-4 mt-4'></div>
    </div>
  );
}

export default AboutMe;