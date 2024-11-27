//Home: Imagen cabecera
import Image from 'react-bootstrap/Image';
import am5cabecera from '../images/imagenhome.webp';


function Cabecera() {
    return (
        <div className='row'>
            <div className="cabecera">
                <Image src={am5cabecera} fluid />
                <div className='cabecera-hr'></div>
            </div>
        </div>
    );
}

export default Cabecera;