import { useEffect, useState } from "react";



const Test2= (props)=>{

    const [state, setState]= useState(null);

    const handleChange = (e) => {
        setState(e.target.value);
      };

    useEffect(()=>{
        console.log("se ejecuta 1 vez");
    }, []);

    useEffect(()=>{
        console.log("se ejecuta cuando cambia props");
    }, [props])
    
    useEffect(()=>{
        console.log("se ejecuta cuando cambia los state");
    }, [state])

    useEffect(()=>{
        console.log("se jecuta con cada cambio");
    })
return (

    <div>

        <p>{props.texto}</p>
        <input onChange={(e)=>handleChange(e)} type="text" />
    </div>
)
}

export default Test2;