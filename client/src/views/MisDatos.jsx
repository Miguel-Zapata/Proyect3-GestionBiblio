import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MisDatos = () => {
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
    e.preventDefault();

    try {
      const response = await axios.put("/users/update", state, {
        headers: {
          Authorization: localStorage.getItem("jwt_token"),
        },
      });

      console.log(response.data);
      navigate("/MiCuenta");
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <form>
        <h2>Modificar Datos</h2>

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
          className=" boton--miCuenta btn btn-primary"
        >
          Aceptar Cambios
        </button>
      </form>
    </div>
  );
};

export default MisDatos;
