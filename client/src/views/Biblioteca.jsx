import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTNjOGQwM2E5OTM4YTRjMjUzZGY0YSIsImlhdCI6MTYzODM1MTMzMSwiZXhwIjoxNjM4NDM3NzMxfQ.vcF_58px2elxQbYsyDvCs9z2AEINWyHJ2DvdWpxMRwc",
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
            <button>Ver Libros</button>
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