import { Link } from "react-router-dom";
import InfoUsuario from "../components/InfoUsuario";

const MiCuenta = ()=>{

    return (
        <div>
           

            <div>
            <h3>MI CUENTA</h3>
            </div>

            <div>
                <InfoUsuario/>
            </div>

            <div>
            <Link to="/MisDatos"><button>Modificar Datos</button></Link>
            <Link to="/CrearBiblioteca"><button>Crear Biblioteca</button></Link>
            <Link to="/MiBiblioteca"><button>Mi Biblioteca</button></Link>
            <Link to="/MisReservas"><button>Mis Reservas</button></Link>
            <Link to="/MiCuentaDelete"><button>Eliminar Cuenta</button></Link>
            <Link to="/MiBibliotecaDelete"><button>Eliminar Biblioteca</button></Link>
            </div>

            
        </div>
    );
};

export default MiCuenta;