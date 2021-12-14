import { useState } from "react";
import Test2 from "./test2";
const Test1= ()=>{

    const [state, setState]= useState(null);

    const handleChange = (e) => {
        setState(e.target.value);
      };

    return (
        <div>

            <input onChange={(e)=>handleChange(e)} type="text" />
            <Test2 texto={state}/>
        </div>
    )

}

export default Test1