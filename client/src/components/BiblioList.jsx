import { Link } from "react-router-dom";
import "../styles/bibliotecas.css"

const BiblioList = (props) => {
  return (
    <div className="container_biblioList">
      <div className="biblioList--info">
        <ul>
          <li>
            <Link
              className="biblioList--link"
              to={`${props.biblioteca._id}`}
              key={props.biblioteca._id}
            >
              {" "}
              <h5>{props.biblioteca.name}</h5>
            </Link>
            <ul>
              <li>{!props.biblioteca.give?"Presta libros: NO":"Presta libros: SÍ" /* `Prestamos: ${props.biblioteca.give}` */}</li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default BiblioList;
