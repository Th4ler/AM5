//Home section - Sobre mí
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import aboutmePic from '../../../../public/images/aboutmePic.webp';

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
    <div className="flex flex-col">
      <div id="about" className="text-center py-8">
        <h2 className="am5-border text-3xl font-bold p-3">Sobre Mí</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex justify-center mb-6 md:mb-0">
          <img src={aboutmePic} alt="Foto de Andrés Madariaga" className="w-60 h-auto rounded-full" />
        </div>
        <div className="px-6 md:px-12">
          <div className="mb-4 bg-white shadow-lg rounded-lg p-6">
            <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="border-0 text-lg font-bold">
                  Andrés Madariaga
                </Accordion.Header>
                <Accordion.Body className="text-sm text-gray-700">
                  Soy Andrés Madariaga, abogado, profesor de derecho y emprendedor. Tras más de 10 años asesorando a empresas internacionales, descubrí una gran necesidad en el mundo legal y de negocios: personas, startups y empresas que no encuentran soluciones legales realmente alineadas con sus desafíos.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutSections.map((section, idx) => (
              <div className="mb-4" key={idx}>
                <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                  <Accordion.Item eventKey={String(idx)}>
                    <Accordion.Header as="button" disabled={section.isDisabled} className="text-lg font-semibold text-gray-700">
                      {section.title}
                    </Accordion.Header>
                    <Accordion.Body className="text-sm text-gray-600">
                      <ul>
                        {section.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto mt-6 border-t-2 border-gray-300"></div>
    </div>
  );
}

export default AboutMe;