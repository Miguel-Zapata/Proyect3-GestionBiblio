import '../styles/Libros.css';
import { Link } from "react-router-dom";



const LibroList = (props)=>{


return(
<div className="container_libroList">

    <div className="libroList--portada">
        <img className="libroList--portada__imagen" alt="" src={props.libro.portada}/>
    </div>

    <div className="libroList--info">
    <Link className="libroList--link" to={`${props.url}`} key={props.libro._id}> <h5>{props.libro.title} {props.libro.number}</h5></Link>
        <p>{props.libro.writer}</p>
        <p>{props.libro.editorial}</p>
        <p>{props.libro.language}</p>
        <p>{!props.condition?"":"Disponible" /* `Disponible: ${props.condition}` */}</p>
        {/* <p>{`Disponible: ${props.condition}`}</p> */}
        
    </div>
</div>
    );

}

export default LibroList;