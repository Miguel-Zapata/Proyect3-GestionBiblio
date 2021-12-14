import { useEffect, useState } from "react";
import axios from "axios";

const LoTengo = (props) => {
  const addLibro = async () => {
    try {
      let response = await axios.put(
        "/libraries/add-card",
        { card: props.idLibro },
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  };

  return <button onClick={addLibro}>{props.idLibro}</button>;
};

export default LoTengo;
