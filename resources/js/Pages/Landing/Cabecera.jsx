//Home: Imagen cabecera
import am5logo from '../../../../public/assets/am5-logo.png';

function Cabecera() {
    return (
        <>
            <section
                id="inicio"
                className="cabecera"
                data-component="cabecera"
            >
                <div className="content-wrapper text-center align-items-end">
                    {/* Contenido en la parte derecha */}
                    <div className="box-cabecera">
                        <div className="d-flex flex-row align-items-center justify-content-end gap-3">
                            <img
                                className='d-none d-md-flex ps-0'
                                src={am5logo}
                                alt="Logo de AM5, startup de soluciones legales y comunicación estratégica."
                                fluid
                            />
                            <div className="right-corner"></div>
                            <h1 className="px-3 text-muted">
                                Soluciones legales<br />
                                Negocios<br />
                                Asuntos Públicos
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