import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LibroList from "../components/LibroList";


const Biblioteca = ()=>{

    let { BibliotecaId } = useParams();
  console.log(BibliotecaId);
  
  const [biblioteca, setBiblioteca] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(`/libraries/find/${BibliotecaId}`, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODUyMjE0MCwiZXhwIjoxNjM4NjA4NTQwfQ.TVJB3qjYlWkcgb34CrI19-wNfTqRFTIuaRbY3Qnr2FI",
          },
        });
        console.log(response.data);
        setBiblioteca(response.data.library);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const content = ()=>{
    return (
        <div>
        <div>
            <p>{biblioteca.name}</p>
            <p>{biblioteca.admin}</p>
        </div>

            <div>

            {biblioteca.cards.map((libro,i)=> {
            return(
                <div key={i}>
                    <LibroList  url={`/Bibliotecas/${biblioteca._id}/${libro.card._id}`} libro={libro.card} />
                </div>
            );
        })}
        

             <Link to="/BibliotecaLibro"><button>AQUÍ IRAN LISTADOS LOS LIBROS</button></Link>
            </div>

        </div>

    );
}

  return (
    <div>
    {biblioteca?content():"loading..."}
</div>
  );

}

export default Biblioteca;