import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Libros.css";

const MisReservas = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("/api/users/mybookings", {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        console.log(response.data);
        setState(response.data.myBookings);
      } catch (err) {
        console.log(err.response.data);
        alert(err.response.data.message);
      }
    };
    getData();
  }, []);

  const content = () => {
    return (
      <div>
        <div>
          <h2>Mis Reservas</h2>
        </div>

        {state.map((reserva, i) => {
          return (
            <div key={i} className="libros__container">
              <div>
                <div className="container_libroList">
                  <div className="libroList--portada">
                    <img
                      className="libroList--portada__imagen"
                      alt=""
                      src={reserva.card.portada}
                    />
                  </div>
                  <div className="libroList--info">
                    <div>
                      <h5 className="reservas--titulo">{reserva.card.title}</h5>
                      <p>{`Recoger: ${reserva.start_Date}`}</p>
                      <p>{`Devolver: ${reserva.finish_Date}`}</p>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <Link to="/MiReservaDelete">
                    <button>Eliminar reserva</button>
                  </Link>
                </div> */}
              </div>
            </div>
          );
        })}

        <Link to="/MisReservasDelete">
          {/* <button>Eliminar TODAS mis reservas</button> */}
        </Link>
      </div>
    );
  };

  return <div>{state ? content() : "loading..."}</div>;
};

export default MisReservas;
