import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LibroList from "../components/LibroList";
import LoTengo from "../components/LoTengo";

const Libros = () => {
  const [listaLibros, setListaLibros] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("/cards", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODcwMDA5MCwiZXhwIjoxNjcwMjU3NjkwfQ.mACPWJKHi7MmgTys7yRAmC-gP2uz5MWzv59GWaya-Ik",
          },
        });
        console.log(response.data);
        setListaLibros(response.data.cards);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="buscaLibro">Buscar</label>
        <input type="search" name="buscaLibro" id="buscaLibro" />
      </div>

      <div>
        <button>Filtros</button>
        <Link to="/LibroCrear">
          <button>Crear Libro</button>
        </Link>
      </div>

      {listaLibros.map((libro, i) => {
        return (
          <div key={i} className="libros__container">
            <div >
              <LibroList url={`/Libros/${libro._id}`} libro={libro} />
              <div>
                <LoTengo />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Libros;
