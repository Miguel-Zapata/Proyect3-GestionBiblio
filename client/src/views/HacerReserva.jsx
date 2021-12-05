
import { Link } from "react-router-dom";
import InfoLibro from "../components/InfoLibro";

const HacerReserva = () => {
  return (
    <div>
      <div>
        <p>TITULO DE LA BIBLIOTECA</p>
      </div>

      <div>
        <InfoLibro />
      </div>

      <div>
        <input type="date" name="fecha recogida" id="fechaR" />
        <button>Hacer Reserva</button>
      </div>
    </div>
  );
};

export default HacerReserva;
