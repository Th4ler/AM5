import { useState, useRef } from 'react';
import aboutmePic from '../../../../public/images/aboutmePic.webp';
import DynamicalTabs from '../../Components/DynamicalTabs';

function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(null);
  // Para obtener una referencia al contenedor cuyo tamaño se va a animar
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
        <>
            Abogado, Licenciado en Ciencias Jurídicas y Sociales.
            <br />
            <strong>Universidad Bernardo O'Higgins</strong> (2015).
        </>,
        <>
            Master en Derecho de la Empresa y Negocios.
            <br />
            <strong>Pontificia Universidad Católica de Chile</strong> (2017).
        </>
      ]
    },
    {
      id: 'tab-3',
      label: 'Experiencia',
      content: [
        <>
          Profesor de Derecho - <strong> Universidad Academia de Humanismo Cristiano</strong>
          <br/>
          (2023 - a la fecha)
        </>,
        <>
          Profesor de Derecho - <strong>Universidad Autónoma de Chile</strong>
          <br/>
          (2021 - 2024)
        </>,
        <>
          Jefe Legal - <strong>Dafiti</strong>
          <br/>
          (2022 - 2023)
        </>,
        <>
          Coordinador Legal - <strong>Consejo Nacional de Televisión</strong>
          <br/>
          (2021 - 2022)
        </>,
        <>
          Jefe Legal - <strong>Axity</strong>
          <br/>
          (2017 - 2019)
        </>,
        <>
          Abogado corporativo - <strong>VTR</strong>
          <br/>
          (2015 - 2017)
        </>,
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
    <div className="flex flex-col md:mx-16">
      <div id="about" className="flex justify-center text-center py-8">
        <h2 className="am5-border p-3 pe-5 text-3xl text-gray-600">Sobre mí</h2>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="flex justify-center md:w-1/3 w-full px-10 md:px-0">
          <img src={aboutmePic} alt="Foto de Andrés Madariaga" className="object-contain w-full" />
        </div>
        <div className="md:pe-0 px-10 md:pt-0 pt-10 md:w-2/3 w-full">
          <div className="mb-4 custom-card">
            <h3
              className={`text-2xl w-full text-left text-gray-600`}
            >
              Andrés Madariaga
            </h3>

            <p className="text-gray-500">
              <span className="me-2">
                <i className="bi bi-person-circle"></i>
              </span>
              Director ejecutivo

              <br />

              <span className="me-2">
                <i className="bi bi-envelope"></i>
              </span>
              andres.madariaga@am5.cl

              <br />

              <span className="me-2">
                <i className="bi bi-telephone"></i>
              </span>
              +56963441988
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
      {/* <div className="w-3/4 mx-auto mt-6 border-t-2 border-gray-300"></div> */}
      <div className='custom-hr rounded mx-auto mt-3'></div>
    </div>
  );
}

export default AboutMe;