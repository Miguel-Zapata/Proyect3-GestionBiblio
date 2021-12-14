import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalState from "../context/GlobalState";
import "../styles/micuenta.css";

const Logout = () => {
  let navigate = useNavigate();

  const globalState = useContext(GlobalState);
  const [, setToken] = globalState.token;

  const submit = async (e) => {
    e.preventDefault(); // para prevenir lo que hace el form por defecto
    try {
      setToken(null);
      localStorage.removeItem("jwt_token");
      navigate("/Login");
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <button
        onClick={(e) => submit(e)} // esta sintaxis es por estar dentro del form
        type="submit"
        className="boton--miCuenta btn btn-warning btn-block"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Logout;
