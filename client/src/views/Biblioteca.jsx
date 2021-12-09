import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LibroList from "../components/LibroList";

const Biblioteca = () => {
  let { BibliotecaId } = useParams();
  console.log(BibliotecaId);

  const [biblioteca, setBiblioteca] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(`/libraries/find/${BibliotecaId}`, {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        console.log(response.data);
        setBiblioteca(response.data.library);
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
          <p>{biblioteca.name}</p>
        </div>

        {biblioteca.cards.map((libro, i) => {
          return (
            <div key={i} className="libros__container">
              <LibroList
                url={`/Bibliotecas/${biblioteca._id}/${libro.card._id}`}
                libro={libro.card}
              />
            </div>
            
          );
        })}
      </div>
    );
  };

  return <div>{biblioteca ? content() : "loading..."}</div>;
};

export default Biblioteca;
