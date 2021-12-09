
import axios from "axios";
import { useState, useEffect } from "react";

const InfoBiblioteca = ()=>{

    const [state, setState]= useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            let response = await axios("/libraries/mylibrary", {
              headers: {
                Authorization: localStorage.getItem("jwt_token"),
              },
            });
            console.log(response.data);
            setState(response.data.library);
          } catch (err) {
            console.log(err.response.data);
          }
        };
        getData();
      }, []);

      const content = ()=>{
          return (
              <h2>{state.name}</h2>
          );
      }
      return (
        <div>
        {state ? content() : "loading..."}
        </div>
      );


}

export default InfoBiblioteca;