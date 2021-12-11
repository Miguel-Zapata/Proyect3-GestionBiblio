import axios from "axios";
import { useState, useEffect } from "react";
import LibroList from "../components/LibroList";
// import LoTengo from "../components/LoTengo";

const MiBiblioteca = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("/libraries/mylibrary", {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        console.log(response.data);
        setState(response.data.library);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getData();
  }, []);

  const content = () => {
    return (
      <div>
        <div>
          <h2>{state.name}</h2>
        </div>

        <div>
          <label htmlFor="buscaLibro">Buscar</label>
          <input type="search" name="buscaLibro" id="buscaLibro" />
        </div>

        <div>
          <button>Filtros</button>
        </div>

        {state.cards.map((libro, i) => {
          return (
            <div key={i} className="libros__container">
              <LibroList
                url={`/MiBiblioteca/${libro.card._id}`}
                libro={libro.card}
              />
              <div>
                {/* <LoTengo /> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return <div>{state ? content() : "loading..."}</div>;
};

export default MiBiblioteca;
