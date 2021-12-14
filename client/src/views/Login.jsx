import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalState from "../context/GlobalState";

const Login = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
    password: "",
  });

  const globalState = useContext(GlobalState);
  const [, setToken] = globalState.token;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault(); // para prevenir lo que hace el form por defecto
    try {
      const response = await axios.post("/authentications/login", state);
      console.log(response.data);

      setToken(response.data.token);
      localStorage.setItem("jwt_token", response.data.token);
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <form>
        <h3>Inicio de Sesión</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            className="form-control"
            placeholder=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          onClick={(e) => submit(e)} // esta sintaxis es por estar dentro del form
          type="submit"
          className="btn btn-primary btn-block"
        >
          Iniciar Sesión
        </button>

        <p className="forgot-password text-right">
          ¿No estás registrado? <Link to="/Registro">Regístrate</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
