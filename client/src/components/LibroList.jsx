import '../styles/Libros.css';
import Libros from '../views/Libros';



const LibroList = (props)=>{
return(
<div className="container_libroList">

    <div className="libroList--portada">
        <img className="libroList--portada__imagen" alt="" src={props.libro.portada}/>
    </div>

    <div className="libroList--info">
        <h5>{props.libro.title} {props.libro.number}</h5>
        <p>{props.libro.writer}</p>
        <p>{props.libro.editorial}</p>
        <p>{props.libro.language}</p>
    </div>
</div>
    );

}

export default LibroList;