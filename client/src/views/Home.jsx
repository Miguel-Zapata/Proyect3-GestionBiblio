
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";


const Home = ()=>{

    const [registro, setRegistro] = useState("");

    return (
        <div>
       
        <div>
            <Link to="/Libros"><button>Libros</button></Link>
            <button><Link to="/Bibliotecas">Bibliotecas</Link></button>
            <button><Link to="/Registro">Registro</Link></button>
            <button><Link to="/Login">Login</Link></button>
            <button><Link to="/MiCuenta">Mi Cuenta</Link></button>
        </div>
            
            <h1>BIGEST</h1>
            <h3>Con Bigest podrás gestionar cualquier tipo de biblioteca. Desde tu colección privada, hasta una biblioteca pública.</h3>
        </div>
    );
};

export default Home;