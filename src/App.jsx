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
          {/* <Route path="/blog" element={<Blog />} />
    <Route path="/contenidos" element={<Contenidos />} />
    <Route path="/podcast" element={<Podcast />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;