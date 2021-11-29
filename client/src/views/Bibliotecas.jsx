import { Routes, Route, Link } from "react-router-dom";

const Bibliotecas = ()=>{

    return (
        <div>
            <div>
            <button><Link to="/Home">Home</Link></button>
            <button><Link to="/Libros">Libros</Link></button>
            <button><Link to="/MiCuenta">Mi Cuenta</Link></button>
            </div>

            <div>
            
             <button>Buscar...</button>
        
            </div>

            <div>
            <h3>BIBLIOTECAS</h3>
            </div>
        </div>
    );
};

export default Bibliotecas;