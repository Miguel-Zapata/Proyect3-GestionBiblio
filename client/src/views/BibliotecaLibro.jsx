
import { Link } from "react-router-dom";
import InfoLibro from "../components/InfoLibro";


const BibliotecaLibro = ()=>{

    return(
        <div>
            <div>
                <Link to="/HacerReserva"><button>Tomar prestado</button></Link>
            </div>
                <InfoLibro/>
        </div>
    );
}

export default BibliotecaLibro;