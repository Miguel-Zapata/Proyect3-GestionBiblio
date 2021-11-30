import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.css';
import App from './App';
import Registro from './views/Registro';
import Login from './views/Login';
import Libros from './views/Libros';
import Libro from './views/Libro';
import Bibliotecas from './views/Bibliotecas';
import MiCuenta from './views/MiCuenta';
import Home from './views/Home';


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode >
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="Registro" element={<Registro />} />
            <Route path="Login" element={<Login />} />
            <Route exact path="Libros" element={<Libros />} />
            <Route path="Libros/:LibroId" element={<Libro />} />
            <Route path="Bibliotecas" element={<Bibliotecas />} />
            <Route path="MiCuenta" element={<MiCuenta />} />
        </Route>       
      </Routes>
    </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();