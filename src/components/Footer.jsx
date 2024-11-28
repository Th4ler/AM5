//Dirección + logo + redes (link)
import logo from '../assets/am5-logo.png';
// import qr from '../assets/am5-qr.png'; //Pedir qr

function Footer() {
  // New trial 
  return (
    <footer id='footer' className="footer pt-4 mb-3"> {/* Cambiar mb-3 general por mb-individual en cada div?? -> mejora version mobil */}
      <div className="container">
        {/* <div className="custom-border-top mx-auto"></div> */}
        <div className="row text-center text-md-start">
          {/* Columna 1: QR */}
          <div className="col-md-3 d-flex justify-content-center align-items-center mb-3">
            <img src={logo} alt="QR" className="img-fluid" style={{ maxWidth: "150px" }} />
          </div>

          {/* Columna 2: Contactos */}
          <div className="col-md-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo"></i>
                Antonio Bellet 193, Oficina 1210, Providencia, RM
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone"></i>
                +569 6344 1988
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-paper"></i>
                {/* <i className="bi bi-envelope-paper text-warning"></i> */}
                contacto@claimy.cl
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="col-md-3">
            <h5>Redes Sociales</h5>
            <div className="row">
              <div className="col">
                <ul className="list-unstyled">
                  <li className='mb-2'><i className="bi bi-spotify"></i><a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-muted">Spotify</a></li>
                  <li className='mb-2'><i className="bi bi-instagram"></i><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted">Instagram</a></li>
                  <li><i className="bi bi-facebook"></i><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted">Facebook</a></li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li className='mb-2'><i className="bi bi-linkedin"></i><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted">LinkedIn</a></li>
                  <li className='mb-2'><i className="bi bi-youtube"></i><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted">YouTube</a></li>
                  <li><i className="bi bi-tiktok"></i><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted">TikTok</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna 4: Logo */}
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <img src={logo} alt="Logo Empresa" className="img-fluid" style={{ maxWidth: "100px" }} />
          </div>
        </div>
      </div>
    </footer>
  );


  //First Trial
  // return (
  //   <div className='row'>
  //     <footer id='footer' className="bg-light text-dark row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 justify-content-between">
  //       <div className="col-mb-3 align-items-center">
  //         <a href="#home" className="logo"> {/* Cambiar ruta QR */}
  //           <img src={logo} alt="QR" /> {/* Cambiar por {qr} */}
  //         </a>
  //       </div>
  //       <div className="col-mb-3 align-items-center">
  //         <h5>Contacto</h5>
  //         <ul className='nav flex-column'>
  //           <li className='nav-item mb-2'>
  //             <p>Antonio Bellet 193, Oficina 1210,
  //               Providencia, Región Metropolitana
  //             </p>
  //           </li>
  //           <li className='nav-item mb-2'>
  //             <p>+569 6344 1988</p>
  //           </li>
  //           <li className='nav-item mb-2'>
  //             <p>contacto@claimy.cl</p>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="col-mb-3 align-items-center">
  //         <h5>Redes sociales</h5>
  //         <div className='row'>
  //           <div className='col'>
  //             <ul className='nav flex-column'>
  //               <li className='nav-item mb-2'>
  //                 <a href='https://open.spotify.comn'>Spotify</a>
  //               </li>
  //               <li className='nav-item mb-2'>
  //                 <a href='https://open.spotify.comn'>Instagram</a>
  //               </li>            <li className='nav-item mb-2'>
  //                 <a href='https://open.spotify.comn'>Facebook</a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className='col'>
  //             <ul className='nav flex-column'>
  //               <li className='nav-item mb-2'>
  //                 <a href='https://open.spotify.comn'>Linkedin</a>
  //               </li>
  //               <li className='nav-item mb-2'>
  //                 <a href='https://open.spotify.comn'>Youtube</a>
  //               </li>            <li className='nav-item mb-2'>
  //                 <a href='https://open.spotify.comn'>Tik-Tok</a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="col-mb-3 align-items-center">
  //         <a href="#home" className="logo">
  //           <img src={logo} alt="Logo" />
  //         </a>
  //       </div>
  //     </footer>
  //   </div>
  // );
}

export default Footer;


//Old footer
// return (
//   <div className="container">
//     <div className='row'>
//       <footer className="bg-light text-dark text-center p-3">
//         <div className="col-md-2">
//           <img></img>
//         </div>
//         <p>Dirección de la empresa</p>
//         <div>Iconos de redes sociales</div>
//         <p>© 2023 Nombre de la empresa</p>
//       </footer>
//     </div>
//   </div>
// );
// }