import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';
import Home from './views/Home';
import { Routes, Route, Link } from "react-router-dom";
import Libros from './views/Libros';
import Login from './views/Login';
import Registro from './views/Registro';
import Bibliotecas from './views/Bibliotecas';
import MiCuenta from './views/MiCuenta';
import Libro from './views/Libro';

import BarraNavegacion from "./components/Navbar";

function App() {
  return (
    <div className="App">

        <div>
            <BarraNavegacion />
        </div>

<Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Registro" element={<Registro />} />
        <Route path="Login" element={<Login />} />
        <Route path="Libros" element={<Libros />} />
        <Route path="Libros/:LibroId" element={<Libro />} />
        <Route path="Bibliotecas" element={<Bibliotecas />} />
        <Route path="MiCuenta" element={<MiCuenta />} />
      </Routes>

    </div>
  );
}

export default App;
