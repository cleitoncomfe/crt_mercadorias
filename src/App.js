import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Cadastrar from './pages/cadastrar'
import Consultar from './pages/consultar'
import Liberar from './pages/liberar'

//import Contents from './componentes/contents';
import Menu from './componentes/menu';
import './styles/app.css'

function App() {
  return (
      <Router>
        <div>
        <Menu/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cadastrar" element={<Cadastrar/>} />
          <Route path="/consultar" element={<Consultar/>} />
          <Route path="/liberar" element={<Liberar/>} />
        </Routes>

      </Router>
  );
}

export default App;
