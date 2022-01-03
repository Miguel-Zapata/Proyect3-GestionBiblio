import axios from "axios";

const AddLibro = (props) => {
  const addLibro = async () => {
    try {
      let response = await axios.put(
        "/api/libraries/add-card",
        { card: props.idLibro },
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );
      console.log(response.data);
      props.refresh();
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.message);
    }
  };

  
  return (
    <button className="boton--libros btn btn-primary" onClick={addLibro}>
      Añadir a mi Biblioteca
    </button>
  );
};

export default AddLibro;
