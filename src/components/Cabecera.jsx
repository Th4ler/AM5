//Home: Imagen cabecera
import Image from 'react-bootstrap/Image';
import am5cabecera from '../images/imagenhome.webp';


function Cabecera() {
    return (
        <div className='d-flex flex-column'>
            <div className="cabecera">
                <Image src={am5cabecera} alt='Imagen de la cabecera de la página de AM5, startup de soluciones legales y comunicación estratégica.' fluid />
            </div>
            {/* <div className='cabecera-hr'></div> */}
            <div className='custom-hr rounded w-75 mb-4'></div>
        </div>
    );
}

export default Cabecera;