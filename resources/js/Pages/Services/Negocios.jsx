// Template Soluciones Legales: Header + cabecera (imagen, title, button + descripción) + 4x3 cards reversibles (flipcard effect)
//Libreria flipcard -> https://www.npmjs.com/package/reactjs-flip-card -> npm install reactjs-flip-card
//Demo llibreria -> https://react-flip-card-demo.surge.sh/
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import ReactFlipCard from 'reactjs-flip-card';
import Header from '../Landing/Header';
import logo from '../../../../public/am5-logo.png';
import aboutmePic from '../../../../public/images/aboutmePic.webp';
import BackgroundImage from '../../../../public/images/Negocios.webp';
import Image1 from '../../../../public/images/adultWorking.webp';
import Image2 from '../../../../public/images/businessWomen.webp';
import Image3 from '../../../../public/images/graphicDesigner.webp';
import Image4 from '../../../../public/images/increaseInflation.jpg';
import Image5 from '../../../../public/images/manDeveloper.webp';
import Image6 from '../../../../public/images/companyMeeting.webp';
import Image7 from '../../../../public/images/marketing.webp';
import Spinner from '../../Components/Spinner';

const BusinessCards = ({ title, description, image }) => {
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
                        height={225}
                        offset={300}
                        threshold={0.95}
                        onContentVisible={handleImagePreload}
                    >
                        <div className="relative w-full h-full">
                            {!imageLoaded && <Spinner />}
                            
                            <div 
                                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                                    imageLoaded ? 'opacity-100' : 'opacity-0'
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
                    <div className="bg-gray-200 text-center flex flex-row items-center justify-center gap-2 p-2 absolute bottom-0 w-full z-10">
                        <img src={logo} alt="Logo" className="w-10 h-10 logo" />
                        <p className="text-gray-700 font-semibold m-0">{title}</p>
                    </div>
                </div>
            }
            backComponent={
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="custom-border-box">
                        <div className="left-corner" />
                        <div className="right-corner" />
                        <h3 className="text-lg font-bold z-10 text-center">{title}</h3>
                        <p className="text-gray-600 text-sm text-center z-10 mt-2">{description}</p>
                    </div>
                </div>
            }
        />
    );
};

const ServiceIntro = ({ showDescription, toggleDescription }) => (
    <div className="flex flex-wrap md:flex-nowrap items-center bg-white">
        <div className="w-full md:w-2/3">
            <img src={BackgroundImage} alt="Imagen de cabecera de la sección Soluciones legales" className="w-full max-h-96" />
        </div>
        <div className="w-full md:w-1/3 px-6 flex flex-col items-start">
            <h1 className="text-3xl font-semibold underline decoration-primary mb-4">Soluciones de Negocio y BackOffice</h1>
            {showDescription && (
                <p className="text-gray-700 mb-4">
                    Ofrecemos soluciones de negocio y backoffice diseñadas para impulsar el crecimiento diario de tu empresa, optimizando operaciones y fortaleciendo cada área clave para tu éxito.
                </p>
            )}
            <button
                className="bg-dark-grey text-primary py-2 px-4 rounded-full flex items-center gap-2 hover:bg-black"
                onClick={toggleDescription}
            >
                Ver más
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>
);

const LEGAL_SOLUTIONS = [
    { id: 1, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: Image1 },
    { id: 2, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: Image2 },
    { id: 3, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: Image3 },
    { id: 4, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: Image4 },
    { id: 5, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: Image5 },
    { id: 6, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: Image6 },
    { id: 7, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: Image7 },
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
                    <BusinessCards
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