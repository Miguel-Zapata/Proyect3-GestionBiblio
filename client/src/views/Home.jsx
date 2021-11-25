import axios from "axios";
import { useState } from "react";

const Home = ()=>{

    const [registro, setRegistro] = useState("");

    return (
        <div>
            <button onClick={()=>setRegistro("existe")}>Registrate</button>
            <p>{registro?"TE HAS IDO A REGISTRO":""}</p>
            <h1>BIGEST</h1>
            <h3>Con Bigest podrás gestionar cualquier tipo de biblioteca. Desde tu colección privada, hasta una biblioteca pública.</h3>
        </div>
    );
};

export default Home;