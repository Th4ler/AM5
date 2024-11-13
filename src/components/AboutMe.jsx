//insertar foto / titulo / descripcion (card -> only text) / 4 toggle buttons (dropdown) // Cambiar a ACORDEON
//BS-react framework try --> container / row  / col (img-descripcio-botons)
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  const aboutDropLeft = {
    'Experiencia': [
      '- Abogado en VTR (2015 - 2017).',
      '- Jefe Legal en Axity (2017 - 2019).',
      '- Coordinador Legal en CNTV (2021 - 2022).',
      '- Jefe Legal en Dafiti (2022 - 2023).',
      '- Profesor de Derecho en Universidad Autónoma de Chile (2021 - a la fecha).',
      '- Profesor de Derecho en Universidad Academia de Humanismo Cristiano (2023 - a la fecha).'
    ],
    'Educación': [
      '- Abogado, Licenciado en Ciencias Jurídicas y Sociales.',
      '   Universidad Bernardo O\'Higgins (2015).',
      '- Master en Derecho de la Empresa y Negocios.',
      '   Pontificia Universidad Católica de Chile (2017).'
    ]

  };
  const aboutDropRight = {
    'Idiomas': [
      '- Español: Nativo.',
      '- Inglés: Avanzado (C1).'
    ],
    'Membresía': [
      '- Miembro del Colegio de Abogados.',
      '- Miembro de la Asociación de Desarrolladores.'
    ]
  }

  return (
    <Row>
      <h2>Sobre Mí</h2>
      <Col xs={12} md={4}>
        <img src="/path/to/foto.jpg" alt="Foto del cliente" className="img-fluid" />
      </Col>
      <Col xs={12} md={8}>
        <Card className="mb-2">
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Andrés Madariaga</Card.Subtitle>
            <Card.Text>
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
          <Col xs={12} md={6}>
            {Object.keys(aboutDropLeft).map((item, idx) => (
              <div key={idx} className="mb-2">
                <DropdownButton id={`dropdown-${item}`} title={item} variant="outline-warning">
                  {aboutDropLeft[item].map((text, index) => (
                    <Dropdown.ItemText key={index}>{text}</Dropdown.ItemText>
                  ))}
                </DropdownButton>
              </div>
            ))}
          </Col>
          <Col xs={12} md={6}>
            {Object.keys(aboutDropRight).map((item, idx) => (
              <div key={idx} className="mb-2">
                <DropdownButton id={`dropdown-${item}`} title={item} variant="outline-warning">
                  {aboutDropRight[item].map((text, index) => (
                    <Dropdown.ItemText key={index}>{text}</Dropdown.ItemText>
                  ))}
                </DropdownButton>
              </div>
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
import Accordion from 'react-bootstrap/Accordion';

//ACORDEON -> cambiar el dropdown per acordeó -> 4 acordeons
function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AboutMe;

// //First try working - BS vanilla & react
// import { useState } from 'react';
// import { Button, Collapse } from 'react-bootstrap';

// function AboutMe() {
//   const [open, setOpen] = useState({});

//   const handleToggle = (key) => {
//     setOpen(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <div className='row'>
//     <div className="about-me container d-flex">
//       <img src="/path/to/foto.jpg" alt="Foto del cliente" className="img-fluid" />
//       <div className="description ms-4">
//         <h2>Sobre Mí</h2>
//         <p>Descripción del cliente...</p>
//         {['Experiencia', 'Estudios', 'Idiomas', 'Membresía'].map((item, idx) => (
//             <div key={idx} className="mb-2">
//             <Button variant="primary" onClick={() => handleToggle(item)}>
//               {item}
//             </Button>
//             <Collapse in={open[item]}>
//               <div>Contenido de {item}</div>
//             </Collapse>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default AboutMe;