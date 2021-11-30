import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';
import Home from './views/Home';
import { Routes, Route, Link } from "react-router-dom";
import Libros from './views/Libros';
import Login from './views/Login';
import Registro from './views/Registro';
import Bibliotecas from './views/Bibliotecas';
import MiCuenta from './views/MiCuenta';
import { Outlet } from "react-router";

import BarraNavegacion from "./components/Navbar";

function App() {
  return (
    <div>

      <div>
        <Outlet />  
      </div>

      <div>
        <BarraNavegacion />
      </div>

    </div>

    
  );
}

export default App;
