
import { Link } from "react-router-dom";


const BibliotecaLibro = ()=>{




    return(
        <div>
            <div>
                <Link to="/HacerReserva"><button>Tomar prestado</button></Link>
                <p>AQUÍ LA INFO DEL LIBRO</p>
            </div>
        </div>
    );
}

export default BibliotecaLibro;