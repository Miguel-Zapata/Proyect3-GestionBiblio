
import axios from "axios";
import {useEffect, useState} from 'react';
import LibroList from "../components/LibroList";

const Libros = ()=>{

    const [listaLibros, setListaLibros] = useState([]);

useEffect(()=>{
    const getData = async ()=>{
        try{
            let response = await axios('http://localhost:5000/api/cards');
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
                <LibroList key={i} libro={libro} />
                </div>
            );
        })}
    </div>
);

}

export default Libros;