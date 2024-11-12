//insertar foto / titulo / descripcion / 4 toggle buttons
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

function AboutMe() {
  const [open, setOpen] = useState({});

  const handleToggle = (key) => {
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="about-me container d-flex">
      <img src="/path/to/foto.jpg" alt="Foto del cliente" className="img-fluid" />
      <div className="description ms-4">
        <h2>About Me</h2>
        <p>Descripción del cliente...</p>
        {['Experiencia', 'Estudios', 'Idiomas', 'Membresía'].map((item, idx) => (
          <div key={idx} className="mb-2">
            <Button variant="primary" onClick={() => handleToggle(item)}>
              {item}
            </Button>
            <Collapse in={open[item]}>
              <div>Contenido de {item}</div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
