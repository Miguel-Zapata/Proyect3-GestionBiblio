import { Link } from "react-router-dom";
import InfoLibro from "../components/InfoLibro";

const BibliotecaLibro = () => {
  return (
    <div>
      <div>
        <a href="#abajo">
          <button>Quiero Reservarlo</button>
        </a>
      </div>

      <div>
        <InfoLibro />
      </div>

      <div>
        <input type="date" name="fecha recogida" id="fechaR" />
        <button>Hacer Reserva</button>
        <a name="abajo"></a>
      </div>
    </div>
  );
};

export default BibliotecaLibro;
