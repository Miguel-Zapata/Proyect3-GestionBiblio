import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const InfoLibro = () => {
  let { LibroId } = useParams();
  console.log(LibroId);
  
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(`/cards/find/${LibroId}`, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODUyMjE0MCwiZXhwIjoxNjM4NjA4NTQwfQ.TVJB3qjYlWkcgb34CrI19-wNfTqRFTIuaRbY3Qnr2FI",
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
        <div className="infoLibro__Container">
          <div>
          <img className="infoLibro--portada" src={libro.portada} alt="portada" />
          <h1 className="infoLibro--title">{libro.title} {libro.number}</h1>
          </div>

          <div>
          <p>Escritor: {libro.writer}</p>
          <p></p>
          </div>
        </div>
      );
  }
  return(
      <div>
          {libro?content():"loading..."}
      </div>
  );
  
};

export default InfoLibro;