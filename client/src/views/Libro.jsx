import { useParams } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";

const Libro = ()=>{

    let params = useParams()
console.log(params);

    return (
        <div>
            <div>
            <button><Link to="/Home">Home</Link></button>
            </div>
            
            <div>
            <h3>LIBRO INDEPENDIOENTE</h3>
            </div>
            

            
        </div>
    );
};

export default Libro;