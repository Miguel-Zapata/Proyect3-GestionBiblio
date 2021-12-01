import { Link } from "react-router-dom";
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
            <label htmlFor="buscaLibro">Buscar</label>
            <input type="search" name="buscaLibro" id="buscaLibro" />
        </div>

        <div>
        <button>Filtros</button>
        <Link to="/LibroCrear"><button>Crear Libro</button></Link>
        </div>


        {listaLibros.map((libro,i)=> {
            return(
                <div>
                    <LibroList key={i} libro={libro} />
                </div>
            );
        })}
    </div>
);

}

export default Libros;