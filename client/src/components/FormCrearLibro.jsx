import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Libros.css"

const FormCrearLibro = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({
    type: "",
    portada: "",
    title: "",
    number: "",
    writer: "",
    art: "",
    color: "",
    editorial: "",
    genre: "",
    serie: "",
    page_Number: "",
    language: "",
    isbn: "",
    publication_Date: "",
    format: "",
    synopsis: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const inputFile = useRef();

  const submit = async (e) => {
    e.preventDefault(); // para prevenir lo que hace el form por defecto
    const form_data = new FormData();
    form_data.append("type", state.type);
    form_data.append("portada", state.portada);
    form_data.append("title", state.title);
    form_data.append("number", state.number);
    form_data.append("writer", state.writer);
    form_data.append("art", state.art);
    form_data.append("color", state.color);
    form_data.append("editorial", state.editorial);
    form_data.append("genre", state.genre);
    form_data.append("serie", state.serie);
    form_data.append("page_Number", state.page_Number);
    form_data.append("language", state.language);
    form_data.append("isbn", state.isbn);
    form_data.append("publication_Date", state.publication_Date);
    form_data.append("format", state.format);
    form_data.append("synopsis", state.synopsis);
    try {
      const response = await axios.post("/cards", form_data, {
        headers: {
          Authorization: localStorage.getItem("jwt_token"),
        },
      });

      console.log(response.data);

      navigate("/Libros");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleChange(e)} className="form__container">
        <div>
          <Form.Label>Tipo</Form.Label>
          <Form.Select
            onChange={(e) => handleChange(e)}
            name="type"
            defaultValue="Selecciona un tipo"
          >
            <option disabled>Selecciona un tipo</option>
            <option>Libro</option>
            <option>Cómic</option>
          </Form.Select>
        </div>

        <div>
          {/* <Form.Group controlId="formFile" className="mb-3"> */}
            <Form.Label>Portada</Form.Label>
            <Form.Control
              onChange={(e) => {
                setState({
                  ...state,
                  portada: e.target.files[0],
                });
              }}
              name="portada"
              type="file"
            />
          {/* </Form.Group> */}
        </div>

        <div>
          <Form.Label>Título</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="title"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Número</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="number"
            type="number"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Escritor</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="writer"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Arte</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="art"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Color</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="color"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Editorial</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="editorial"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Género</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="genre"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Serie</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="serie"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Número de páginas</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="page_Number"
            type="number"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Idioma</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="language"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="isbn"
            type="number"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Fecha de publicación</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="publication_Date"
            type="date"
            placeholder=""
          />
        </div>

        <div>
          <Form.Label>Formato</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            name="format"
            type="text"
            placeholder=""
          />
        </div>

        <div>
          {/* <Form.Group className="" controlId="exampleForm.ControlTextarea1"> */}
            <Form.Label>Sinopsis</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              name="synopsis"
              as="textarea"
              rows={2}
            />
          {/* </Form.Group> */}
        </div>

        <div>
          <button
            onClick={(e) => submit(e)}
            type="submit"
            className=" boton--libros btn btn-primary"
          >
            CREAR LIBRO
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCrearLibro;
