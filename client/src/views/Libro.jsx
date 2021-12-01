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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODI4Njg0OCwiZXhwIjoxNjM4MzczMjQ4fQ._rLWqpZN2siTBYhQshsEEsTdPX4ryu7lG04bpnlZo-k",
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
