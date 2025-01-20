// Template Soluciones Legales: Header + cabecera (imagen, title, button + descripción) + 4x3 cards reversibles (flipcard effect)
//Libreria flipcard -> https://www.npmjs.com/package/reactjs-flip-card -> npm install reactjs-flip-card
//Demo llibreria -> https://react-flip-card-demo.surge.sh/
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import ReactFlipCard from 'reactjs-flip-card';
import Header from '../Landing/Header';
import logo from '../../../../public/am5-logo.png';
import BackgroundImage from '../../../../public/images/soluciones-legales.webp';
import CorporateImage from '../../../../public/images/corporate-building.webp';
import MigracionImage from '../../../../public/images/laboral-y-migracion.webp';
import LitigiosImage from '../../../../public/images/litigios-y-arbitrajes.webp';
import ImpuestosImage from '../../../../public/images/impuestos.webp';
import InmobiliarioImage from '../../../../public/images/inmobiliario.webp';
import InsolvenciaImage from '../../../../public/images/insolvencia.webp';
import ComplianceImage from '../../../../public/images/compliance.webp';
import ConsumoImage from '../../../../public/images/consumo.webp';
import DatosImage from '../../../../public/images/datos.webp';
import FintechImage from '../../../../public/images/fintech.webp';
import PropIntelectImage from '../../../../public/images/propIndsIntelect.webp';
import VentureImage from '../../../../public/images/venture.webp';
import Spinner from '../../Components/Spinner';

const LegalCard = ({ title, description, image }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const cardStyles = {
        front: {
            borderRadius: '12px',
            width: '400px',
            height: '225px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            border: '3px solid #ccc',
            overflow: 'hidden',
            boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.4)',
        },
        back: {
            background: '#fff',
            borderRadius: '12px',
            width: '400px',
            height: '225px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            border: '1px solid #ccc',
        }
    };

    // Precargar la imagen
    const handleImagePreload = () => {
        const img = new Image();
        img.src = image;
        img.onload = () => setImageLoaded(true);
    };

    return (
        <ReactFlipCard
            flipTrigger="onHover"
            direction="vertical"
            frontStyle={cardStyles.front}
            backStyle={cardStyles.back}
            frontComponent={
                <div className="h-full w-full">
                    <LazyLoad
                        height={155}
                        offset={300}
                        threshold={0.95}
                        onContentVisible={handleImagePreload}
                    >
                        <div className="relative w-full h-full">
                            {/* Spinner que se muestra mientras la imagen no está cargada */}
                            {!imageLoaded && <Spinner />}

                            {/* Imagen de fondo con fade in cuando carga */}
                            <div
                                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />
                        </div>
                    </LazyLoad>
                    <div className="bg-white text-center flex flex-row items-center justify-center gap-2 px-2 py-6 absolute bottom-0 w-full z-10">
                        {/* <img src={logo} alt="Logo" className="w-10 h-10 logo" /> */}
                        <p className="text-gray-700 font-semibold m-0">{title}</p>
                    </div>
                </div>
            }
            backComponent={
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="custom-border-box">
                        <div className="left-corner" />
                        <div className="right-corner" />
                        <h3 className="text-lg text-gray-600 font-bold z-10 text-center">{title}</h3>
                        <p className="text-gray-600 text-sm text-justify z-10 mt-2 px-10">{description}</p>
                    </div>
                </div>
            }
        />
    );
};

const ServiceIntro = ({ showDescription, toggleDescription }) => {
    const [iconDirection, setIconDirection] = useState('down');

    const handleToggleDescription = () => {
        toggleDescription();
        setIconDirection(iconDirection === 'down' ? 'up' : 'down');
    };

    return (
        <div className="flex flex-wrap md:flex-nowrap items-center bg-white">
            <div className="w-full md:w-2/3 order-1 md:order-2">
                <img src={BackgroundImage} alt="Imagen de cabecera de la sección Soluciones legales" className="w-full max-h-96" />
            </div>
            <div className="w-full md:w-1/3 md:ps-12 px-6 flex flex-col items-start order-2 md:order-1">
                <h1 className="text-3xl font-semibold underline decoration-primary mb-4">Soluciones Legales</h1>
                {showDescription && (
                    <p className="text-gray-700 mb-4">
                        Ofrecemos soluciones legales integrales para personas, inversores, startups y empresas de todos los tamaños y sectores.
                    </p>
                )}
                <button
                    className="bg-gray-600 text-primary font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-gray-500"
                    onClick={handleToggleDescription}
                >
                    Ver más
                    <span className="flex justify-center items-center ms-2 text-3xl text-[#FFFF29] transform transition-transform duration-300 ease-in-out">
                        {iconDirection === 'down' ? '−' : '+'}
                    </span>
                </button>
            </div>
        </div>
    );
};

const LEGAL_SOLUTIONS = [
    { id: 1, title: 'Corporativo y M&A', description: 'Asesoría en asuntos corporativos, fusiones y adquisiciones, creación y modificación de sociedades, pacto de socios y venta de negocios.', image: CorporateImage },
    { id: 2, title: 'Venture Capital', description: 'Asesoría a startups e inversionistas en todas las etapas: creación, desarrollo, financiamiento y crecimiento de negocios.', image: VentureImage },
    { id: 3, title: 'Laboral y Migración', description: 'Asesoría en materia laboral, extranjería, contratación, despidos, políticas e investigaciones internas, negociaciones y litigios.', image: MigracionImage },
    { id: 4, title: 'Inmobiliario', description: 'Asesoría legal en la planificación, compra, financiamiento, permisos y comercialización de proyectos habitacionales, comerciales e infraestructurales.', image: InmobiliarioImage },
    { id: 5, title: 'Impuestos', description: 'Asesoría legal en la planificación tributaria de personas, empresas e inversionistas, representando ante el SII y tribunales tributarios.', image: ImpuestosImage },
    { id: 6, title: 'Litigios y Arbitrajes', description: 'Asesoría a clientes en conflictos civiles, comerciales, de consumo, regulatorios y arbitrajes nacionales.', image: LitigiosImage },
    { id: 7, title: 'Insolvencia y Reorganización', description: 'Asesoría en materias de insolvencia y reorganización de personas y empresas.', image: InsolvenciaImage },
    { id: 8, title: 'Compliance', description: 'Asesoría legal en cumplimiento normativo, diseñando estructuras y programas que mitigan riesgos y favorecen el crecimiento de los negocios.', image: ComplianceImage },
    { id: 9, title: 'Consumo y Publicidad', description: 'Asesoría legal en la revisión de contratos, cláusulas abusivas, publicidad, comercio electrónico, reclamos, fiscalizaciones y litigios.', image: ConsumoImage },
    { id: 10, title: 'Propiedad industrial e Intelectual', description: 'Asesoría legal en la revisión de contratos, registro de marcas, patentes, derechos de autor, fiscalizaciones y litigios.', image: PropIntelectImage },
    { id: 11, title: 'Bancario Financiero y Fintech', description: 'Asesoría en financiamientos, fondos de inversión, regulación financiera, mercado de capitales, seguros, banca y fintech.', image: FintechImage },
    { id: 12, title: 'Tecnologías y Privacidad', description: 'Asesoría en negociación y cierre de negocios con nuevas tecnologías, incluyendo contratos de software, Cloud, protección de datos y proyectos tecnológicos.', image: DatosImage },
];

const SolucionesLegales = () => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div id="legales">

            <Header />

            <ServiceIntro
                showDescription={showDescription}
                toggleDescription={() => setShowDescription(!showDescription)}
            />

            <div className="flex justify-center items-center gap-6 py-10 text-center flex-wrap">
                {LEGAL_SOLUTIONS.map(solution => (
                    <LegalCard
                        key={solution.id}
                        title={solution.title}
                        description={solution.description}
                        image={solution.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default SolucionesLegales;