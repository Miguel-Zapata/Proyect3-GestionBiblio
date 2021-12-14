import { Link } from "react-router-dom";
import InfoUsuario from "../components/InfoUsuario";
import Logout from "../components/Logout";
import "../styles/micuenta.css";

const MiCuenta = () => {
  return (
    <div>
      <div>
        <h2>MI CUENTA</h2>
      </div>

      <div className="info--usuario">
        <InfoUsuario />
      </div>

      <div className="boton__container">
        <div>
          <Link to="/MisDatos">
            <button className=" boton--miCuenta btn btn-primary">
              Modificar Datos
            </button>
          </Link>
        </div>
        <div>
          <Link to="/CrearBiblioteca">
            <button className=" boton--miCuenta btn btn-primary">
              Crear Biblioteca
            </button>
          </Link>
        </div>
        <div>
          <Link to="/MiBiblioteca">
            <button className=" boton--miCuenta btn btn-primary">
              Mi Biblioteca
            </button>
          </Link>
        </div>
        <div>
          <Link to="/MisReservas">
            <button className=" boton--miCuenta btn btn-primary">
              Mis Reservas
            </button>
          </Link>
        </div>
        <div>
          <Logout />
        </div>
        {/* <Link to="/MiCuentaDelete"><button>Eliminar Cuenta</button></Link> */}
        {/* <Link to="/MiBibliotecaDelete"><button>Eliminar Biblioteca</button></Link> */}
      </div>
    </div>
  );
};

export default MiCuenta;
