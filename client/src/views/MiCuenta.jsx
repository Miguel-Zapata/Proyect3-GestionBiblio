import { Link } from "react-router-dom";

const MiCuenta = ()=>{

    return (
        <div>
           

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