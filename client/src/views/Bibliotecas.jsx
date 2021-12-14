import { useEffect, useState } from "react";
import axios from "axios";
import BiblioList from "../components/BiblioList";
import "../styles/bibliotecas.css"

const Bibliotecas = () => {
  const [listaBibliotecas, setlistaBibliotecas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("/libraries", {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        console.log(response.data);
        setlistaBibliotecas(response.data.libraries);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* <div>
        <button>Buscar...</button>
      </div> */}

      {listaBibliotecas.map((biblioteca, i) => {
        return (
          <div key={i} className="bibliotecas__container">
            <div>
              <BiblioList  biblioteca={biblioteca} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bibliotecas;
