import axios from "axios";
import { useState, useEffect } from "react";



const InfoUsuario = ()=>{

    const [state, setState]= useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            let response = await axios("/users/myuser", {
              headers: {
                Authorization: localStorage.getItem("jwt_token"),
              },
            });
            console.log(response.data);
            setState(response.data.myUser);
          } catch (err) {
            console.log(err.response.data);
          }
        };
        getData();
      }, []);


      const content = ()=>{
          return (
              <div>
                  <p>{`Nombre: ${state.name} ${state.surname}`}</p>
                  <p>{`Nombre de Usuario: ${state.user_Name}`}</p>
                  <p>{`Email: ${state.email}`}</p>

              </div>
          );
      }

      return (
        <div>
        {state ? content() : "loading..."}
        </div>
      );

}

export default InfoUsuario;