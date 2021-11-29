import { Routes, Route, Link } from "react-router-dom";

const Registro = ()=>{

    return (
        <div>
            <button><Link to="/Home">Home</Link></button>
            <h3>REGISTRO</h3>
            <button><Link to="/Login">Login</Link></button>

            
        </div>
    );
};

export default Registro;