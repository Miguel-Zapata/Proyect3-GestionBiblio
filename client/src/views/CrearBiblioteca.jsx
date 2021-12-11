
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearBiblioteca = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({
    name: "",
    give: "",
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
      const response = await axios.post("/libraries", state, {
        headers: {
          Authorization: localStorage.getItem("jwt_token"),
        },
      });

      console.log(response.data);
      navigate("/MiBiblioteca");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <div>
        <Form.Label>Pon nombre a tu Biblioteca</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder=""
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div>
        <Form.Label>¿Vas a prestar tus libros?</Form.Label>
        <Form.Select
          defaultValue="Selecciona uno"
          name="give"
          onChange={(e) => handleChange(e)}
        >
          <option disabled>Selecciona uno</option>
          <option value={true}>SÍ</option>
          <option value={false}>NO</option>
        </Form.Select>
      </div>

      <div>
        <button onClick={(e) => submit(e)}>Crear Biblioteca</button>
      </div>
    </div>
  );
};

export default CrearBiblioteca;
