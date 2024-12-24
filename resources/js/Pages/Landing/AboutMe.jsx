import { useState } from 'react';
import aboutmePic from '../../../../public/images/aboutmePic.webp';

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      <div id="about" className="flex justify-center text-center py-8">
        <h2 className="am5-border text-3xl font-bold p-3">Sobre Mí</h2>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="flex justify-center md:w-1/3 w-full">
          <img src={aboutmePic} alt="Foto de Andrés Madariaga" className="w-60 h-auto" />
        </div>
        <div className="px-5 md:w-2/3 w-full">
          <div className="mb-4 custom-card">
            <div className="aboutme-button">
              <button
                onClick={() => toggleAccordion(0)}
                className="accordion-button w-full text-left relative"
              >
                Andrés Madariaga
              </button>
              <div className={`mt-2 ${activeIndex === 0 ? 'block' : 'hidden'}`}>
                <p className="text-sm text-gray-700">
                  Soy Andrés Madariaga, abogado, profesor de derecho y emprendedor. Tras más de 10 años asesorando a empresas internacionales, descubrí una gran necesidad en el mundo legal y de negocios: personas, startups y empresas que no encuentran soluciones legales realmente alineadas con sus desafíos.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutSections.map((section, idx) => (
              <div className="mb-4" key={idx}>
                <div>
                  <button
                    onClick={() => toggleAccordion(idx + 1)}
                    disabled={section.isDisabled}
                    className={`w-full text-left text-lg font-semibold text-gray-700 border-0 focus:outline-none ${section.isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                  >
                    {section.title}
                  </button>
                  <div className={`mt-2 ${activeIndex === idx + 1 ? 'block' : 'hidden'}`}>
                    <ul className="text-sm text-gray-600">
                      {section.content.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
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