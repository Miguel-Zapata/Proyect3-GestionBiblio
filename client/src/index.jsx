import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Registro from "./views/Registro";
import Login from "./views/Login";
import Libros from "./views/Libros";
import Libro from "./views/Libro";
import Bibliotecas from "./views/Bibliotecas";
import Biblioteca from "./views/Biblioteca";
import BibliotecaLibro from "./views/BibliotecaLibro";
import MiCuenta from "./views/MiCuenta";
import Home from "./views/Home";
import MisDatos from "./views/MisDatos";
import MiBiblioteca from "./views/MiBiblioteca";
import MiBibliotecaLibro from "./views/MiBibliotecaLibro";
import MiBibliotecaDelete from "./views/MiBibliotecaDelete";
import MiBibliotecaLibroDelete from "./views/MiBibliotecaLibroDelete";
import MisReservas from "./views/MisReservas";
import MisReservasDelete from "./views/MisReservasDelete";
import MiReservaDelete from "./views/MiReservaDelete";
import MiCuentaDelete from "./views/MiCuentaDelete";
import LibroCrear from "./views/LibroCrear";
import CrearBiblioteca from "./views/CrearBiblioteca";
import RequireAuth from "./utils/PrivateRoute";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Registro" element={<Registro />} />
          <Route path="Login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route exact path="Libros" element={<Libros />} />
            <Route exact path="LibroCrear" element={<LibroCrear />} />
            <Route path="Libros/:LibroId" element={<Libro />} />
            <Route path="Bibliotecas" element={<Bibliotecas />} />
            <Route path="Bibliotecas/:BibliotecaId" element={<Biblioteca />} />
            <Route
              path="Bibliotecas/:BibliotecaId/:LibroId"
              element={<BibliotecaLibro />}
            />
            <Route path="MiCuenta" element={<MiCuenta />} />
            <Route path="MisDatos" element={<MisDatos />} />
            <Route path="CrearBiblioteca" element={<CrearBiblioteca />} />
            <Route path="MiBiblioteca" element={<MiBiblioteca />} />
            <Route
              path="MiBiblioteca/:LibroId"
              element={<MiBibliotecaLibro />}
            />
            <Route path="MiBibliotecaDelete" element={<MiBibliotecaDelete />} />
            <Route
              path="MiBibliotecaLibroDelete"
              element={<MiBibliotecaLibroDelete />}
            />
            <Route path="MisReservas" element={<MisReservas />} />
            <Route path="MisReservasDelete" element={<MisReservasDelete />} />
            <Route path="MiReservaDelete" element={<MiReservaDelete />} />
            <Route path="MiCuentaDelete" element={<MiCuentaDelete />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
