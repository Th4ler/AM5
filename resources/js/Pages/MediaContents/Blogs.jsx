// Template Soluciones Legales: Header + cabecera (imagen, title, button + descripción) + 4x3 cards reversibles (flipcard effect)
//Libreria flipcard -> https://www.npmjs.com/package/reactjs-flip-card -> npm install reactjs-flip-card
//Demo llibreria -> https://react-flip-card-demo.surge.sh/
import { useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import Header from '../Landing/Header';
import logo from '../../../../public/am5-logo.png';
import aboutmePic from '../../../../public/images/aboutmePic.webp';
import BackgroundImage from '../../../../public/images/soluciones-legales.webp';
import CorporateImage from '../../../../public/images/corporate-building.jpg';
import { usePage } from '@inertiajs/react';

const BlogCard = ({ title, description, image_path }) => {
    const cardStyles = {
        front: {
            background: `url(${image_path || '/images/default-blog-image.jpg'}) no-repeat center center / cover`,
            borderRadius: '12px',
            width: '400px',
            height: '225px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            border: '3px solid #ccc',
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

    return (
        <ReactFlipCard
            flipTrigger="onHover"
            direction="vertical"
            frontStyle={cardStyles.front}
            backStyle={cardStyles.back}
            frontComponent={
                <div className="bg-gray-200 text-center flex flex-row items-center justify-center gap-2 p-2">
                    <img src={logo} alt="Logo" className="w-10 h-10 logo" />
                    <p className="text-gray-700 font-semibold m-0">{title}</p>
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
            <h1 className="text-3xl font-semibold underline decoration-primary mb-4">Blogs</h1>
            {showDescription && (
                <p className="text-gray-700 mb-4">
                    Explora mis blogs y descubre cómo puedes mejorar tus habilidades y alcanzar tus objetivos en Derecho, Negocios y más. ¡Lee mis últimas publicaciones y descubre cómo puedes superar los desafíos y lograr el éxito!
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

const Blogs = () => {
    const [showDescription, setShowDescription] = useState(false);
    const { blogs } = usePage().props;

    console.log('Blogs prop recibido directamente:', blogs);

    // Verifica si hay blogs y si tienen la propiedad data
    const blogItems = blogs?.data || blogs || [];

    return (
        <div id="blogs">

            <Header />

            <ServiceIntro
                showDescription={showDescription}
                toggleDescription={() => setShowDescription(!showDescription)}
            />

            <div className="flex justify-center items-center gap-6 py-10 text-center flex-wrap">
                {blogItems.length > 0 ? (
                    blogItems.map(blog => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.content}
                            image_path={blog.image_path}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-lg">No hay blogs publicados disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default Blogs;