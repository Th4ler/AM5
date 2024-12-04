//Home: Imagen cabecera
import Image from 'react-bootstrap/Image';
import am5logo from '../assets/am5-logo.png';

function Cabecera() {
    return (
        <>
            <section
                id="inicio"
                className="cabecera"
                data-component="cabecera"
            >
                <div className="content-wrapper text-center align-items-end" style={{ flex: 1 }}>
                    {/* Contenido en la parte derecha */}
                    <div className="box-cabecera col-md-5 me-4">
                        <div className="row align-items-center justify-content-end">
                            <Image
                                className='col-auto d-none d-md-flex ps-0'
                                src={am5logo}
                                alt="Logo de AM5, startup de soluciones legales y comunicación estratégica."
                                fluid
                            />
                            <div className="right-corner"></div>
                            <h1 className="text-muted col-auto">
                                Soluciones legales<br />
                                Negocios y<br />
                                Comunicación estratégica
                            </h1>
                        </div>
                    </div>

                </div>
                {/* <div className='cabecera-hr'></div> */}
                
            </section>
            <div className='custom-hr rounded w-75 mb-4'></div>
        </>
    );
}

export default Cabecera;