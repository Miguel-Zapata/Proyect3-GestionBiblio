import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LibroList from "../components/LibroList";
import AddLibro from "../components/AddLibro";

const Libros = () => {
  const [listaLibros, setListaLibros] = useState([]);
  const [miBiblio, setMiBiblio] = useState([]);

  const miBiblioteca = async () => {
    try {
      let response = await axios("/libraries/mylibrary", {
        headers: {
          Authorization: localStorage.getItem("jwt_token"),
        },
      });
      console.log(response.data);
      setMiBiblio(response.data.library.cards);
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.message);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("/cards", {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        console.log(response.data);
        setListaLibros(response.data.cards);
      } catch (err) {
        console.log(err.response.data);
        alert(err.response.data.message);
      }
    };

    getData();
    miBiblioteca();
  }, []);

  return (
    <div>
      {/* <div>
        <label htmlFor="buscaLibro">Buscar</label>
        <input type="search" name="buscaLibro" id="buscaLibro" />
      </div> */}

      {/* <div>
        <button>Filtros</button>
        </div> */}

      <div>
        <Link to="/LibroCrear">
          <button className="boton--libros btn btn-primary">Crear Libro</button>
        </Link>
      </div>

      {listaLibros.map((libro, i) => {
        return (
          <div key={i} className="libros__container">
            <div>
              <LibroList url={`/Libros/${libro._id}`} libro={libro} />
              {!miBiblio.some((miLibro) => miLibro.card._id == libro._id) && (
                <div>
                  <AddLibro refresh={miBiblioteca} idLibro={libro._id} />
                </div>
              )}
              {/* <div>
                <AddLibro idLibro={libro._id}/>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Libros;
