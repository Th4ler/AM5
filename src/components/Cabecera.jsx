//Home: Imagen cabecera
import Image from 'react-bootstrap/Image';
import am5cabecera from '../images/imagenhome.webp';
import am5logo from '../assets/am5-logo.png';

function Cabecera() {
    return (
        <section id="inicio" className='d-flex flex-column' data-component="cabecera">
            <div className="cabecera" style={{ height: '100vh', backgroundImage: `url(${am5cabecera})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
                <div className="text-center col-md-4 offset-md-7-5">
                    <div className='box-cabecera'>
                        <div className='row'>
                            <Image className='col-md-3' src={am5logo} alt='Logo de AM5, startup de soluciones legales y comunicación estratégica.' fluid style={{ width: '140px', height: 'auto', objectFit: 'contain' }} />
                            
                            <div className="right-corner"></div>
                            <h1 className='text-muted col-md-8'>Soluciones legales<br></br> Negocios y<br></br> Comunicación estratégica</h1>
                        </div>
                    </div>                  
                </div>
                
            </div>
            {/* <div className='cabecera-hr'></div> */}
            
            <div className='custom-hr rounded w-75 mb-4'></div>
        </section>
    );
}

export default Cabecera;