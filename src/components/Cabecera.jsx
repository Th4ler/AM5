//Insertar imagen cabecera
import Image from 'react-bootstrap/Image';
import am5cabecera from '../images/am5cabecera.jpg';

function Cabecera() {
    return (
        <div className='row'>
            <div className="cabecera">
                <Image src={am5cabecera} fluid />
                <div className='p-1 mb-4 bg-secondary opacity-50'></div>
                {/* <hr /> */}
            </div>
        </div>
    );
}

export default Cabecera;
