import axios from "axios";
import { useState } from "react";
import AlertaDanger from "./AlertaDanger";

const AddLibro = (props) => {
  const [alerta, setAlerta] = useState(null);
  const addLibro = async () => {
    try {
      let response = await axios.put(
        "/libraries/add-card",
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
      setAlerta(err.response.data.message);
      // alert(err.response.data.message);
    }
  };

  return (
    <div>
      <button className="boton--libros btn btn-primary" onClick={addLibro}>
        Añadir a mi Biblioteca
      </button>

      <div>
        {alerta && <AlertaDanger setalerta={setAlerta} mensaje={alerta} />}
      </div>
    </div>
  );
};

export default AddLibro;
