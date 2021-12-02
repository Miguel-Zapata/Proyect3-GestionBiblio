
import { Link } from "react-router-dom";


const MisReservas = ()=>{


    return(
        <div>
            <p>Listado de reservas</p>
            <Link to="/MiReservaDelete"><button>Eliminar reserva</button></Link>
            <Link to="/MisReservasDelete"><button>Eliminar TODAS mis reservas</button></Link>
        </div>
    );
}

export default MisReservas;