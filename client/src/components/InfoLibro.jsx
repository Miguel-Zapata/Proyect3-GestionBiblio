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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODYwNjc1MSwiZXhwIjoxNjM4NjkzMTUxfQ.KglbB8DYpPHLDSlgJSM-2ma1z9GzOxo0CbaoPPSX2t8",
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
          <p>Arte: {libro.art}</p>
          <p>Color: {libro.color}</p>
          <p>Editorial: {libro.editorial}</p>
          <p>Género: {libro.genre}</p>
          <p>Serie: {libro.serie}</p>
          <p>Nº páginas: {libro.page_Number}</p>
          <p>Idioma: {libro.language}</p>
          <p>ISBN: {libro.isbn}</p>
          <p>Fecha Publicación: {libro.publication_Date}</p>
          <p>Formato: {libro.format}</p>
          <p className="infoLibro--sinopsis">{libro.synopsis}</p>
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