import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from 'react';
import LibroList from "../components/LibroList";

const Libros = ()=>{

    const [listaLibros, setListaLibros] = useState([]);

useEffect(()=>{
    const getData = async ()=>{
        try{
            let response = await axios('/cards');
            console.log(response.data);
            setListaLibros(response.data.cards);
        }
        catch(err){
            console.log(err);
        }
    }
    getData();
}, []);

return(
    <div>

        <div>
        <button>Filtros</button>
        </div>

        {listaLibros.map((libro,i)=> {
            return(
                <div>
                    <Link style={{ display:"block"}} to={`${libro._id}`} key={i}> <LibroList key={i} libro={libro} /> </Link>
                </div>
            );
        })}
    </div>
);

}

export default Libros;