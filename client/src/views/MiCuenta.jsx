import { Routes, Route, Link } from "react-router-dom";

const MiCuenta = ()=>{

    return (
        <div>
            {/* <div>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/Libros">Libros</Link></button>
            <button><Link to="/Bibliotecas">Bibliotecas</Link></button>
            </div> */}

            <div>
            <h3>MI CUENTA</h3>
            </div>

            <div>
            <button><Link to="">Mis Datos</Link></button>
            <button><Link to="">Mi Biblioteca</Link></button>
            <button><Link to="">Mis Reservas</Link></button>
            <button><Link to="">Eliminar Cuenta</Link></button>
            </div>

            
        </div>
    );
};

export default MiCuenta;