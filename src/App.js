import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Autor from './Autor';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/autor">Autores</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/about" element={<AcercaDe/>} />
        <Route path="/contact" element={<Contacto/>} />
        <Route path="/usuarios" element={<Usuarios/>} />
        <Route path="/autor" element={<Autor/>} />
      </Routes>
    </Router>
  );
}

export default App;
