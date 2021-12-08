import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const CrearBiblioteca = () => {
  return (
    <div>
      <div>
        <Form.Label>Pon nombre a tu Biblioteca</Form.Label>
        <Form.Control type="text" placeholder="" />
      </div>

      <div>
        <Form.Label>¿Vas a prestar tus libros?</Form.Label>
        <Form.Select defaultValue="Selecciona uno">
          <option disabled>Selecciona uno</option>
          <option>SÍ</option>
          <option>NO</option>
        </Form.Select>
      </div>

      <div>
        <Link to="/MiBiblioteca">
          <button>Crear Biblioteca</button>
        </Link>
      </div>
    </div>
  );
};

export default CrearBiblioteca;
