
import { Link } from "react-router-dom";

const BiblioList = (props)=>{

    return(
        <div className="container_biblioList">
        
            
        
            <div className="biblioList--info">
                <ul>
                <li><Link className="biblioList--link" to={`${props.biblioteca._id}`} key={props.biblioteca._id}> <h5>{props.biblioteca.name}</h5></Link></li>
                </ul>
            </div>
        </div>
            );

}

export default BiblioList;