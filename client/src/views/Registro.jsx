import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({
    name: "",
    surname: "",
    user_Name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault(); // para prevenir lo que hace el form por defecto
    try {
      const response = await axios.post("/authentications/create-user", state);
      console.log(response.data);

      navigate("/Login");

    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <form>
        <h3>Registro de usuario</h3>

        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            name="surname"
            className="form-control"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Nombre de Usuario</label>
          <input
            type="text"
            name="user_Name"
            className="form-control"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          onClick={(e) => submit(e)}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Registrarse
        </button>
        <p className="forgot-password text-right">
          ¿Ya estás registrado? <Link to="/Login">Inicia Sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Registro;
