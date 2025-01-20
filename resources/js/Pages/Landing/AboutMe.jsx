import { useState, useRef } from 'react';
import aboutmePic from '../../../../public/images/aboutmePic.webp';
import DynamicalTabs from '../../Components/DynamicalTabs';

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  // Para obtener una referencia al contenedor cuyo tamaño se va a animar
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleButton = () => {
    setIsExpanded(!isExpanded);
  };

  const tabsData = [
    // {
    //   id: 'tab-n',
    //   label: 'Historia',
    //   content: [
    //     {
    //       title: 'Lorem ipsum...',
    //       content: 'Lorem ipsum...↳'
    //     },
    //     // ... más items con formato de acordeón
    //   ]
    // },
    {
      id: 'tab-1',
      label: 'Historia',
      content: [
        'Tras más de 10 años liderando áreas legales en empresas, entendí que el derecho solo funciona cuando se conecta con los negocios. Hoy ayudo a empresas y emprendedores a tomar decisiones estratégicas que protejan y potencien su crecimiento.'
      ]
    },
    {
      id: 'tab-2',
      label: 'Educación',
      content: [
        {
          title: 'Abogado, Licenciado en Cs. Jurídicas - U. Bernardo O\'Higgins',
          content: (
            <p>
              <strong>Periodo: </strong>
              2015
            </p>
          )
        },
        {
          title: 'Máster (LLM) en Derecho de la Empresa - Pontificia U. Católica de Chile',
          content: (
            <p>
              <strong>Periodo: </strong>
              2017
            </p>
          )
        },
      ]
    },
    {
      id: 'tab-3',
      label: 'Experiencia',
      content: [
        {
          title: 'Profesor de Derecho - U. Academia de Humanismo Cristiano',
          content: (
            <p>
              <strong>Periodo: </strong>
              2023 - a la fecha
            </p>
          )
        },
        {
          title: 'Profesor de Derecho - U. Autónoma de Chile',
          content: (
            <p>
              <strong>Periodo: </strong>
              2021 - 2024
            </p>
          )
        },
        {
          title: 'Jefe Legal - Dafiti',
          content: (
            <p>
              <strong>Periodo: </strong>
              2022 - 2023
            </p>
          )
        },
        {
          title: 'Coordinador Legal - Consejo Nacional de Televisión',
          content: (
            <p>
              <strong>Periodo: </strong>
              2021 - 2022
            </p>
          )
        },
        {
          title: 'Jefe Legal - Axity',
          content: (
            <p>
              <strong>Periodo: </strong>
              2017 - 2019
            </p>
          )
        },
        {
          title: 'Abogado corporativo - VTR',
          content: (
            <p>
              <strong>Periodo: </strong>
              2015 - 2017
            </p>
          )
        }
      ]
    },
  ];

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
    <section className="flex flex-col px-10">

      <div id="about" className="flex justify-center text-center pt-8 pb-10">
        <h2 className="am5-border p-3 pe-5 2xl:text-3xl text-2xl text-gray-600">Sobre mí</h2>
      </div>

      <div className="flex justify-center md:flex-row md:flex-row flex-wrap flex-wrap flex-col max-w-screen-2xl">
        <div className="flex justify-center md:w-1/3 w-full px-10 md:px-0">
          <img src={aboutmePic} alt="Foto de Andrés Madariaga" className="object-contain w-full" />
        </div>
        <div className="md:pe-0 px-10 md:pt-0 pt-10 md:w-2/3 w-full">
          <div className="mb-4 custom-card">
            <button
              onClick={() => toggleAccordion(0)}
              className={`flex 2xl:text-3xl text-2xl text-left border-0 focus:outline-none ${activeIndex !== 0 ? 'collapsed' : ''
                }`}
            >
              <span className="text-gray-600">Andrés Madariaga</span>
              <span className="flex justify-center items-center ms-2 h-8 w-8 bg-gray-600 rounded-full shadow-md p-1 text-[#FFFF29] transform transition-transform duration-300 ease-in-out">
                {activeIndex === 0 ? '−' : '+'}
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[0] = el)}
              className={`mt-2 overflow-hidden transition-[max-height] duration-500 ease-in-out`}
              style={{
                maxHeight:
                  activeIndex === 0
                    ? `${contentRefs.current[0]?.scrollHeight}px`
                    : '0px',
              }}
            >
              <div className="text-gray-500 space-y-1">
                <p>
                  <i className="bi bi-person-circle me-2"></i>
                  Director ejecutivo
                </p>
                <p>
                  <i className="bi bi-envelope me-2"></i>
                  andres.madariaga@am5.cl
                </p>
                <p>
                  <i className="bi bi-telephone me-2"></i>
                  +56963441988
                </p>
              </div>
            </div>

          </div>

          <div className="flex w-full mx-auto">
            <DynamicalTabs
              tabs={tabsData}
              defaultActiveTab="tab-1"
              className="my-custom-class"
              tabClassName="custom-tab-class"
              contentClassName="custom-content-class"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;