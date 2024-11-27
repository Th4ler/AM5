//Dirección + logo + redes (link)
import logo from '../assets/am5-logo.png';
// import qr from '../assets/am5-qr.png'; //Pedir qr

function Footer() {
  return (
    <div className='row'>
      <footer id='footer' className="bg-light text-dark row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 justify-content-between">
        <div className="col-mb-3 align-items-center">
          <a href="#home" className="logo"> {/* Cambiar ruta QR */}
            <img src={logo} alt="QR" /> {/* Cambiar por {qr} */}
          </a>
        </div>
        <div className="col-mb-3 align-items-center">
          <h5>Contacto</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <p>Antonio Bellet 193, Oficina 1210,
                Providencia, Región Metropolitana
              </p>
            </li>
            <li className='nav-item mb-2'>
              <p>+569 6344 1988</p>
            </li>
            <li className='nav-item mb-2'>
              <p>contacto@claimy.cl</p>
            </li>
          </ul>
        </div>
        <div className="col-mb-3 align-items-center">
          <h5>Redes sociales</h5>
          <div className='row'>
            <div className='col'>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <a href='https://open.spotify.comn'>Spotify</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='https://open.spotify.comn'>Instagram</a>
                </li>            <li className='nav-item mb-2'>
                  <a href='https://open.spotify.comn'>Facebook</a>
                </li>
              </ul>
            </div>
            <div className='col'>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <a href='https://open.spotify.comn'>Linkedin</a>
                </li>
                <li className='nav-item mb-2'>
                  <a href='https://open.spotify.comn'>Youtube</a>
                </li>            <li className='nav-item mb-2'>
                  <a href='https://open.spotify.comn'>Tik-Tok</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-mb-3 align-items-center">
          <a href="#home" className="logo">
            <img src={logo} alt="Logo" />
          </a>
        </div>
      </footer>
    </div>
  );
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