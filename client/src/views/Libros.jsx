import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LibroList from "../components/LibroList";
import AddLibro from "../components/AddLibro";


const Libros = () => {
  const [listaLibros, setListaLibros] = useState([]);
  const [miBiblio, setMiBiblio] = useState([]);

 /*  useEffect (()=>{
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
      }
  
      let coincide =(miLibro) => miLibro.card._id === "61a0f3b48823c8d2f3ce4c5b";
      console.log(miBiblio.some(coincide));
    };
    miBiblioteca();
  },[]); */
   


  useEffect(() => {

   /*  const miBiblioteca = async () => {
      try {
        let response = await axios("/libraries/mylibrary", {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        // console.log(response.data);
        setMiBiblio(response.data.library.cards);
        
      } catch (err) {
        console.log(err.response.data);
      }
  
      let coincide =(miLibro) =>{
        return (
          miLibro.card._id === "61a0f3b48823c8d2f3ce4c5b"
          );
          console.log(miLibro)

      }
      console.log(miBiblio.some(coincide))
    }; */






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
        console.log(err);
      }
    };
   
    // miBiblioteca();
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

                <AddLibro idLibro={libro._id}/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Libros;
