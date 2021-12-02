import Form from 'react-bootstrap/Form'


const FormCrearLibro = () => {
  return (
    <div>
      <div>
        <Form.Label>Tipo</Form.Label>
        <Form.Select defaultValue="Selecciona un tipo">
          <option disabled >Selecciona un tipo</option>
          <option>Libro</option>
          <option>Cómic</option>
        </Form.Select>
      </div>

      <div>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Portada</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </div>

      <div>
      <Form.Label>Título</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>Número</Form.Label>
      <Form.Control type="number" placeholder="" />
      </div>

      <div>
      <Form.Label>Escritor</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>Arte</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>Color</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>Editorial</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>Género</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>Serie</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>Número de páginas</Form.Label>
      <Form.Control type="number" placeholder="" />
      </div>

      <div>
      <Form.Label>Idioma</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Label>ISBN</Form.Label>
      <Form.Control type="number" placeholder="" />
      </div>

      <div>
      <Form.Label>Fecha de publicación</Form.Label>
      <Form.Control type="date" placeholder="" />
      </div>

      <div>
      <Form.Label>Formato</Form.Label>
      <Form.Control type="text" placeholder="" />
      </div>

      <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Sinopsis</Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>
      </div>

      <div>
        <button>CREAR LIBRO</button>
      </div>

    </div>
  );
};

export default FormCrearLibro;
