import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Libro = () => {
  let { LibroId } = useParams();
  console.log(LibroId);
  
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(`/cards/find/${LibroId}`, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODQzNTY4MiwiZXhwIjoxNjM4NTIyMDgyfQ.x9TvA_z7oVNGQmP-aWRGMh0U0EhwSTmJ570av6745hw",
          },
        });
        console.log(response.data);
        setLibro(response.data.card);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const content = ()=>{
      return (
        <div>
          <p>{libro.title}</p>
          <button>Añadir a mi Biblioteca</button>
        </div>
      );
  }
  return(
      <div>
          {libro?content():"loading..."}
      </div>
  );
  
};

export default Libro;
