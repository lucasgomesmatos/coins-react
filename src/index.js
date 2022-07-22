import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NovoProjeto from './pages/NovoProjeto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/novoprojetos" element={<NovoProjeto />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
