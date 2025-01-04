import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Cabecera from './components/Cabecera';
import AboutMe from './components/AboutMe';
import Servicios from './components/Servicios';
import Media from './components/Media';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

import Blog from './components/subpages/Blog';
import Legales from './components/subpages/Legales';
// import Negocios from './components/subpages/Negocios';
// import Comunicaciones from './components/subpages/Comunicaciones';
// import Coach from './components/subpages/Coach';
// import Sostenibilidad from './components/subpages/Sostenibilidad';

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Cabecera />
              <AboutMe />
              <Servicios />
              <Media />
              <Contacto />
            </>
          } />

          <Route path="/blog" element={<Blog />} />
          <Route path="/legales" element={<Legales />} />
          {/* <Route path="/negocios" element={<Negocios />} />
          <Route path="/comunicaciones" element={<Comunicaciones />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/sostenibilidad" element={<Sostenibilidad />} /> */}

          {/*
      <Route path="/contenidos" element={<Contenidos />} />
      <Route path="/rrss" element={<Rrss />} /> 
    */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;