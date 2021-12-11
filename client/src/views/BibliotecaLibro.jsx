import axios from "axios";
import req from "express/lib/request";
import InfoLibro from "../components/InfoLibro";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BibliotecaLibro = () => {

  let navigate = useNavigate();
  let { BibliotecaId } = useParams();
  let { LibroId } = useParams();
  console.log(BibliotecaId);
  console.log(LibroId);

  let [state, setState] = useState({
    library: BibliotecaId,
    card: LibroId,
    start_Date:""
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };



  const reservar = async (e)=>{
    e.preventDefault();

    try {
      let response = await axios.post( "/bookings", state,
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );
      console.log(response.data);
      navigate("/MisReservas");
    } catch (err) {
      console.log(err.response.data);
    }

  }





  return (
    <div>
      <div>
        <a href="#abajo">
          <button>Quiero Reservarlo</button>
        </a>
      </div>

      <div>
        <InfoLibro />
      </div>

      <div>
        <input type="date" name="start_Date" id="fechaR" onChange={(e) => handleChange(e)}/>
        <button onClick={(e) => reservar(e)}>Hacer Reserva</button>
        <a name="abajo"></a>
      </div>
    </div>
  );
};

export default BibliotecaLibro;
